'use client';

import { useUserContext } from '@/app/contexts/UserContext';
import { Aside } from '@/layouts/Aside';
import { UserMain } from '@/layouts/UserMain';
import { getUserProfile } from '@/services/users/getUserProfile';
import { useEffect } from 'react';

export default function Page({ params }: { params: { username: string } }) {
  const { userInfo, setUserInfo } = useUserContext();

  // TODO: remover useContext pois requisitar novamente garante que o link sempre funcione
  useEffect(() => {
    const handlegetUserProfile = async () => {
      const response = await getUserProfile(params.username);
      setUserInfo(response);
    };

    handlegetUserProfile();
  }, [params.username]);

  return (
    <>
      <UserMain userInfo={userInfo} />
      <Aside />
    </>
  );
}
