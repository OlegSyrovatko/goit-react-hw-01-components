
import PropTypes from 'prop-types';
import defaultAvatar from 'default-avatar.png'
import { Card, H2, P, UL, LI, Label, Quantity } from './Profile.styled';


const Profile = ({username, tag, location, avatar=defaultAvatar, stats }) => {

  return (
		<Card>
		  <div>
			<img
				src={avatar}
				alt={username}
				width={200}
				style={{ borderRadius: '50%' }}
			/>

			<H2>{ username }</H2>
			<P>@{tag}</P>
			<P>{ location }</P>
		</div>

		<UL>
			<LI>
			<Label><span>Followers</span></Label>
			<Quantity><span>{ stats.followers }</span></Quantity>
			</LI>
			<LI>
			<Label>Views</Label>
			<Quantity><span>{ stats.views }</span></Quantity>
			</LI>
			<LI>
			<Label>Likes</Label>
			<Quantity><span>{ stats.likes }</span></Quantity>
			</LI>
		</UL>
		</Card>
  );
};
export default Profile;

Profile.propTypes = {
	username: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
	location: PropTypes.string,
	avatar: PropTypes.string,
	stats: PropTypes.object,
};