function Dashboard() {
  const courses = [
    {
      _id: "123",
      name: "Web Development",
      number: "CS4550",
      section: "12631",
      term: "Fall",
      year: "2023",
    },
    {
      _id: "234",
      name: "Web Development",
      number: "CS5610",
      section: "19732",
      term: "Fall",
      year: "2023",
    },
  ];
  return `
    <div class="container-fluid">
      <h1>Dashboard</h1>
      <hr/>
      <h2>Published Courses (${courses.length})</h2>
      <ul>
        ${courses
          .map((course) => {
            return `
            <li>
              <a href="/kanbas/course-editor/course-editor.template.client.html">
                ${course.number} - ${course.name}
              </a>
            </li>
          `;
          })
          .join("")}
      </ul>

      <div class="row row-cols-3 g-4">
          ${courses
            .map((course) => {
              return `
        <div class="col">
          <div class="card">
            <img src="/images/react.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${course.name}</h5>
              <a href="/kanbas/course/index.html">${course.number} ${course.name} ${course.term} ${course.year}</a>
            </div>
          </div>
        </div>`;
            })
            .join("")}
      </div>
    </div>
  `;
}

export default Dashboard;
