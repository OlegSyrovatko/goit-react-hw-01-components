
import PropTypes from 'prop-types';

// import { H3 } from './StatItem.styled';


export const StatItem = ({id, label, percentage }) => {
	return (
			<>
				{label} 
				{/* <H3>{percentage} </H3> */}
			</>
	);
};


StatItem.propTypes = {
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	percentage: PropTypes.number,
};