import { useRef } from 'react';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { Container, Content } from './styles';

export default function Modal({ children, isOpen, onRequestClose }) {
  const containerRef = useRef(null);

  useOutsideClick(containerRef, () => {
    if (isOpen) {
      onRequestClose();
    }
  });

  return (
    <Container ref={containerRef} isOpen={isOpen}>
      <Content>{children}</Content>
    </Container>
  );
}
