import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 24px;
  background: ${props => props.theme.colors.background.primary};
  min-height: 100vh;
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

export const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  margin: 16px 0 8px 0;

  input {
    &:focus-within {
      width: 450px;
    }
  }
`;
