import styled from 'styled-components';

export const Btn = styled.button`
  background-color: ${props => props.theme.colors.button.background.primary};
  color: ${props => props.theme.colors.button.text.primary};
  padding: 6px 14px;
  border: 1px solid ${props => props.theme.colors.button.border.primary};
  border-radius: 5px;
  font-weight: 500;
  transition: 0.2s;

  :hover {
    background-color: ${props =>
      props.theme.colors.button.backgroundFocus.primary};
  }
`;
