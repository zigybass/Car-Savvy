import React from "react";

function Button(props) {
  return (
        <button
          id={props.id}
          className="btn waves-effect yellow darken-1 black-text waves-dark"
        >
          {props.name}
        </button>
  );
}

export default Button;
