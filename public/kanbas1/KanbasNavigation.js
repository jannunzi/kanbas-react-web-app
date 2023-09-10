function KanbasNavigation({ children }) {
  const kanbasLinks = [
    "account",
    "dashboard",
    "courses",
    "calendar",
    "inbox",
    "history",
    "studio",
    "commons",
    "help",
  ];
  const icons = {
    account: "fa fa-user",
    dashboard: "fa fa-dashboard",
    courses: "fa fa-book",
    calendar: "fa fa-calendar",
    inbox: "fa fa-inbox",
    history: "fa fa-history",
    studio: "fa fa-film",
    commons: "fa fa-globe",
    help: "fa fa-question-circle",
  };
  return `
    <div style="display: flex; flex-direction: row">
      <div style="background-color: black; color: white; padding: 5px; padding-top: 0px; width: 75px">
        <ul style="list-style-type: none; padding: 0; margin: 0;">
          <li style="text-align: center; font-size: 4em">
            <a style="padding-top: 0px; color: red; font-family: 'Times New Roman'; text-decoration: none; " href="http://northeastern.edu">N</a></li>
            ${kanbasLinks
              .map(
                (link) => `
                  <li style="text-align: center; margin-bottom: 15px">
                    <a style="color: white; text-decoration: none; text-transform: capitalize" href="/kanbas/${link}">
                      <i style="font-size: 2em; color: red" class="${icons[link]}" aria-hidden="true"></i>
                      <br/>
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

export default KanbasNavigation;
