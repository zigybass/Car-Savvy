import React from "react";

function Button(props) {
  return (
        <button
          className="btn waves-effect yellow darken-1 black-text waves-dark"
          type="submit"
          name="action"
        >
          {props.name}
        </button>
  );
}

export default Button;
