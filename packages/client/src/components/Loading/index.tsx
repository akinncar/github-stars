import MoonLoader from 'react-spinners/MoonLoader';
import { Container } from './styles';

export default function Loading() {
  return (
    <Container>
      <MoonLoader color="#000" loading={true} size={36} />
      <p>Loading Repositories...</p>
    </Container>
  );
}
