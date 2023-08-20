'use client';

import { Aside } from '@/layouts/Aside';
import { Logo } from '@/layouts/Logo';
import { Main } from '@/layouts/Main';

export default function Home() {
  return (
    <>
      <Logo />
      <Main />
      <Aside />
    </>
  );
}
