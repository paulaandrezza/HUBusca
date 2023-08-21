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
import { Dispatch, SetStateAction, useState } from 'react';

export const Main = ({
  setRecentProfiles,
}: {
  setRecentProfiles: Dispatch<SetStateAction<IUser[]>>;
}) => {
  const [currentProfile, setCurrentProfile] = useState('');
  const [userInfo, setUserInfo] = useState<IUser | null | undefined>();
  const [message, setMessage] = useState(
    'Insira o login de um usuário na barra de pesquisa para procurar'
  );

  const handleUpdateLocalStorage = async (response: IUser) => {
    const profileDetails = {
      login: response?.login,
      location: response?.location,
      avatar_url: response?.avatar_url,
    };
    console.log(profileDetails);
    const recentProfiles = JSON.parse(
      localStorage.getItem('recentProfiles') || '[]'
    );
    const existingIndex = recentProfiles.findIndex(
      (profile: typeof profileDetails) => profile.login === response?.login
    );
    if (existingIndex !== -1) {
      recentProfiles.splice(existingIndex, 1);
    }

    recentProfiles.unshift(profileDetails);
    if (recentProfiles.length > 10) {
      recentProfiles.pop();
    }
    localStorage.setItem('recentProfiles', JSON.stringify(recentProfiles));
    setRecentProfiles(recentProfiles);
  };

  const handleKeyDown = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === 'Enter') {
      const response = await getUserProfile(currentProfile);
      setUserInfo(response);
      if (!response) {
        setMessage('Nenhum usuário encontrado com esse login');
      } else {
        await handleUpdateLocalStorage(response);
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
