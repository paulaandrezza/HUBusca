import { Text } from '@/app/theme/sharedStyles';
import { RepoCard } from '@/components/RepoCard';
import { IRepositorie } from '@/services/interfaces/Repositore';

export const RepoSection = ({
  loading,
  reposToShow,
}: {
  loading: boolean;
  reposToShow: IRepositorie[] | null;
}) => {
  if (loading) {
    return <Text>Carregando...</Text>;
  }

  return reposToShow?.map((repo: IRepositorie) => (
    <RepoCard key={repo.id} repoInfo={repo} />
  ));
};
