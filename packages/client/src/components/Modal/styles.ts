import styled from 'styled-components';

interface ContainerProps {
  isOpen: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  flex: 1;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: ${props => props.theme.colors.modal.background};
  opacity: ${props => (props.isOpen ? '100%' : 0)};
  transition: 1s;
`;

export const Content = styled.div`
  display: flex;
  margin: 0 auto;
  border-radius: 5px;
`;
