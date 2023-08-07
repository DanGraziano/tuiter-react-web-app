import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHouse,faHashtag,faBell,faEnvelope,faBookmark,faList,faUser,faEllipsis,} from "@fortawesome/free-solid-svg-icons";

const NavigationSidebar = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { pathname } = useLocation();
  const [ignore, tuiter, active] = pathname.split("/");
  const links = ["home", "explore", "notifications", "messages", "bookmarks", "lists"];

  const icons = {
    home: faHouse,
    explore: faHashtag,
    notifications: faBell,
    messages: faEnvelope,
    bookmarks: faBookmark,
    lists: faList,
    profile: faUser,
    more: faEllipsis,
  };

  return (
    <div className="list-group">
    {links.map((link) => (
      <Link to={`/tuiter/${link}`} className={`text-capitalize list-group-item list-group-item-action d-flex align-items-center ${active === link ? "active" : ""}`} key={link}>
        <FontAwesomeIcon icon={icons[link]} />
        <div className="d-none d-xl-block d-xxl-block ps-2">{link}</div>
      </Link>
    ))}
      {currentUser &&
      <Link className={`text-capitalize list-group-item list-group-item-action d-flex align-items-center ${active === "profile" ? "active" : ""}`} to="/tuiter/profile">
        <FontAwesomeIcon icon={faUser} className="me-2" />
        <span className="d-none d-xl-block d-xxl-block">Profile</span>
      </Link>}
      {!currentUser && 
      <Link className={`text-capitalize list-group-item list-group-item-action d-flex align-items-center ${active === "login" ? "active" : ""}`} to="/tuiter/login">
        <FontAwesomeIcon icon={faUser} className="me-2" />
        <span className="d-none d-xl-block d-xxl-block">Login</span>
      </Link>}
      {!currentUser && 
      <Link className={`text-capitalize list-group-item list-group-item-action d-flex align-items-center ${active === "register" ? "active" : ""}`} to="/tuiter/register">
        <FontAwesomeIcon icon={faUser} className="me-2" />
        <span className="d-none d-xl-block d-xxl-block">Register</span>
      </Link>}
    </div>
  );
};

export default NavigationSidebar;


