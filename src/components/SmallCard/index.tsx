import {
  AnchorContainer,
  Text,
  Wrapper,
  WrapperRow,
} from '@/app/theme/sharedStyles';
import Image from 'next/image';
import { CiLocationOn } from 'react-icons/ci';

export const SmallCard = () => {
  return (
    <AnchorContainer>
      <Image
        src="https://avatars.githubusercontent.com/u/43113952?v=4"
        width={50}
        height={50}
        alt="Picture of the author"
        style={{ borderRadius: '100%' }}
      />
      <Wrapper>
        <Text>paulaandrezza</Text>
        <WrapperRow>
          <CiLocationOn />
          <Text $textSmall>Brasil</Text>
        </WrapperRow>
      </Wrapper>
    </AnchorContainer>
  );
};
