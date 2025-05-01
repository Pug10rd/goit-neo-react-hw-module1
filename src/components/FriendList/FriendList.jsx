import { Item } from "./Friend-List-Item";

export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map((friend) => (
        <Item {...friend} />
      ))}
    </ul>
  );
};
