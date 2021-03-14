import { Container, Content } from './styles';

export default function Modal({ children, isOpen, onRequestClose }) {
  return (
    <Container isOpen={isOpen}>
      <Content>{children}</Content>
    </Container>
  );
}
