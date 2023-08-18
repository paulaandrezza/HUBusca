import { Text, Wrapper, WrapperArea } from '@/app/theme/sharedStyles';
import { Card } from '@/components/Card';
import { SearchBar } from '@/components/SearchBar';
import { IUser } from '@/services/interfaces/User';
import { getUserProfile } from '@/services/users/getUserProfile';
import { useState } from 'react';
import { MainContainer } from './style';

export const Main = () => {
  const [currentProfile, setCurrentProfile] = useState('');
  const [userInfo, setUserInfo] = useState<IUser | null | undefined>();

  const handleKeyDown = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === 'Enter') {
      const response = await getUserProfile(currentProfile);
      setUserInfo(response);
      console.log(userInfo);
    }
  };

  return (
    <MainContainer>
      <WrapperArea>
        <SearchBar
          value={currentProfile}
          placeholder="Pesquisar usuário"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCurrentProfile(e.target.value)
          }
          onKeyDown={handleKeyDown}
        />
        <Wrapper $biggerGap>
          <Text>Resultados de Busca:</Text>
          {userInfo ? (
            <Card userInfo={userInfo} />
          ) : (
            <Text>Não foram encontrados resultados com esse login</Text>
          )}
        </Wrapper>
      </WrapperArea>
    </MainContainer>
  );
};
