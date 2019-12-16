import React from "react";
import { Link } from "react-router-dom";

function BubbleLink(props) {
  return (
      <Link id="bubbleLink" to={props.to}>
        <div>
          <h6 id="bubbleText">{props.name}</h6>
        </div>
      </Link>
  );
}

export default BubbleLink;
