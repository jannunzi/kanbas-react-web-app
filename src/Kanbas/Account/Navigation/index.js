import { Link } from "react-router-dom";
import "./index.css";
import { useLocation } from "react-router-dom";

function AccountNavigation() {
  const links = ["notifications", "profile", "settings"];
  const { pathname } = useLocation();
  return (
    <div className="ms-3">
      <div className="wd-account-navigation list-group">
        {links.map((link) => {
          return (
            <Link
              to={link}
              className={`text-capitalize list-group-item ${
                pathname.includes(link) ? "active" : ""
              }`}
            >
              {link}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default AccountNavigation;
