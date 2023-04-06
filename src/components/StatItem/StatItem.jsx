
import PropTypes from 'prop-types';

import { Li, Label, Perc } from './StatItem.styled';


export const StatItem = ({ label, percentage }) => {
	return (
		<Li>
			<Label>{label} </Label>
			<Perc>{percentage}% </Perc>
		</Li>
	);
};


StatItem.propTypes = {
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	percentage: PropTypes.number,
};