import { Link, useParams } from 'react-router-dom';
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
  const { username } = useParams<ParamTypes>();
  const { data, error } = useFetch<Array<Repository>>(
    `repositoryGet/${username}`
  );

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
        <Link to="/">Home</Link>
      </Header>
      <RepositoryList repositories={data} />
    </Container>
  );
};

export default Repositories;
