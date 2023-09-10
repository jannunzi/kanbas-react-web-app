import Profile from "./Profile.js";
import AccountNavigation from "../account/AccountNavigation.js";
import KanbasNavigation from "../KanbasNavigation.js";

function ProfileScreen() {
  return KanbasNavigation({
    children: AccountNavigation({ children: Profile() }),
  });
}

export default ProfileScreen;
