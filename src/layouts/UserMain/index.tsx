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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRepos = async () => {
      if (userInfo) {
        try {
          setLoading(true);
          const response = await getUserRepos(userInfo?.login);
          if (response) {
            setRepos(response);
          }
        } finally {
          setLoading(false);
        }
      }
    };
    getRepos();
  }, [userInfo?.login]);

  const handleKeyDown = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === 'Enter') {
      // TODO: filtrar repo
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
            repos?.map((repo: IRepositorie) => (
              <RepoCard key={repo.id} repoInfo={repo} />
            ))
          )}
          <Button>Ver mais</Button>
        </Wrapper>
      </WrapperArea>
    </MainContainer>
  );
};
