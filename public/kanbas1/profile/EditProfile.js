import user from "./user.js";

function EditProfile() {
  return `
  <div style="padding: 5px">
        <form action="index.html">
        <button>Cancel Editing</button>
        <br/>
        Name:<br/>
        <input value="${user.firstName} ${user.lastName}" /><br/>
        Pronouns:<br/>
        <select>
            <option>None</option>
            <option>He/Him</option>
            <option>She/Her</option>
            <option>They/Them</option>
        </select><br/>
        Title:<br/>
        <input value="${user.title}" /><br/>
        <h2>Contacts</h2>
        No contacts yet<br/>
        <button>Cancel</button>
        <button>Save Profile</button>
        </form>
    </div>`;
}

export default EditProfile;
