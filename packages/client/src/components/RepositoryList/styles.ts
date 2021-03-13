import styled from 'styled-components';

export const Container = styled.table`
  width: 100%;
  border-style: hidden;
  border-collapse: collapse;
  box-shadow: 0 0 0 1px ${props => props.theme.colors.border.primary};
  border-radius: 5px;
  margin: 16px 0;

  th {
    background-color: ${props => props.theme.colors.background.alternative};
  }

  th,
  td {
    text-align: left;
    padding: 6px 12px;

    border: 1px solid ${props => props.theme.colors.border.primary};
  }

  tr:last-child td:first-child {
    border-bottom-left-radius: 5px;
  }

  tr:last-child td:last-child {
    border-bottom-right-radius: 5px;
  }
`;
