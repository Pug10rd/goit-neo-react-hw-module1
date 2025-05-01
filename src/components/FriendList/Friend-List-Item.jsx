import css from "./FriendList.module.css";

export const Item = ({ ...friend }) => {
  return (
    <li className={css.listItem} key={friend.id}>
      <span
        className={friend.isOnline ? `${css.online}` : `${css.offline}`}
      ></span>
      <img
        className="avatar"
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className="name">{friend.name}</p>
    </li>
  );
};
