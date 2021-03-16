import { useHistory } from 'react-router';
import { Container } from './styles';

export default function Logo() {
  const history = useHistory();

  return (
    <Container
      onClick={() => {
        history.push('/');
      }}
    >
      <h1>GithubStars</h1>
    </Container>
  );
}
