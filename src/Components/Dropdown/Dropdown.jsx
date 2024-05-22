import React, { useState } from "react";
import "./Dropdown.css";

function Dropdown(props) {
  // Utiliser un état pour gérer l'ouverture/fermeture du menu déroulant
  const [open, setOpen] = useState(false);

  // Créer une fonction pour basculer l'état du menu déroulant
  function toggleDropdown() {
    setOpen((prevOpen) => !prevOpen);
  }

  return (
    <div className="dropdown">
      <div className={"dropdown__button dropdown__button--" + props.page} onClick={toggleDropdown}>
        {props.title}
        <img
          className={`dropdown__button__arrow dropdown__button__arrow--${props.page} dropdown__button__arrow--${open ? "open" : "close"}`}
          src="/icone_dropdown.svg"
          alt="icone_dropdown"
        />
      </div>
      <ul className={`dropdown__list dropdown__list--${open ? "open" : "close"}`}>
        {Array.isArray(props.content) ? (
          props.content.map((item, index) => (
            <li className={"dropdown__list__item dropdown__list__item--"+props.page} key={index}>
              {item}
            </li>
          ))
        ) : (
          <li className={"dropdown__list__item dropdown__list__item--"+props.page}>{props.content}</li>
        )}
      </ul>
    </div>
  );
}

export default Dropdown;