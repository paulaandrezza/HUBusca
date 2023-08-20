import {
  Button,
  Text,
  Title,
  Wrapper,
  WrapperBetween,
  WrapperRow,
} from '@/app/theme/sharedStyles';
import { IUser } from '@/services/interfaces/User';
import Image from 'next/image';
import { CiLocationOn } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';
import { Container, FollowInfo } from './style';

export const ProfileCard = ({
  userInfo,
}: {
  userInfo: IUser | null | undefined;
}) => {
  if (!userInfo) {
    return null;
  }

  return (
    <Container>
      <Wrapper style={{ alignItems: 'center' }}>
        <Image
          src={userInfo?.avatar_url}
          width={100}
          height={100}
          alt="Picture of the author"
          style={{ borderRadius: '100%' }}
        />
      </Wrapper>
      <WrapperBetween>
        <Wrapper $biggerGap>
          <Wrapper>
            <Title>{userInfo?.name}</Title>
          </Wrapper>
          <WrapperRow $biggerGap>
            <Wrapper style={{ flex: '1', maxWidth: '60%' }}>
              <Text>{userInfo?.bio}</Text>
              {userInfo.location && (
                <WrapperRow style={{ alignItems: 'center' }}>
                  <CiLocationOn />
                  <Text>{userInfo.location}</Text>
                </WrapperRow>
              )}
              <FollowInfo>
                <Wrapper>
                  <Text $textSmall>
                    <strong>Seguidores:</strong>
                  </Text>
                  <Text $textSmall>{userInfo?.followers}</Text>
                </Wrapper>
                <Wrapper>
                  <Text $textSmall>
                    <strong>Seguindo:</strong>
                  </Text>
                  <Text $textSmall>{userInfo?.following}</Text>
                </Wrapper>
              </FollowInfo>
            </Wrapper>

            <Wrapper>
              <Text>
                <strong>login: </strong>
                {userInfo?.login}
              </Text>
              <Text>
                <strong>id: </strong>
                {userInfo?.id}
              </Text>
              <Text>
                <strong>{userInfo?.public_repos}</strong> repósitório
                {userInfo?.public_repos > 1 && 's'} público
                {userInfo?.public_repos > 1 && 's'}
              </Text>
            </Wrapper>
          </WrapperRow>
        </Wrapper>
        <WrapperRow>
          <Button href={userInfo.html_url} target="_blank">
            <FaGithub />
            GitHub
          </Button>
        </WrapperRow>
      </WrapperBetween>
    </Container>
  );
};
