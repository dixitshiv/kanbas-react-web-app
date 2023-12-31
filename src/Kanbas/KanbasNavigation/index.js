import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function KanbasNavigation({ active }) {
  const links = [
    {
      name: "Account",
      url: "/Account",
      icon: "fa-regular fa-circle-user",
    },
    {
      name: "Dashboard",
      url: "/Dashboard",
      icon: "fa-solid fa-gauge-high",
    },
    { name: "Courses", url: "/Courses", icon: "fa-solid fa-book" },
    { name: "Calender", url: "#", icon: "fa-regular fa-calendar-days" },
    { name: "Inbox", url: "#", icon: "fa-solid fa-inbox" },
    { name: "History", url: "#", icon: "fa-regular fa-clock" },
    { name: "Studio", url: "#", icon: "fa-solid fa-desktop" },
    { name: "Commons", url: "#", icon: "fa-solid fa-right-from-bracket" },
    { name: "Help", url: "#", icon: "fa-regular fa-circle-question" },
  ];
  const { pathname } = useLocation();

  return (
    <div id="kanbas-navigation">
      <ul className="wd-kanbas-navigation">
        {links.map((link, index) => (
          <li
            key={index}
            className={
              pathname.includes(link.name) && "wd-kanbas-navigation-active"
            }
          >
            <Link to={`/Kanbas/${link.name}`} className={`list-group-item`}>
              <i className={link.icon} aria-hidden="true"></i>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default KanbasNavigation;
