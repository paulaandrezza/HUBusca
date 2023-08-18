import { Text, Wrapper, WrapperArea } from '@/app/theme/sharedStyles';
import { ProfileCard } from '@/components/ProfileCard';
import { RepoCard } from '@/components/RepoCard';
import { SearchRepos } from '@/components/SearchRepos';
import { MainContainer } from './style';

export const UserMain = () => {
  return (
    <MainContainer>
      <WrapperArea>
        <SearchRepos />
        <Wrapper $biggerGap>
          <Text>Perfil do usuário:</Text>
          <ProfileCard />
          <RepoCard />
        </Wrapper>
      </WrapperArea>
    </MainContainer>
  );
};
