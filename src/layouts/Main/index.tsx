import { Text, Wrapper, WrapperArea } from '@/app/theme/sharedStyles';
import { Card } from '@/components/Card';
import { SearchGitHubUser } from '@/components/SearchGitHubUser';
import { MainContainer } from './style';

export const Main = () => {
  return (
    <MainContainer>
      <WrapperArea>
        <SearchGitHubUser />
        <Wrapper $biggerGap>
          <Text>Resultados de Busca:</Text>
          <Card />
        </Wrapper>
      </WrapperArea>
    </MainContainer>
  );
};
