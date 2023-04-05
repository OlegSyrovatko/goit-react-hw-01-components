import Profile from 'components/Profile/Profile';
import { Container } from './App.styled';
import user from 'data/user.json';

export const App = () => {
  const { username, tag, location, avatar, stats } = user;
  return (
    <Container>
      <Profile username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
    </Container>
  );
};
