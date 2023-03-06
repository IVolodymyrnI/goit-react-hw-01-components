import PropTypes from 'prop-types';
import {
  Profile,
  Description,
  Img,
  Name,
  Tag,
  Location,
  Stats,
  StatsItem,
  Label,
  Quantity,
} from './UserProfileStyle';

export function UserProfile({ username, tag, location, avatar, stats }) {
  const { followers, likes, views } = stats;
  return (
    <Profile>
      <Description>
        <Img src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </StatsItem>
      </Stats>
    </Profile>
  );
}

UserProfile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    views: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
