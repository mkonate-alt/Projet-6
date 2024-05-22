import React from "react";
import "./Stars.css";

function Stars({ rating }) {
const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<span className="star star--full" key={i}>
        <img className="star__icone" src="/icone_rating.svg" alt="icone_rating" />
      </span>);
    } else {
      stars.push(<span className="star star--empty" key={i}>
        <img className="star__icone" src="/icone_rating_empty.svg" alt="icone_rating"/>
      </span>);
    }
  }

  return (
    <div className="stars">
      {stars}
    </div>
  );
}

export default Stars;