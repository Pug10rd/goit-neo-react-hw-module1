import css from "./FriendList.module.css";

export const Item = ({ ...friend }) => {
  return (
    <li className={css.listItem}>
      <img
        className="avatar"
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className="name">{friend.name}</p>
      <span className={friend.isOnline ? `${css.online}` : `${css.offline}`}>
        {friend.isOnline ? "Online" : "Offline"}
      </span>
    </li>
  );
};
