import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 450px;
  background-color: ${props => props.theme.colors.modal.contentBackground};
  border-radius: 5px;
  border: 1px solid ${props => props.theme.colors.border.primary};
`;

export const Header = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 16px;
  background-color: ${props => props.theme.colors.modal.headerBackground};
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  border-bottom: 1px solid ${props => props.theme.colors.border.primary};

  h3 {
    font-weight: 500;
    margin-right: 16px;
  }

  > button {
    background: transparent;
    border: none;
    font-weight: 500;
    color: ${props => props.theme.colors.text.primary};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;

  p {
    font-weight: 500;

    > span {
      font-weight: 400;
      color: ${props => props.theme.colors.text.span} !important;
    }
  }
`;

export const TagContainer = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  margin-top: 16px;
  padding: 6px 12px;
  border-radius: 5px;
  border: 1px solid ${props => props.theme.colors.border.primary};

  input {
    display: flex;
    flex: 1;
    background-color: transparent;
    color: ${props => props.theme.colors.text.primary};
    border: none;
    padding: 6px;
  }

  > div {
    margin: 6px 6px 6px 0;
  }
`;

export const SuggestedContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  margin-top: 16px;

  p {
    padding-right: 6px;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 16px;
  border-top: 1px solid ${props => props.theme.colors.border.primary};

  > button {
    margin-left: 6px;
  }
`;
