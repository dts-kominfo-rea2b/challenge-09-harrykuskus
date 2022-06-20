// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import contacts from "../data/contacts.json";
import "./Contact.css";

const Contact = () => {
  return contacts.map((contact) => (
    <div className="card">
      <img className="photo" src={contact.photo} alt="" />
      <ul>
        <li className="name">{contact.name}</li>
        <li className="phone">{contact.phone}</li>
        <li className="email">{contact.email}</li>
      </ul>
    </div>
  ));
};

export default Contact;
