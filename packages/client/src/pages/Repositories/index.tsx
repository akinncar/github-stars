import { useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { mutate as mutateGlobal } from 'swr';
import { useFetch } from '../../hooks/useFetch';
import api from '../../services/api';

import { RepositoryType } from '../../types/RepositoryTypes';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import Logo from '../../components/Logo';
import RepositoryList from '../../components/RepositoryList';
import { Container, Header } from './styles';

interface ParamType {
  username: string;
}

const Repositories = () => {
  const history = useHistory();
  const { username } = useParams<ParamType>();
  const { data, error, mutate } = useFetch<Array<RepositoryType>>(
    `repositories/${username}`
  );

  const handleChangeTags = useCallback(
    (full_name: string, tags: Array<string>) => {
      api.patch(`repositoryTagAll`, {
        username,
        full_name,
        tags
      });

      const updatedRepositories = data?.map(repository => {
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
    return <Loading />;
  }

  return (
    <Container>
      <Header>
        <Logo />
        <button onClick={handleRedirectToHome}>Home</button>
      </Header>
      <RepositoryList repositories={data} updateTags={handleChangeTags} />
    </Container>
  );
};

export default Repositories;
