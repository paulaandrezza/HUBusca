import {
  AnchorContainer,
  Text,
  Wrapper,
  WrapperRow,
} from '@/app/theme/sharedStyles';
import { IUser } from '@/services/interfaces/User';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { CiLocationOn } from 'react-icons/ci';

export const SmallCard = ({ userInfo }: { userInfo: IUser | undefined }) => {
  const router = useRouter();

  if (!userInfo) {
    return null;
  }

  return (
    <AnchorContainer onClick={() => router.push(`/user/${userInfo?.login}`)}>
      <Image
        src={userInfo?.avatar_url}
        width={50}
        height={50}
        alt="Picture of the author"
        style={{ borderRadius: '100%' }}
      />
      <Wrapper>
        <Text>{userInfo?.login}</Text>
        {userInfo.location && (
          <WrapperRow style={{ alignItems: 'center' }}>
            <CiLocationOn />
            <Text $textSmall>{userInfo.location}</Text>
          </WrapperRow>
        )}
      </Wrapper>
    </AnchorContainer>
  );
};
