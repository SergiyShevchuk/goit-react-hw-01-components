
import Profile from "./components/social-profile/Profile";
import user from "./components/social-profile/user";

import FriendList from "./components/friend-list/FriendList";
import friends from "./components/friend-list/friends";

import styles from "./components/social-profile/styles.module.css";

function App() {
  return (
    <div className={styles.wrapper}>s
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <FriendList friends={friends} />
  </div>
  );
}

export default App;
