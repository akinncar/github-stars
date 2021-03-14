import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.theme.colors.background.secondary};
  border-radius: 5px;
  padding: 6px 10px;
  border: 1px solid ${props => props.theme.colors.border.primary};
  font-size: 14px;
  color: ${props => props.theme.colors.text.secondary};
`;

export const Input = styled.input`
  border: none;
  background-color: transparent;
  color: ${props => props.theme.colors.text.primary};
`;
