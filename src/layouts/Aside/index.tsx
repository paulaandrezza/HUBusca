import { Text, Wrapper } from '@/app/theme/sharedStyles';
import { SmallCard } from '@/components/SmallCard';
import { IUser } from '@/services/interfaces/User';
import { useEffect, useState } from 'react';
import { AsideContainer } from './style';

export const Aside = ({
  isAsideOpen,
  recentProfiles,
}: {
  isAsideOpen: boolean;
  recentProfiles: IUser[];
}) => {
  const [userInfo, setUserInfo] = useState<IUser[]>();
  const [deleteUser, setDeleteUser] = useState<IUser[]>();

  useEffect(() => {
    const recentProfilesLS = JSON.parse(
      localStorage.getItem('recentProfiles') || '[]'
    );
    setUserInfo(recentProfilesLS);
  }, [recentProfiles]);

  useEffect(() => {
    if (deleteUser) {
      setUserInfo(deleteUser);
    }
  }, [deleteUser]);

  return (
    <AsideContainer isOpen={isAsideOpen}>
      <Wrapper $biggerGap>
        <Text>Pesquisas Recentes:</Text>
        {userInfo?.map((user: IUser) => (
          <SmallCard
            key={user.login}
            userInfo={user}
            setDeleteUser={setDeleteUser}
          />
        ))}
      </Wrapper>
    </AsideContainer>
  );
};
