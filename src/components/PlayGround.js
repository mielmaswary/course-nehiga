import { React, useEffect, useState } from "react";

const PlayGround = () => {
  const [text, setText] = useState(localStorage.getItem("text"));
  console.log("renderd");
  const changeHandler = (event) => {
    setText(event.target.value);
    console.log("changehandler");
    localStorage.setItem("text", text);
  };

  //   useEffect(() => {
  //     localStorage.setItem("text", text);
  //   }, [text]);
  return (
    <div>
      <input onChange={changeHandler} type="text" />
      <h2>{text}</h2>
    </div>
  );
};

export default PlayGround;
