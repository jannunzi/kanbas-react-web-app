import course from "../course/course.json" assert { type: "json" };
import Modules from "../modules/Modules.js";

function Home() {
  return `<div class="p-3">
      <h3>${course.number}.${course.section}.${course.year} &gt; Modules</h3>

        ${Modules()}
    </div>`;
}

export default Home;
