import Home from "../home/Home.js";
import KanbasNavigation from "../KanbasNavigation.js";
import CourseNavigation from "./CourseNavigation.js";

function CourseScreen() {
  return KanbasNavigation({
    children: CourseNavigation({
      children: Home(),
    }),
  });
}

export default CourseScreen;
