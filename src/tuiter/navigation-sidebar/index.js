import React from "react";
import { NavLink, useLocation } from "react-router-dom";
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
        <NavLink
          to={`/tuiter/${link}`}
          className={`text-capitalize list-group-item list-group-item-action d-flex align-items-center`}
          activeClassName="active"
          key={link}
        >
          <FontAwesomeIcon icon={icons[link]} className="me-2" />
          {link}
        </NavLink>
      ))}
      {!currentUser ? (
        <>
          <NavLink
            to="/tuiter/login"
            className="list-group-item list-group-item-action"
            activeClassName="active" 
          >
            <FontAwesomeIcon icon={faUser} className="me-2" />
            Login
          </NavLink>
          <NavLink
            to="/tuiter/register"
            className="list-group-item list-group-item-action"
            activeClassName="active"
          >
            <FontAwesomeIcon icon={faUser} className="me-2" />
            Register
          </NavLink>
        </>
      ) : (
        <NavLink
          to="/tuiter/profile"
          className="list-group-item list-group-item-action"
          activeClassName="active" 
        >
          <FontAwesomeIcon icon={faUser} className="me-2" />
          Profile
        </NavLink>
      )}
    </div>
  );
};

export default NavigationSidebar;
