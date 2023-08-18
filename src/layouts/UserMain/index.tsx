import { Text, Wrapper, WrapperArea } from '@/app/theme/sharedStyles';
import { ProfileCard } from '@/components/ProfileCard';
import { RepoCard } from '@/components/RepoCard';
import { SearchBar } from '@/components/SearchBar';
import { IUser } from '@/services/interfaces/User';
import { useState } from 'react';
import { MainContainer } from './style';

export const UserMain = ({
  userInfo,
}: {
  userInfo: IUser | null | undefined;
}) => {
  const [currentRepo, setCurrentRepo] = useState('');

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
          <RepoCard />
        </Wrapper>
      </WrapperArea>
    </MainContainer>
  );
};
