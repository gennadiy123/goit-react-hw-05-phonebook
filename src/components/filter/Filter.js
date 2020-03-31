import React from "react";
import { CSSTransition } from "react-transition-group";
import slide from "../../transitions/slide.module.css";

const Filter = ({ nameFilter, flag }) => (
  <CSSTransition timeout={250} in={flag} classNames={slide} unmountOnExit>
    <div>
      <h2>Find contact by name</h2>
      <input type="text" onChange={nameFilter} />
    </div>
  </CSSTransition>
);

export default Filter;
