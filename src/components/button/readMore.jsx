import React from "react";
const readMore = props => {
  return (
    <div id="container">
      <div className="buttonContainer">
        <button
          className="learn-more"
          onClick={() => props.props.history.push("/bookDetail/" + props.id)}
        >
          <span className="circle">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text">Read more</span>
        </button>
      </div>
    </div>
  );
};

export default readMore;
