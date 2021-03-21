import { useRef } from 'react';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { Container, Content } from './styles';

interface ModalProps {
  children: JSX.Element;
  isOpen: boolean;
  onRequestClose(): void;
}

export default function Modal({
  children,
  isOpen,
  onRequestClose
}: ModalProps) {
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
