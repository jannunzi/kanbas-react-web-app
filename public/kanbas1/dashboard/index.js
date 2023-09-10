import KanbasNavigation from "../KanbasNavigation.js";
import Dashboard from "./Dashboard.js";

function DashboardScreen() {
  return KanbasNavigation({ children: Dashboard() });
}

export default DashboardScreen;
