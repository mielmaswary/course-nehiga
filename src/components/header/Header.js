import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <div className="nav-header">
      <div className="logo"></div>
      <div className="headline">ללמוד נהיגה. זה קל</div>
      <div>
        <FontAwesomeIcon className="menu-btn" icon={faBars} />
      </div>
    </div>
  );
};

export default Header;
