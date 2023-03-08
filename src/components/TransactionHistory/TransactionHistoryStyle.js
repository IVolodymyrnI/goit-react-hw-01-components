import styled from 'styled-components';

export const Table = styled.table`
  margin: 0 auto;
  margin-bottom: 100px;

  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  border-collapse: collapse;
`;
export const TableHead = styled.thead``;
export const TableString = styled.tr`
  :nth-child(even) {
    background-color: rgba(102, 153, 204, 0.15);
  }
  :nth-child(odd) {
    background-color: white;
  }
`;
export const TableHeadColum = styled.th`
  padding: 12px 80px;
  color: white;
  background-color: #00bfc8;
  :not(:first-of-type) {
    border-left: 1px solid white;
  }
`;
export const TableBody = styled.tbody``;

export const TableColum = styled.td`
  padding: 12px 80px;
  :not(:first-of-type) {
    border-left: 1px solid gray;
  }
`;
