import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 0.125em 0 0;
  padding: 6px 12px;
  border-radius: 16px;
  color: ${props => props.theme.colors.tag.text};
  background: ${props => props.theme.colors.tag.background};

  :hover {
    background: ${props => props.theme.colors.tag.hover};
  }
`;
