import PropTypes from 'prop-types';
import {
  Table,
  TableHead,
  TableHeadColum,
  TableString,
  TableBody,
  TableColum,
} from './TransactionHistoryStyle';

export const TransactionHistory = ({ transactions }) => (
  <Table>
    <TableHead>
      <TableString>
        <TableHeadColum>Type</TableHeadColum>
        <TableHeadColum>Amount</TableHeadColum>
        <TableHeadColum>Currency</TableHeadColum>
      </TableString>
    </TableHead>

    <TableBody>
      {transactions.map(({ type, amount, currency, id }) => (
        <TableString key={id}>
          <TableColum>{type}</TableColum>
          <TableColum>{amount}</TableColum>
          <TableColum>{currency}</TableColum>
        </TableString>
      ))}
    </TableBody>
  </Table>
);

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
