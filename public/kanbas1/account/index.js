import KanbasNavigation from "../KanbasNavigation.js";
import AccountNavigation from "./AccountNavigation.js";

function Account() {
  return KanbasNavigation({ children: AccountNavigation({ children: "" }) });
}

export default Account;
