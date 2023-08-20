'use client';

import {
  AnchorContainer,
  Text,
  Title,
  Wrapper,
  WrapperRow,
} from '@/app/theme/sharedStyles';
import { IUser } from '@/services/interfaces/User';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction } from 'react';
import { CiLocationOn } from 'react-icons/ci';

interface CardProps {
  userInfo: IUser | null | undefined;
  setUserInfo: Dispatch<SetStateAction<IUser | null | undefined>>;
}

export const Card = ({ userInfo, setUserInfo }: CardProps) => {
  const router = useRouter();

  const handleCardClick = () => {
    setUserInfo(userInfo);
    router.push(`/user/${userInfo?.login}`);

    const profileDetails = {
      login: userInfo?.login,
      location: userInfo?.location,
      avatar_url: userInfo?.avatar_url,
    };
    const recentProfiles = JSON.parse(
      localStorage.getItem('recentProfiles') || '[]'
    );
    const existingIndex = recentProfiles.findIndex(
      (profile: typeof profileDetails) => profile.login === userInfo?.login
    );
    if (existingIndex !== -1) {
      recentProfiles.splice(existingIndex, 1);
    }

    recentProfiles.unshift(profileDetails);
    if (recentProfiles.length > 10) {
      recentProfiles.pop();
    }
    localStorage.setItem('recentProfiles', JSON.stringify(recentProfiles));
  };

  if (!userInfo) {
    return null;
  }

  return (
    <AnchorContainer onClick={handleCardClick}>
      <Image
        src={userInfo.avatar_url}
        width={100}
        height={100}
        alt="Picture of the author"
        style={{ borderRadius: '100%' }}
      />
      <Wrapper>
        <WrapperRow $biggerGap>
          <Title>{userInfo.name}</Title>
          <Text>{userInfo.login}</Text>
        </WrapperRow>
        <Text>{userInfo.bio}</Text>
        <WrapperRow>
          <CiLocationOn />
          <Text $textSmall>{userInfo.location}</Text>
        </WrapperRow>
      </Wrapper>
    </AnchorContainer>
  );
};
