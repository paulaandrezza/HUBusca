import {
  Button,
  Text,
  Title,
  Wrapper,
  WrapperRow,
} from '@/app/theme/sharedStyles';
import Image from 'next/image';
import { CiLocationOn } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';
import { Container, WrapperBetween } from './style';

export const ProfileCard = () => {
  return (
    <Container>
      <Wrapper>
        <Image
          src="https://avatars.githubusercontent.com/u/43113952?v=4"
          width={100}
          height={100}
          alt="Picture of the author"
          style={{ borderRadius: '100%' }}
        />
      </Wrapper>
      <WrapperBetween>
        <Wrapper $biggerGap>
          <Wrapper>
            <Title>Paula Marinho</Title>
          </Wrapper>
          <WrapperRow $biggerGap>
            <Wrapper>
              <Text>Full-Stack Developer</Text>
              <WrapperRow>
                <CiLocationOn />
                <Text>Brasil</Text>
              </WrapperRow>
              <WrapperRow>
                <Wrapper>
                  <Text $textSmall>
                    <strong>Seguidores:</strong>
                  </Text>
                  <Text $textSmall>18</Text>
                </Wrapper>
                <Wrapper>
                  <Text $textSmall>
                    <strong>Seguindo:</strong>
                  </Text>
                  <Text $textSmall>15</Text>
                </Wrapper>
              </WrapperRow>
            </Wrapper>

            <Wrapper>
              <Text>paulaandrezza</Text>
              <Text>id: 43113952</Text>
              <Text>54 repósitórios públicos</Text>
            </Wrapper>
          </WrapperRow>
        </Wrapper>
        <WrapperRow>
          <Button>
            <FaGithub />
            GitHub
          </Button>
        </WrapperRow>
      </WrapperBetween>
    </Container>
  );
};
