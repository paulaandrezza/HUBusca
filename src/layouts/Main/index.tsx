import {
  HeaderContainer,
  MainContainer,
  Text,
  Wrapper,
} from '@/app/theme/sharedStyles';
import { Card } from '@/components/Card';
import { SearchBar } from '@/components/SearchBar';
import { IUser } from '@/services/interfaces/User';
import { getUserProfile } from '@/services/users/getUserProfile';
import { useState } from 'react';

export const Main = () => {
  const [currentProfile, setCurrentProfile] = useState('');
  const [userInfo, setUserInfo] = useState<IUser | null | undefined>();
  const [message, setMessage] = useState(
    'Insira o login de um usuário na barra de pesquisa para procurar'
  );

  const handleKeyDown = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === 'Enter') {
      const response = await getUserProfile(currentProfile);
      setUserInfo(response);
      if (!response) {
        setMessage('Nenhum usuário encontrado com esse login');
      }
    }
  };

  return (
    <>
      <HeaderContainer>
        <SearchBar
          value={currentProfile}
          placeholder="Pesquisar usuário"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCurrentProfile(e.target.value)
          }
          onKeyDown={handleKeyDown}
        />
      </HeaderContainer>
      <MainContainer>
        <Wrapper $biggerGap>
          <Text>Resultados de Busca:</Text>
          {userInfo ? (
            <Card userInfo={userInfo} setUserInfo={setUserInfo} />
          ) : (
            <Text>{message}</Text>
          )}
        </Wrapper>
      </MainContainer>
    </>
  );
};
