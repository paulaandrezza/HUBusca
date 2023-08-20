import {
  HeaderContainer,
  Text,
  Wrapper,
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
  const [currentRegexSearch, setCurrentRegexSearch] = useState<RegExp>();
  const [repos, setRepos] = useState<IRepositorie[] | null>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [options, setOptions] = useState<{ name: string; value: string }[]>([]);
  const [filter, setFilter] = useState('all');

  const getLanguages = (response: IRepositorie[] | null) => {
    if (response) {
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
    }
  };

  const handleKeyDown = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === 'Enter') {
      if (repos) {
        const searchTerm = currentSearch.trim();
        if (searchTerm !== '') {
          const regex = new RegExp(searchTerm, 'i');
          setCurrentRegexSearch(regex);
        } else {
          setCurrentRegexSearch(undefined);
        }
      }
    }
  };

  useEffect(() => {
    const getRepos = async () => {
      if (userInfo) {
        try {
          setLoading(true);
          const response = await getUserRepos(userInfo?.login);
          if (response) {
            setRepos(response);
            getLanguages(response);
          }
        } finally {
          setLoading(false);
        }
      }
    };
    getRepos();
  }, [userInfo?.login]);

  return (
    <>
      <HeaderContainer>
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
      </HeaderContainer>
      <MainContainer>
        <Wrapper $biggerGap>
          <Text>Perfil do usuário:</Text>
          <ProfileCard userInfo={userInfo} />
          <RepoSection
            loading={loading}
            repos={repos}
            filter={filter}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            currentRegexSearch={currentRegexSearch}
          />
        </Wrapper>
      </MainContainer>
    </>
  );
};
