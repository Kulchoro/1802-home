import React from "react";

function Example(props) {
  return (
    <div>
      <h1>{props.title}</h1>

      <button
        onClick={() => {
          props.changeTitle("Goodbye");
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default Example;
