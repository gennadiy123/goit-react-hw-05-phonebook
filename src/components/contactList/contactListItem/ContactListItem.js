import React from "react";
import styles from "./ContactListItem.module.css";

const ContactListItem = ({ contact: { name, number, id }, deleteContact }) => {
  return (
    <div className={styles.box}>
      <li className={styles.contact}>
        <span>{name}, </span>
        <span>{number}</span>
        <button onClick={deleteContact} type="button" id={id} className={styles.buttonClass}>
          Delete contact
        </button>
      </li>
    </div>
  );
};

export default ContactListItem;
