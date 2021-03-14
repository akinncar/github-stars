import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  background: ${props => props.theme.colors.background.primary};

  p {
    margin-top: 8px;
    color: ${props => props.theme.colors.text.primary};
  }
`;
