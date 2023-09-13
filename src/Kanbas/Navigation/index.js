import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./index.css";

function KanbasNavigation() {
  const { pathname } = useLocation();
  const links = ["account", "dashboard", "courses/home", "calendar"];
  const icons = ["user", "dashboard", "book", "calendar"];
  return (
    <div className="wd-kanbas list-group wd-width-85px">
      <a
        href="https://www.northeastern.edu/"
        className="list-group-item fs-1 text-danger"
      >
        N
      </a>
      {links.map((link, index) => {
        return (
          <Link
            to={`/kanbas/${link}`}
            className={`text-capitalize list-group-item ${
              pathname.includes(link) ? "active" : ""
            }`}
          >
            <i className={`fa fa-${icons[index]}`}></i>
            <br />
            {link.split("/")[0]}
          </Link>
        );
      })}
    </div>
  );
}

export default KanbasNavigation;
