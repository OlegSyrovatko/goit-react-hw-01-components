import PropTypes from 'prop-types';
import { Li, Onlining, IMG, Perc } from './FriendItem.styled'; 
import defaultAvatar from '../../default-avatar.png'


export const FriendItem = ({ avatar=defaultAvatar, name, isOnline }) => {
	return (
		<Li>
			<Onlining isOnline={isOnline}> </Onlining>
			<IMG src={avatar} alt={name} width={50} />
			<Perc>{name} {isOnline} </Perc>
		</Li>
	);
};

FriendItem.propTypes = {
	avatar: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	isOnline: PropTypes.bool.isRequired,
};