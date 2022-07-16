import React from "react";

const CloseBtn = (props) => {
  return (
    <button onClick={props.closeSideMenu} className="close-btn">
      X
    </button>
  );
};

export default CloseBtn;
