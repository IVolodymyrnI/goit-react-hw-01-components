import PropTypes from 'prop-types';
import { FriendCard } from './FriendCard/FriendCard';
import { FriendsListItem, FriendsListStyle } from './FriendsListStyle';

export function FriendsList({ friends }) {
  return (
    <FriendsListStyle>
      {friends.map(friend => {
        const { avatar, id, isOnline, name } = friend;
        return (
          <FriendsListItem key={id}>
            <FriendCard avatar={avatar} isOnline={isOnline} name={name} />
          </FriendsListItem>
        );
      })}
    </FriendsListStyle>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ),
};
