import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 0.125em 0.333em 0;
  padding: 4px 8px;
  border-radius: 16px;
  color: ${props => props.theme.colors.tag.text};
  background: ${props => props.theme.colors.tag.background};

  :hover {
    background: ${props => props.theme.colors.tag.hover};
  }
`;
