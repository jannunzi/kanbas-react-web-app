import EditProfile from "./EditProfile.js";
import AccountNavigation from "../account/AccountNavigation.js";
import KanbasNavigation from "../KanbasNavigation.js";

function EditProfileScreen() {
  return KanbasNavigation({
    children: AccountNavigation({ children: EditProfile() }),
  });
}

export default EditProfileScreen;
