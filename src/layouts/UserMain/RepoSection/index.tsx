import { Button, Text } from '@/app/theme/sharedStyles';
import { RepoCard } from '@/components/RepoCard';
import { IRepositorie } from '@/services/interfaces/Repositore';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

interface RepoSectionProps {
  loading: boolean;
  repos: IRepositorie[] | null;
  filter: string;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  currentRegexSearch: RegExp | undefined;
}

export const RepoSection = ({
  loading,
  repos,
  filter,
  currentPage,
  setCurrentPage,
  currentRegexSearch,
}: RepoSectionProps) => {
  const [reposToShow, setReposToShow] = useState<IRepositorie[] | null>(repos);
  const [pagesRemaining, setPagesRemaining] = useState(false);

  useEffect(() => {
    let newList = repos;
    if (filter !== 'all' && repos) {
      newList = repos.filter((item) => {
        if (item.languages && item.languages.length > 0) {
          return item.languages.includes(filter);
        }
        return false;
      });
    }

    if (currentRegexSearch && newList) {
      newList = newList.filter((item) => {
        if (currentRegexSearch.test(item.name)) {
          return true;
        }
        return false;
      });
    }

    if (newList) {
      setReposToShow(newList.slice(0, currentPage * 10));
    }

    if (
      newList &&
      newList.slice(0, currentPage * 10).length < newList?.length
    ) {
      setPagesRemaining(true);
    } else {
      setPagesRemaining(false);
    }
  }, [filter, repos, currentPage, currentRegexSearch]);

  if (loading) {
    return <Text>Carregando...</Text>;
  }

  return (
    <>
      {reposToShow?.map((repo: IRepositorie) => (
        <RepoCard key={repo.id} repoInfo={repo} />
      ))}
      {pagesRemaining && (
        <Button onClick={() => setCurrentPage(currentPage + 1)}>
          Ver mais
        </Button>
      )}
    </>
  );
};
