import PropTypes from 'prop-types';

import { StatBlock } from '../StatList/StatBlock.styled';
import { StatItem } from '../StatItem/StatItem';

export const StatList = ({ data }) => {
  return (
	<StatBlock>
	{data.map(({ id, label, percentage }) => (

			<StatItem
				key={id}
				id={id}
				label={label}
				percentage={percentage}
			/>

	))}
	</StatBlock>
  );
};


StatList.propTypes = {
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	percentage: PropTypes.number,
};