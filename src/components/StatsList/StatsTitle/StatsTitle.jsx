import { Title } from './StatsTittleStyle';
import PropTypes from 'prop-types';

export function StatsTitle({ title }) {
  return title && <Title>{title}</Title>;
}

StatsTitle.propTypes = {
  title: PropTypes.string,
};
