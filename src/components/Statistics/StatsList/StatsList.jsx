import { OneDocType } from '../StatDocType/StatDocType';
import { StatsListStyle, StatsListItem } from './StatsListStyle';
import PropTypes from 'prop-types';

export function StatsList({ data }) {
  return (
    <StatsListStyle>
      {data.map(type => {
        const { id, label, percentage } = type;
        const cleanLabel = label.replace('.', '');
        return (
          <StatsListItem key={id} className={cleanLabel}>
            <OneDocType label={label} percentage={percentage} />
          </StatsListItem>
        );
      })}
    </StatsListStyle>
  );
}

StatsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired })),
};
