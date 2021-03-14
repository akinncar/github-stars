import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 24px;
  background: ${props => props.theme.colors.background.primary};
  height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  > button {
    background: transparent;
    border: none;
    font-weight: 500;
    color: ${props => props.theme.colors.text.link};
  }
`;
