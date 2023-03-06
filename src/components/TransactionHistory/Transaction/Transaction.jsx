import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { TableColum } from './TransactionStyle';

export function Transaction({ type, amount, currency }) {
  return (
    <Fragment>
      <TableColum>{type}</TableColum>
      <TableColum>{amount}</TableColum>
      <TableColum>{currency}</TableColum>
    </Fragment>
  );
}

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
