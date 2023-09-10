import user from "./user.js";

function Profile() {
  return `
  <div style="padding: 5px">
    <form action="edit.html">
        <button>Edit Profile</button>
    </form>
    <h1>${user.firstName} ${user.lastName}</h1>
    <h2>Biography</h2>
    <p>${user.bio}</p>
    <h2>Links</h2>
    <ul>
        ${user.links
          .map((link) => `<li><a href="${link.url}">${link.title}</a></li>`)
          .join("")}
    </ul>
    </div>
    `;
}

export default Profile;
