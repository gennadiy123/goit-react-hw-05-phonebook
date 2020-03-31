import React from "react";
import ContactListItem from "./contactListItem/ContactListItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styles from "./ContactList.module.css";
import slide from "../../transitions/contacts.module.css";

const ContactList = ({ contacts, deleteContact }) => (
  <>
    <TransitionGroup component="ul" className={styles.list}>
      {contacts.map(contact => (
        <CSSTransition key={contact.id} timeout={2500} classNames={slide} unmountOnExit>
          <ContactListItem
            contact={contact}
            key={contact.id}
            deleteContact={deleteContact}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  </>
);

export default ContactList;
