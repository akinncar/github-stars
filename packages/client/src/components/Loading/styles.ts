import styled from 'styled-components';

interface ContainerProps {
  isFullScreen?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${props => (props.isFullScreen ? '100vh' : 'auto')};
  padding: 16px;
  background: ${props => props.theme.colors.background.primary};
`;
