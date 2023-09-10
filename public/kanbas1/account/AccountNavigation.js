function AccountNavigation({ children }) {
  const accountLinks = [
    "Notifications",
    "profile",
    "Files",
    "Settings",
    "ePortfolios",
    "Shared Content",
    "The Hub",
    "Qwickly Course Tools",
    "Global Announcements",
  ];

  return `
    <div style="display: flex; flex-direction: row;">
        <div style="padding: 5px">
            <ul style="list-style-type: none; padding: 0; margin: 0;">
            ${accountLinks
              .map(
                (link) => `<li>
            <a style="text-transform: capitalize; text-decoration: none; color: black" href="/kanbas/${link}">${link}</a>
            </li>`
              )
              .join("")}
            </ul>
        </div>
        <div style="background-color: cyan; flex-grow: 1">
            ${children ? children : ""}
        </div>
    </div>
    `;
}

export default AccountNavigation;
