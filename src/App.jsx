import Profile from 'components/Profile/Profile';
import { Container } from './App.styled';
import { Statistics } from './components/Statistics/Statistics.styled';
import { StatTitle } from './components/StatTitle/StatTitle';
import { StatList } from './components/StatList/StatList';
import { FriendList } from './components/FriendList/FriendList';
import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';

export const App = () => {
  const { username, tag, location, avatar, stats } = user;

  return (
    <Container>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics>
        <StatTitle text="Upload Stats" />
        <StatList data={data} />
      </Statistics>
      <FriendList friends={friends} />
    </Container>
  );
};
