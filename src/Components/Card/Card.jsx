import React from "react";
import "./Card.css"
import { Link } from "react-router-dom";

function Card({ title, cover, id }) {
  return (
    <Link className="card" to={"/logement/" + id}>
      <div className="card__content">
        <h3 className="card__content__title">{title}</h3>
      </div>
      <img className="card__image" src={cover} alt={title} />
    </Link>
  );
}

export default Card;