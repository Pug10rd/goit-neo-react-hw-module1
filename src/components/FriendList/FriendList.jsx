import { Item } from "./Friend-List-Item";
import css from "./FriendList.module.css";

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map((friend) => (
        <Item {...friend} key={friend.id} />
      ))}
    </ul>
  );
};
