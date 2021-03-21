import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: ${props => props.theme.colors.background.primary};
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  position: absolute;
  top: 24px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 24px;
  text-align: center;

  button {
    background: transparent;
    border: none;
    font-weight: 500;
    color: ${props => props.theme.colors.text.link};
    padding-right: 12px;
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Content = styled.form`
  > div {
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 12px;

    p {
      font-weight: 500;
      margin-right: 4px;
      text-align: center;
      color: ${props => props.theme.colors.text.primary};
    }
  }
`;
