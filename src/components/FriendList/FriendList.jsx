import PropTypes from 'prop-types';
import { FriendItem } from '../FriendItem/FriendItem';
import { FriendBlock } from '../FriendList/FriendList.styled';
export const FriendList = ({ friends }) => { 
	return (
    <FriendBlock>
      	{  
			friends.map(({ id, avatar, name, isOnline }) => (
				<FriendItem
					key={id}
					avatar={avatar}
					name={name}
					isOnline={isOnline}
				/>
			))
		}
		</FriendBlock>
	);
};


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};


