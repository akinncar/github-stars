import { useHistory, useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

import Loading from '../../components/Loading';
import Logo from '../../components/Logo';
import RepositoryList from '../../components/RepositoryList';
import { Container, Header } from './styles';

interface ParamTypes {
  username: string;
}
interface Repository {
  full_name: string;
  description: string;
  language: string;
  tags: Array<string>;
}

const Repositories = () => {
  const history = useHistory();
  const { username } = useParams<ParamTypes>();
  const { data, error } = useFetch<Array<Repository>>(
    `repositoryGet/${username}`
  );

  function handleRedirectToHome() {
    history.push(`/`);
  }

  if (!data) {
    return <Loading />;
  }

  if (error) {
    return <p>Error!</p>;
  }

  return (
    <Container>
      <Header>
        <Logo />
        <button onClick={handleRedirectToHome}>Home</button>
      </Header>
      <RepositoryList repositories={data} />
    </Container>
  );
};

export default Repositories;
