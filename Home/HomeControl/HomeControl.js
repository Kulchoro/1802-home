import React from "react";

function Control(props) {
  return (
    <div className="Controls">
      <input
        type="color"
        value={props.color1}
        onChange={event => props.changeColor1(event.target.value)}
      />
      <input
        type="color"
        value={props.color2}
        onChange={event => props.changeColor2(event.target.value)}
      />
      <input
        type="color"
        value={props.color3}
        onChange={event => props.changeColor3(event.target.value)}
      />
    </div>
  );
}

export default Control;
