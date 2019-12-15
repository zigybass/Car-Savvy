import React from "react";

function BubbleLink(props) {
  return (
    <React.Fragment>
      <div id="bubbleLink">
        <div>
          <h6 id="bubbleText">{props.name} </h6>
        </div>
      </div>
    </React.Fragment>
  );
}

export default BubbleLink;
