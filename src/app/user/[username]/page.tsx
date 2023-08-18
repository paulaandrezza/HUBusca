'use client';

import { useUserContext } from '@/app/contexts/UserContext';
import { Aside } from '@/layouts/Aside';
import { UserMain } from '@/layouts/UserMain';
import { getUserProfile } from '@/services/users/getUserProfile';

export default function Page({ params }: { params: { username: string } }) {
  const { userInfo, setUserInfo } = useUserContext();

  // TODO: remover useContext pois requisitar novamente garante que o link sempre funcione
  const handlegetUserProfile = async () => {
    if (!userInfo) {
      const response = await getUserProfile(params.username);
      setUserInfo(response);
    }
  };
  handlegetUserProfile();

  return (
    <>
      <UserMain userInfo={userInfo} />
      <Aside />
    </>
  );
}
