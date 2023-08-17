'use client';

import {
  AnchorContainer,
  Text,
  Title,
  Wrapper,
  WrapperRow,
} from '@/app/theme/sharedStyles';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { CiLocationOn } from 'react-icons/ci';

export const Card = () => {
  const router = useRouter();

  const handleCardClick = () => {
    const username = 'paulaandrezza';
    router.push(`/user/${username}`);
  };

  return (
    <AnchorContainer onClick={handleCardClick}>
      <Image
        src="https://avatars.githubusercontent.com/u/43113952?v=4"
        width={100}
        height={100}
        alt="Picture of the author"
        style={{ borderRadius: '100%' }}
      />
      <Wrapper>
        <WrapperRow $biggerGap>
          <Title>Paula Marinho</Title>
          <Text>paulaandrezza</Text>
        </WrapperRow>
        <Text>Full-Stack Developer</Text>
        <WrapperRow>
          <CiLocationOn />
          <Text $textSmall>Brasil</Text>
        </WrapperRow>
      </Wrapper>
    </AnchorContainer>
  );
};
