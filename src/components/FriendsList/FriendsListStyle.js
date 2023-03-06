import styled from 'styled-components';

export const FriendsListStyle = styled.ul`
  margin-bottom: 100px;
`;
export const FriendsListItem = styled.li`
  display: flex;
  align-items: center;
  width: 200px;
  margin: 0 auto;
  background-color: white;
  border-radius: 2px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  :not(:last-of-type) {
    margin-bottom: 15px;
  }
`;
