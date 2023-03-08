import {
  StatsListStyle,
  StatsListItem,
  Percentage,
  Label,
} from './StatsListStyle';
import PropTypes from 'prop-types';

export const StatsList = ({ data }) => (
  <StatsListStyle>
    {data.map(({ id, label, percentage }) => (
      <StatsListItem key={id} className={label.replace('.', '')}>
        <Label>{label}</Label>
        <Percentage>{percentage}%</Percentage>
      </StatsListItem>
    ))}
  </StatsListStyle>
);

StatsList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
