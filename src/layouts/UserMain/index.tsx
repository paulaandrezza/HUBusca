import { Button, Text, Wrapper, WrapperArea } from '@/app/theme/sharedStyles';
import { ProfileCard } from '@/components/ProfileCard';
import { RepoCard } from '@/components/RepoCard';
import { SearchBar } from '@/components/SearchBar';
import { IRepositorie } from '@/services/interfaces/Repositore';
import { IUser } from '@/services/interfaces/User';
import { getUserRepos } from '@/services/users/getUserRepos';
import { useEffect, useState } from 'react';
import { MainContainer } from './style';

export const UserMain = ({
  userInfo,
}: {
  userInfo: IUser | null | undefined;
}) => {
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState<IRepositorie[] | null>([]);
  const [reposToShow, setReposToShow] = useState<IRepositorie[] | null>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesRemaining, setPagesRemaining] = useState(false);
  const [reposFilteredLength, setReposFilteredLength] = useState(0);

  useEffect(() => {
    const getRepos = async () => {
      if (userInfo) {
        try {
          setLoading(true);
          const response = await getUserRepos(userInfo?.login);
          if (response) {
            setRepos(response);
            setReposToShow(response.slice(0, 10));
            setReposFilteredLength(response.length);
          }
        } finally {
          setLoading(false);
        }
      }
    };
    getRepos();
  }, [userInfo?.login]);

  const handleLoadMore = () => {
    let page = currentPage + 1;
    setCurrentPage(currentPage + 1);
    if (repos) {
      setReposToShow(repos.slice(0, page * 10));
    }
  };

  useEffect(() => {
    if (repos && reposToShow) {
      if (reposToShow?.length < reposFilteredLength) {
        setPagesRemaining(true);
      } else {
        setPagesRemaining(false);
      }
    }
  }, [reposToShow, repos, reposFilteredLength]);

  const handleKeyDown = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === 'Enter') {
      if (repos) {
        const searchTerm = currentRepo.trim();
        if (searchTerm !== '') {
          const regex = new RegExp(searchTerm, 'i');
          const filteredRepos = repos.filter(
            (repo) => regex.test(repo.name) || regex.test(repo.description)
          );
          setReposToShow(filteredRepos);
          setReposFilteredLength(setReposToShow.length);
        }
      }
    }
  };

  return (
    <MainContainer>
      <WrapperArea>
        <SearchBar
          value={currentRepo}
          placeholder="Pesquisar repositório"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCurrentRepo(e.target.value)
          }
          onKeyDown={handleKeyDown}
        />
        <Wrapper $biggerGap>
          <Text>Perfil do usuário:</Text>
          <ProfileCard userInfo={userInfo} />
          {loading ? (
            <p>Carregando...</p>
          ) : (
            reposToShow?.map((repo: IRepositorie) => (
              <RepoCard key={repo.id} repoInfo={repo} />
            ))
          )}
          {pagesRemaining && <Button onClick={handleLoadMore}>Ver mais</Button>}
        </Wrapper>
      </WrapperArea>
    </MainContainer>
  );
};
