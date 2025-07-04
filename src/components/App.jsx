import { Profile } from "./user-profile/user-profile";
import user from "./user-profile/user.json";
import { Statistics } from "./Statistics/Statistics";
import data from "../components/Statistics/data.json";
import { FriendList } from "./FriendList/FriendList";
import friends from "../components/FriendList/friends.json";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import items from "../components/TransactionHistory/transactions.json";
export const App = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontSize: 40,
        color: "#010101",
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={items} />
    </div>
  );
};
