
import Profile from "./components/social-profile/Profile";
import styles from "./components/social-profile/styles.module.css";
import user from "./components/social-profile/user";

function App() {
  return (
    <div className={styles.wrapper}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
}

export default App;
