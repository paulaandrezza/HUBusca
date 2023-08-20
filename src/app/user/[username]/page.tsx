'use client';

import { Aside } from '@/layouts/Aside';
import { Logo } from '@/layouts/Logo';
import { UserMain } from '@/layouts/UserMain';
import { IUser } from '@/services/interfaces/User';
import { getUserProfile } from '@/services/users/getUserProfile';
import { useEffect, useState } from 'react';

export default function Page({ params }: { params: { username: string } }) {
  const [userInfo, setUserInfo] = useState<IUser | null | undefined>();
  const [isAsideOpen, setIsAsideOpen] = useState<boolean>(false);

  useEffect(() => {
    const handlegetUserProfile = async () => {
      const response = await getUserProfile(params.username);
      setUserInfo(response);
    };

    handlegetUserProfile();
  }, [params.username]);

  return (
    <>
      <Logo isAsideOpen={isAsideOpen} setIsAsideOpen={setIsAsideOpen} />
      <UserMain userInfo={userInfo} />
      <Aside isAsideOpen={isAsideOpen} />
    </>
  );
}
