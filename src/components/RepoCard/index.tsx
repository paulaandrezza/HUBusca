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
            {repoInfo.languages.map((language) => (
              <Chip key={language} $language={language}>
                {language}
              </Chip>
            ))}
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
