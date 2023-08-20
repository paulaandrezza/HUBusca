import { Text } from '@/app/theme/sharedStyles';
import { RepoCard } from '@/components/RepoCard';
import { IRepositorie } from '@/services/interfaces/Repositore';
import { useEffect, useState } from 'react';

export const RepoSection = ({
  loading,
  repos,
  filter,
}: {
  loading: boolean;
  repos: IRepositorie[] | null;
  filter: string;
}) => {
  const [reposToShow, setReposToShow] = useState<IRepositorie[] | null>(repos);

  useEffect(() => {
    let newList: IRepositorie[] | null = null;

    if (filter === 'all') {
      newList = repos;
    } else if (repos) {
      newList = repos.filter((item) => {
        if (item.languages && item.languages.length > 0) {
          return item.languages.includes(filter);
        }
        return false;
      });
    }

    setReposToShow(newList);
  }, [filter, repos]);

  if (loading) {
    return <Text>Carregando...</Text>;
  }

  return reposToShow?.map((repo: IRepositorie) => (
    <RepoCard key={repo.id} repoInfo={repo} />
  ));
};
