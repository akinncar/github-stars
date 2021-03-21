import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 8px;
`;

export const Previous = styled.button`
  background-color: ${props => props.theme.colors.button.background.secondary};
  color: ${props => props.theme.colors.text.link};
  padding: 6px 14px;
  border: 1px solid ${props => props.theme.colors.button.border.secondary};
  border-radius: 5px 0 0 5px;
  font-weight: 500;
  transition: 200ms;

  :hover {
    background-color: ${props =>
      props.theme.colors.button.backgroundFocus.secondary};
  }

  &:disabled {
    opacity: 50%;
    background-color: ${props => props.theme.colors.background.primary};
    border: 1px solid ${props => props.theme.colors.button.border.secondary};
    cursor: not-allowed;
  }
`;

export const Next = styled.button`
  background-color: ${props => props.theme.colors.button.background.secondary};
  color: ${props => props.theme.colors.text.link};
  padding: 6px 14px;
  border: 1px solid ${props => props.theme.colors.button.border.secondary};
  border-radius: 0 5px 5px 0;
  font-weight: 500;
  transition: 200ms;

  :hover {
    background-color: ${props =>
      props.theme.colors.button.backgroundFocus.secondary};
  }

  &:disabled {
    opacity: 50%;
    background-color: ${props => props.theme.colors.background.primary};
    border: 1px solid ${props => props.theme.colors.button.border.secondary};
    cursor: not-allowed;
  }
`;
