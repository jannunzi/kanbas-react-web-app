function CourseNavigation({ children }) {
  const courseLinks = [
    "home",
    "modules",
    "piazza",
    "Zoom",
    "assignments",
    "quizzes",
    "grades",
    "people",
    "videos",
  ];
  return `
    <div style="display: flex; flex-direction: row">
      <div style="padding: 15px; width: 150px">
        <i style="color: red; font-size: 1.5em;" class="p-2 fa fa-bars" aria-hidden="true"></i>
        <ul style="list-style-type: none; padding: 0; margin: 0;">
            ${courseLinks
              .map(
                (link) => `
                  <li class="p-2">
                    <a style="text-decoration: none; color: red; text-transform: capitalize" href="/kanbas/${link}">
                      ${link}
                    </a>
                  </li>
            `
              )
              .join("")}
        </ul>
      </div>
      <div style="flex-grow: 1">
        ${children ? children : ""}
      </div>
    </div>
  `;
}

export default CourseNavigation;
