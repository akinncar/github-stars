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
import { Container, Header, SearchContainer } from './styles';

interface ParamType {
  username: string;
}

const Repositories = () => {
  const { getCurrentTheme } = useTheme();
  const theme = getCurrentTheme();
  const history = useHistory();
  const { username } = useParams<ParamType>();

  const [searchText, setSearchText] = useState('');

  const { data, error, mutate } = useFetch<Array<RepositoryType>>(
    `repositories/${username}`
  );

  async function fetchRepositoryFilter(text) {
    const response = await api.get(
      `repositories/${username}?tag=${text.trim()}`
    );
    mutate(response.data, false);
  }

  const debouncedSearch = useCallback(
    debounce(text => fetchRepositoryFilter(text), 500),
    []
  );

  function search(text) {
    setSearchText(text);
    debouncedSearch(text);
  }

  const handleChangeTags = useCallback(
    (full_name: string, tags: Array<string>) => {
      api.patch(`repositoryTagAll`, {
        username,
        full_name,
        tags
      });

      const updatedRepositories = data.map(repository => {
        if (repository.full_name === full_name) {
          return { ...repository, tags: tags };
        }

        return repository;
      });

      mutate(updatedRepositories, false);
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
      <RepositoryList repositories={data} updateTags={handleChangeTags} />
    </Container>
  );
};

export default Repositories;
