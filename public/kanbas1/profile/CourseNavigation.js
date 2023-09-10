function CourseNavigation() {
  const courseLinks = [
    "Notifications",
    "Profile",
    "Files",
    "Settings",
    "ePortfolios",
    "Shared Content",
    "The Hub",
    "Qwickly Course Tools",
    "Global Announcements",
  ];
  return `
  <div style="padding: 5px">
    <ul style="list-style-type: none; padding: 0; margin: 0;">
      ${courseLinks.map((link) => `<li>${link}</li>`).join("")}
    </ul>
    </div>
    `;
}

export default CourseNavigation;
