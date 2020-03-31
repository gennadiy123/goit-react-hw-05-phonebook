import React from "react";
import styles from "./Alert.module.css";
import { CSSTransition } from "react-transition-group";
import yes from '../../transitions/yes.module.css'


const Alert = ({submitContact, active}) => (
  <CSSTransition timeout={250} in={active} classNames={yes} transition-duration={1000} unmountOnExit>
    <div className={styles.alert} onChange={submitContact}>
      <p className={styles.text} >Name already taken!</p>
    </div>
   </CSSTransition>
);

export default Alert;
