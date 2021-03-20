import { useHistory } from 'react-router-dom';
import Button from '../Button';
import { Container } from './styles';
import octocatError from '../../assets/images/octocat-error.png';

export default function Error({ children }) {
  const history = useHistory();

  return (
    <Container>
      <img src={octocatError} height={220}></img>
      <span>{children}</span>
      <Button variant="secondary" onClick={() => history.push('/')}>
        Back To Home
      </Button>
    </Container>
  );
}
