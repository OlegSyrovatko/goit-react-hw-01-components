import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  width: 340px;
  padding: 20px;
  background-color: ${props => props.theme.colors.white};
  border-radius: 4px;
  color: ${props => props.theme.colors.primaryText};
  margin-bottom: 20px;
  
  tr {
    font-size: 12px;
    line-height: 18px;
  }

  td {
    padding: 2px 0px 2px 20px;
  }

  th {
    padding: 10px;
    font-weight: bold;
  }

  thead {
    font-size: 14px;
    line-height: 20px;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.blue};
  }
  
  tbody {
    tr:nth-of-type(even) {
      background-color: ${props => props.theme.colors.lightblue};
    }
  }
`;
