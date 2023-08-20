import {
  BoxContainer,
  Button,
  Chip,
  Text,
  Title,
  Wrapper,
  WrapperBetween,
  WrapperRow,
} from '@/app/theme/sharedStyles';
import { IRepositorie } from '@/services/interfaces/Repositore';
import { FaGithub, FaLink } from 'react-icons/fa';

export const RepoCard = ({ repoInfo }: { repoInfo: IRepositorie }) => {
  return (
    <BoxContainer>
      <WrapperBetween>
        <Wrapper $biggerGap>
          <Title>{repoInfo.name}</Title>
          <WrapperRow>
            <Chip $language={'HTML'}>HTML</Chip>
            <Chip $language={'JavaScript'}>JavaScript</Chip>
            <Chip $language={'CSS'}>CSS</Chip>
          </WrapperRow>
          <Text>{repoInfo.description}</Text>
          <Wrapper>
            <Text>
              <strong>Criado em: </strong>
              {repoInfo.created_at}
            </Text>
            <Text>
              <strong>Último push: </strong>
              {repoInfo.pushed_at}
            </Text>
          </Wrapper>
        </Wrapper>
        <Wrapper style={{ justifyContent: 'flex-start' }}>
          <Button href={repoInfo.html_url}>
            <FaGithub />
            Repositório
          </Button>
          {repoInfo.homepage && (
            <Button href={repoInfo.homepage}>
              <FaLink />
              Deploy
            </Button>
          )}
        </Wrapper>
      </WrapperBetween>
    </BoxContainer>
  );
};
