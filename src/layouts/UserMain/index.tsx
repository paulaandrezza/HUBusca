import {
  Button,
  Text,
  Wrapper,
  WrapperArea,
  WrapperRow,
} from '@/app/theme/sharedStyles';
import { ProfileCard } from '@/components/ProfileCard';
import { SearchBar } from '@/components/SearchBar';
import { Select } from '@/components/Select';
import { IRepositorie } from '@/services/interfaces/Repositore';
import { IUser } from '@/services/interfaces/User';
import { getUserRepos } from '@/services/users/getUserRepos';
import { useEffect, useState } from 'react';
import { RepoSection } from './RepoSection';
import { MainContainer } from './style';

export const UserMain = ({
  userInfo,
}: {
  userInfo: IUser | null | undefined;
}) => {
  const [currentSearch, setCurrentSearch] = useState('');
  const [repos, setRepos] = useState<IRepositorie[] | null>([]);
  const [reposToShow, setReposToShow] = useState<IRepositorie[] | null>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesRemaining, setPagesRemaining] = useState(false);
  const [reposFilteredLength, setReposFilteredLength] = useState(0);
  const [options, setOptions] = useState<{ name: string; value: string }[]>([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const getRepos = async () => {
      if (userInfo) {
        try {
          setLoading(true);
          const response = await getUserRepos(userInfo?.login);
          if (response) {
            setRepos(response);

            const allLanguages: string[] = response.reduce<string[]>(
              (languages, repo) => {
                if (repo.languages && repo.languages.length > 0) {
                  languages.push(...repo.languages);
                }
                return languages;
              },
              []
            );

            const uniqueLanguages = Array.from(new Set(allLanguages));

            const languageOptions = uniqueLanguages.map((language) => ({
              name: language,
              value: language,
            }));

            setOptions(languageOptions);

            setReposToShow(response.slice(0, 10));
            setReposFilteredLength(response.length);
          }
        } finally {
          setLoading(false);
        }
      }
    };
    getRepos();
  }, [userInfo?.login]);

  const handleLoadMore = () => {
    let page = currentPage + 1;
    setCurrentPage(currentPage + 1);
    if (repos) {
      setReposToShow(repos.slice(0, page * 10));
    }
  };

  useEffect(() => {
    if (repos && reposToShow) {
      if (reposToShow?.length < reposFilteredLength) {
        setPagesRemaining(true);
      } else {
        setPagesRemaining(false);
      }
    }
  }, [reposToShow, repos, reposFilteredLength]);

  const handleKeyDown = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === 'Enter') {
      if (repos) {
        const searchTerm = currentSearch.trim();
        if (searchTerm !== '') {
          const regex = new RegExp(searchTerm, 'i');
          const filteredRepos = repos.filter(
            (repo) => regex.test(repo.name) || regex.test(repo.description)
          );
          setReposToShow(filteredRepos);
          setReposFilteredLength(setReposToShow.length);
        }
      }
    }
  };

  return (
    <MainContainer>
      <WrapperArea>
        <WrapperRow>
          <SearchBar
            value={currentSearch}
            placeholder="Pesquisar repositório"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCurrentSearch(e.target.value)
            }
            onKeyDown={handleKeyDown}
          />
          <Select
            options={options}
            placeholder="Linguagem"
            filter={filter}
            setFilter={setFilter}
          />
        </WrapperRow>
        <Wrapper $biggerGap>
          <Text>Perfil do usuário:</Text>
          <ProfileCard userInfo={userInfo} />
          <RepoSection loading={loading} repos={repos} filter={filter} />
          {pagesRemaining && <Button onClick={handleLoadMore}>Ver mais</Button>}
        </Wrapper>
      </WrapperArea>
    </MainContainer>
  );
};
