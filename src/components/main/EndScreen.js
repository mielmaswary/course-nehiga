import React from "react";

const EndScreen = () => {
  const clickHandle = () => {
    //location.href("http://localhost:3000/course-nehiga");
    window.location.href = window.location.href;
  };
  return (
    <div className="modal-bg">
      <div className="modal">
        <h4>כל הכבוד! סיימת בהצלחה</h4>
        <div>
          <button onClick={clickHandle}>להתחלה</button>
        </div>
      </div>
    </div>
  );
};

export default EndScreen;
