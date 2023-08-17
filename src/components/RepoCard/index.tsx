import {
  BoxContainer,
  Button,
  Chip,
  Text,
  Title,
  Wrapper,
  WrapperRow,
} from '@/app/theme/sharedStyles';
import { FaGithub, FaLink } from 'react-icons/fa';

export const RepoCard = () => {
  return (
    <BoxContainer>
      <Wrapper>
        <Title>CountDown</Title>
        <WrapperRow>
          <Chip $language={'HTML'}>HTML</Chip>
          <Chip $language={'JavaScript'}>JavaScript</Chip>
          <Chip $language={'CSS'}>CSS</Chip>
        </WrapperRow>
        <Text>
          Esse projeto tem como objetivo exibir uma contagem regressiva até o
          dia do meu aniversário que é em 25/03
        </Text>
        <Text>Criado em: 2023-01-15 23:14:44</Text>
        <Text>Último push: 2023-07-17 01:51:57</Text>
      </Wrapper>
      <Wrapper>
        <Button href="https://github.com/paulaandrezza/Countdown">
          <FaGithub />
          Repositório
        </Button>
        <Button href="https://paulaandrezza.github.io/Countdown/">
          <FaLink />
          Deploy
        </Button>
      </Wrapper>
    </BoxContainer>
  );
};
