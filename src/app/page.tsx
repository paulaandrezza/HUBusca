'use client';

import { Aside } from '@/layouts/Aside';
import { Logo } from '@/layouts/Logo';
import { Main } from '@/layouts/Main';
import { useState } from 'react';

export default function Home() {
  const [isAsideOpen, setIsAsideOpen] = useState<boolean>(false);

  return (
    <>
      <Logo isAsideOpen={isAsideOpen} setIsAsideOpen={setIsAsideOpen} />
      <Main />
      <Aside isAsideOpen={isAsideOpen} />
    </>
  );
}
