import { Fragment } from 'react';
import { Percentage, Label } from './StatDocTypeStyle';
import PropTypes from 'prop-types';

export function OneDocType({ label, percentage }) {
  return (
    <Fragment>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </Fragment>
  );
}

OneDocType.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
