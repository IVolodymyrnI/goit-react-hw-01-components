import { Transaction } from './Transaction/Transaction';
import PropTypes from 'prop-types';
import {
  Table,
  TableHead,
  TableHeadColum,
  TableString,
  TableBody,
} from './TransactionHistoryStyle';

export function TransactionHistory({ transactions }) {
  return (
    <Table>
      <TableHead>
        <TableString>
          <TableHeadColum>Type</TableHeadColum>
          <TableHeadColum>Amount</TableHeadColum>
          <TableHeadColum>Currency</TableHeadColum>
        </TableString>
      </TableHead>

      <TableBody>
        {transactions.map(transaction => {
          const { type, amount, currency, id } = transaction;
          return (
            <TableString key={id}>
              <Transaction type={type} amount={amount} currency={currency} />
            </TableString>
          );
        })}
      </TableBody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
};
