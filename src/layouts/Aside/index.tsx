import { Text, Wrapper } from '@/app/theme/sharedStyles';
import { SmallCard } from '@/components/SmallCard';
import { IUser } from '@/services/interfaces/User';
import { useEffect, useState } from 'react';
import { AsideContainer } from './style';

export const Aside = () => {
  const [userInfo, setUserInfo] = useState<IUser[]>();

  useEffect(() => {
    const recentProfiles = JSON.parse(
      localStorage.getItem('recentProfiles') || '[]'
    );
    setUserInfo(recentProfiles);
  }, []);

  return (
    <AsideContainer>
      <Wrapper $biggerGap>
        <Text>Pesquisas Recentes:</Text>
        {userInfo?.map((user: IUser) => (
          <SmallCard key={user.login} userInfo={user} />
        ))}
      </Wrapper>
    </AsideContainer>
  );
};
