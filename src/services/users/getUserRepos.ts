import axios from 'axios';
import { IRepositorie } from '../interfaces/Repositore';

export async function getUserRepos(
  username: string
): Promise<IRepositorie[] | null> {
  try {
    const nextPattern = /(?<=<)([\S]*)(?=>; rel="Next")/i;
    let pagesRemaining = true;
    let allRepos: IRepositorie[] = [];
    let url = `https://api.github.com/users/${username}/repos`;

    while (pagesRemaining) {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
        },
      });

      const parsedData = await parseData(response.data);
      allRepos = [...allRepos, ...parsedData];

      const linkHeader = response.headers.link;

      pagesRemaining = linkHeader && linkHeader.includes(`rel=\"next\"`);

      if (pagesRemaining) {
        url = linkHeader.match(nextPattern)[0];
      }
    }

    return allRepos;
  } catch (err) {
    console.error('Error searching GitHub user:', err);
    return null;
  }
}

const getLanguages = async (url: string) => {
  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
    },
  });
  return Object.keys(response.data);
};

async function parseData(data: any) {
  // If the data is an array, return that
  if (Array.isArray(data)) {
    const formattedRepos = await Promise.all(
      data.map(async (repo) => {
        const languages = await getLanguages(repo.languages_url);
        return {
          id: repo.id,
          name: repo.name,
          html_url: repo.html_url,
          homepage: repo.homepage,
          description: repo.description,
          created_at: repo.created_at,
          updated_at: repo.updated_at,
          pushed_at: repo.pushed_at,
          languages: languages,
        };
      })
    );

    return formattedRepos;
  }

  // Some endpoints respond with 204 No Content instead of empty array
  //   when there is no data. In that case, return an empty array.
  if (!data) {
    return [];
  }

  // Otherwise, the array of items that we want is in an object
  // Delete keys that don't include the array of items
  delete data.incomplete_results;
  delete data.repository_selection;
  delete data.total_count;
  // Pull out the array of items
  const namespaceKey = Object.keys(data)[0];
  data = data[namespaceKey];

  return data;
}
