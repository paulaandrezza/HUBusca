'use client';

import { Aside } from '@/layouts/Aside';
import { Logo } from '@/layouts/Logo';
import { Main } from '@/layouts/Main';
import { IUser } from '@/services/interfaces/User';
import { useState } from 'react';

export default function Home() {
  const [isAsideOpen, setIsAsideOpen] = useState<boolean>(false);
  const [recentProfiles, setRecentProfiles] = useState<IUser[]>([]);

  return (
    <>
      <Logo isAsideOpen={isAsideOpen} setIsAsideOpen={setIsAsideOpen} />
      <Main setRecentProfiles={setRecentProfiles} />
      <Aside isAsideOpen={isAsideOpen} recentProfiles={recentProfiles} />
    </>
  );
}
