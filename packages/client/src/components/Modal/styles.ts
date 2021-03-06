import styled from 'styled-components';

interface ContainerProps {
  isOpen: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  flex: 1;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: ${props => props.theme.colors.modal.background};
  opacity: ${props => (props.isOpen ? '100%' : 0)};
`;

export const Content = styled.div`
  display: flex;
  border-radius: 5px;
  max-width: 90%;
  transition: all 200ms ease-in-out;
`;
