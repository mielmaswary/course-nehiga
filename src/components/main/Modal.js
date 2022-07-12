import React from "react";

const Modal = (props) => {
  return (
    <div className="modal-bg">
      <div className="modal">
        <h4>תשובה לא נכונה</h4>
        <div>
          <button onClick={props.closeModal}>...נסה שוב</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
