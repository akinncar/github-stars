import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: ${props => props.theme.colors.background.primary};

  h1 {
    position: absolute;
    top: 24px;
    left: 24px;
  }

  > label {
    position: absolute;
    top: 24px;
    right: 24px;
  }
`;

export const Content = styled.div`
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
