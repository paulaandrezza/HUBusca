import Image from 'next/image';
import Link from 'next/link';
import { RightAlign } from './style';

export const Logo = () => {
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
    </RightAlign>
  );
};
