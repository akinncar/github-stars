import { useCallback, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { mutate as mutateGlobal } from 'swr';
import { MdSearch } from 'react-icons/md';
import debounce from 'lodash.debounce';
import api from '../../services/api';
import { useTheme } from '../../hooks/useTheme';
import { useFetch } from '../../hooks/useFetch';
import { RepositoryType } from '../../types/RepositoryTypes';

import ThemeToggle from '../../components/ThemeToggle';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import Logo from '../../components/Logo';
import TextInput from '../../components/TextInput';
import RepositoryList from '../../components/RepositoryList';
import Paginator from '../../components/Paginator';
import { Container, Header, SearchContainer } from './styles';

interface ParamType {
  username: string;
}

interface ResponseType {
  hasPreviousPage?: boolean;
  hasNextPage?: boolean;
  repositories: Array<RepositoryType>;
}

const Repositories = () => {
  const { getCurrentTheme } = useTheme();
  const theme = getCurrentTheme();
  const history = useHistory();
  const { username } = useParams<ParamType>();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchText, setSearchText] = useState<string>('');

  const { data, error, mutate } = useFetch<ResponseType>(
    `repositories/${username}?page=${currentPage}`
  );

  async function fetchRepositoryFilter(text: string) {
    if (text === '') {
      const response = await api.get(
        `repositories/${username}?page=${currentPage}`
      );
      mutate(response.data, false);
      return;
    }

    const response = await api.get(
      `repositories/${username}?tag=${text.trim()}`
    );
    mutate(response.data, false);
  }

  const debouncedSearch = useCallback(
    debounce(text => fetchRepositoryFilter(text), 500),
    [currentPage]
  );

  function search(text: string) {
    setSearchText(text);
    debouncedSearch(text);
  }

  const handleChangeTags = useCallback(
    (full_name: string, tags: Array<string>) => {
      api.put(`repositoryTagAll`, {
        username,
        full_name,
        tags
      });

      const updatedRepositories = data.repositories.map(repository => {
        if (repository.full_name === full_name) {
          return { ...repository, tags: tags };
        }

        return repository;
      });

      mutate(
        {
          hasPreviousPage: data.hasPreviousPage,
          hasNextPage: data.hasNextPage,
          repositories: updatedRepositories
        },
        false
      );
      mutateGlobal(`repositoryTagAll`, {
        username,
        full_name,
        tags
      });
    },
    [data, mutate]
  );

  function handleRedirectToHome() {
    history.push(`/`);
  }

  if (error) {
    return <Error>{error.response.data.message}</Error>;
  }

  if (!data) {
    return <Loading isFullScreen={true} />;
  }

  return (
    <Container>
      <Header>
        <Logo />
        <div>
          <button onClick={handleRedirectToHome}>Back to Home</button>
          <ThemeToggle />
        </div>
      </Header>
      <SearchContainer>
        <TextInput
          icon={<MdSearch size={16} color={theme.colors.text.primary} />}
          placeholder="Search tags..."
          value={searchText}
          onChange={e => search(e.target.value)}
        />
      </SearchContainer>
      <RepositoryList
        repositories={data.repositories}
        updateTags={handleChangeTags}
      />
      {(data.hasPreviousPage || data.hasNextPage) && (
        <Paginator
          hasPrevious={data.hasPreviousPage}
          hasNext={data.hasNextPage}
          onClickPrevious={() => setCurrentPage(currentPage - 1)}
          onClickNext={() => setCurrentPage(currentPage + 1)}
        />
      )}
    </Container>
  );
};

export default Repositories;
