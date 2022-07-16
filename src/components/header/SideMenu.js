import React, { useState } from "react";
import CloseBtn from "../general/CloseBtn";

export const SideMenu = (props) => {
  const { isSideMenuOpen, setIsSideMenuOpen } = props;
  const closeSideMenu = () => {
    props.setSideMenuClassName("sideMenu-hide");
    props.setIsSideMenuOpen(false);
  };
  return (
    <div className={isSideMenuOpen ? "modal-bg" : ""}>
      <div className={props.sideMenuClassName}>
        <div className="side-menu-container">
          <div className="header">
            <CloseBtn closeSideMenu={closeSideMenu} />
          </div>
          <div className="main">
            <button>התחבר</button>
            <button>עזרה</button>
            <button>צור קשר</button>
          </div>
        </div>
      </div>
    </div>
  );
};
