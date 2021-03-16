import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  background-color: ${props => props.theme.colors.background.secondary};
  border-radius: 5px;
  padding: 6px 10px;
  border: 1px solid ${props => props.theme.colors.border.primary};
  font-size: 14px;
  color: ${props => props.theme.colors.text.secondary};
  transition: 200ms;

  &:focus-within {
    border: 1px solid ${props => props.theme.colors.border.secondary};
  }

  > svg {
    margin-right: 4px;
  }
`;

export const Input = styled.input`
  border: none;
  background-color: transparent;
  color: ${props => props.theme.colors.text.primary};
`;
