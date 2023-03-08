import { Title } from './StatsTittleStyle';
import PropTypes from 'prop-types';

export const StatsTitle = ({ title }) => title && <Title>{title}</Title>;

StatsTitle.propTypes = {
  title: PropTypes.string,
};
