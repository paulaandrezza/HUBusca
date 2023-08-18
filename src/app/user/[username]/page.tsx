'use client';

import { useUserContext } from '@/app/contexts/UserContext';
import { Aside } from '@/layouts/Aside';
import { UserMain } from '@/layouts/UserMain';

export default function Page() {
  const { userInfo } = useUserContext();

  console.log(userInfo);

  return (
    <>
      <UserMain userInfo={userInfo} />
      <Aside />
    </>
  );
}
