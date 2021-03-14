import { Container } from './styles';

export default function Loading({ children }) {
  return (
    <Container>
      <span>{children}</span>
    </Container>
  );
}
