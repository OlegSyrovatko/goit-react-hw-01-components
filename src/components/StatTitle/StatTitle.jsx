
import PropTypes from 'prop-types';

import { Title } from './StatTitle.styled';

export const StatTitle = ({ text }) => {
  return <Title>{text}</Title>;
};

StatTitle.propTypes = {
  text: PropTypes.string.isRequired,
};