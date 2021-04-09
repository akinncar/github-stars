import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0.125em 0 0;
  border-radius: 2em;
  color: ${props => props.theme.colors.tag.text};
  background: ${props => props.theme.colors.tag.background};

  > span {
    padding: 6px 12px;
  }

  :hover {
    background: ${props => props.theme.colors.tag.hover};
  }
`;

export const ActionContainer = styled.div`
  padding: 5px 9px;
  border-radius: 50%;
  background: ${props => props.theme.colors.tag.backgroundClose};
  cursor: pointer;

  :hover {
    background: ${props => props.theme.colors.tag.hoverClose};
  }
`;
