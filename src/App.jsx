
import Profile from "./components/social-profile/Profile";
import user from "./components/social-profile/user";

import FriendList from "./components/friend-list/FriendList";
import friends from "./components/friend-list/friends";

import Statistics from './components/statistics/Statistics'
import data from './components/statistics/data.json'


function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <FriendList friends={friends} />
      <Statistics title="Upload stats" stats={data} />
  </div>
  );
}

export default App;
