import PropTypes from 'prop-types';
import { Li, Label, Perc } from './FriendItem.styled'; 

export const FriendItem = ({ avatar, name, isOnline }) => {
	return (
		<Li>
			<Label>{avatar} </Label>
			<Perc>{name} {isOnline} </Perc>
		</Li>
	);
};

FriendItem.propTypes = {
	avatar: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	isOnline: PropTypes.bool.isRequired,
};