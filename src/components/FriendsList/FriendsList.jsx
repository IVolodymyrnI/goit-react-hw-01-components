import PropTypes from 'prop-types';
import {
  FriendsListItem,
  FriendsListStyle,
  Status,
  Name,
  Avatar,
} from './FriendsListStyle';

export const FriendsList = ({ friends }) => (
  <FriendsListStyle>
    {friends.map(({ avatar, id, isOnline, name }) => (
      <FriendsListItem key={id}>
        <Status className={isOnline}>{isOnline}</Status>
        <Avatar src={avatar} alt="User avatar" width="48" />
        <Name>{name}</Name>
      </FriendsListItem>
    ))}
  </FriendsListStyle>
);

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
