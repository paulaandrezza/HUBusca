import Image from 'next/image';
import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';
import { MenuIcon, RightAlign } from './style';

export const Logo = ({
  isAsideOpen,
  setIsAsideOpen,
}: {
  isAsideOpen: boolean;
  setIsAsideOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <RightAlign>
      <Link href="/">
        <Image
          src="/logo.svg"
          width={159}
          height={43}
          alt="Logo da ClickSoft"
        />
      </Link>
      <MenuIcon
        onClick={() => setIsAsideOpen(!isAsideOpen)}
        isOpen={isAsideOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </MenuIcon>
    </RightAlign>
  );
};
