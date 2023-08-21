import {
  AnchorContainer,
  Text,
  Wrapper,
  WrapperRow,
} from '@/app/theme/sharedStyles';
import { IUser } from '@/services/interfaces/User';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { DeleteButton, WrapperInfo } from './style';

export const SmallCard = ({
  userInfo,
  setDeleteUser,
}: {
  userInfo: IUser | undefined;
  setDeleteUser: Dispatch<SetStateAction<IUser[] | undefined>>;
}) => {
  const router = useRouter();

  const handleDeleteClick = () => {
    const storedProfiles = JSON.parse(
      localStorage.getItem('recentProfiles') || '[]'
    );

    const updatedProfiles = storedProfiles.filter(
      (profile: IUser) => profile.login !== userInfo?.login
    );

    localStorage.setItem('recentProfiles', JSON.stringify(updatedProfiles));
    setDeleteUser(updatedProfiles);
  };

  if (!userInfo) {
    return null;
  }

  if (!userInfo) {
    return null;
  }

  return (
    <AnchorContainer
      style={{ alignItems: 'center', justifyContent: 'space-between' }}
    >
      <WrapperInfo onClick={() => router.push(`/user/${userInfo?.login}`)}>
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
      </WrapperInfo>
      <DeleteButton onClick={handleDeleteClick}>
        <span></span>
        <span></span>
      </DeleteButton>
    </AnchorContainer>
  );
};
