import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Status, Name, Avatar } from './FriendCardStyle';

export function FriendCard({ isOnline, avatar, name }) {
  return (
    <Fragment>
      <Status className={isOnline}>{isOnline}</Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Fragment>
  );
}

FriendCard.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
