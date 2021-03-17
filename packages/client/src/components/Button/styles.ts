import styled, { ThemedStyledProps } from 'styled-components';

interface BtnProps {
  variant: 'primary' | 'secondary';
}

export const Btn = styled.button<BtnProps>`
  background-color: ${props =>
    props.variant === 'primary'
      ? props.theme.colors.button.background.primary
      : props.theme.colors.button.background.secondary};
  color: ${props =>
    props.variant === 'primary'
      ? props.theme.colors.button.text.primary
      : props.theme.colors.button.text.secondary};
  padding: 6px 14px;
  border: 1px solid
    ${props =>
      props.variant === 'primary'
        ? props.theme.colors.button.border.primary
        : props.theme.colors.button.border.secondary};
  border-radius: 5px;
  font-weight: 500;
  transition: 200ms;

  :hover {
    background-color: ${props =>
      props.variant === 'primary'
        ? props.theme.colors.button.backgroundFocus.primary
        : props.theme.colors.button.backgroundFocus.secondary};
  }

  &:disabled {
    opacity: 50%;
    background-color: ${props =>
      props.theme.colors.button.background.secondary};
    color: ${props => props.theme.colors.button.text.secondary};
    border: 1px solid ${props => props.theme.colors.button.border.secondary};
    cursor: not-allowed;
  }
`;
