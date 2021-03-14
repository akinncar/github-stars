import styled from 'styled-components';

export const Container = styled.table`
  width: 100%;
  border-style: hidden;
  border-spacing: 0px;
  border: 1px solid ${props => props.theme.colors.border.primary};
  border-radius: 5px;
  margin: 16px 0;
  color: ${props => props.theme.colors.text.primary};

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
    border-bottom-left-radius: 4px;
  }

  tr:last-child td:last-child {
    border-bottom-right-radius: 4px;
  }

  th:first-child {
    border-top-left-radius: 4px;
  }

  th:last-child {
    border-top-right-radius: 4px;
  }

  td > button {
    background: transparent;
    border: none;
    font-weight: 500;
    color: ${props => props.theme.colors.text.link};
  }
`;

export const TagContainer = styled.table`
  display: flex;
`;
