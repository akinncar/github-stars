import { useRef } from 'react';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { Container, Content } from './styles';

export default function Modal({ children, isOpen, onRequestClose }) {
  const contentRef = useRef(null);

  // useOutsideClick(contentRef, () => {
  //   if (isOpen) {
  //     onRequestClose();
  //   }
  // });

  return (
    <Container isOpen={isOpen}>
      <Content ref={contentRef}>{children}</Content>
    </Container>
  );
}
