// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "./Contact.css";

const Contact = ({ data }) => {
  return (
    <div className="card">
      <img className="photo" src={data.photo} alt="" />
      <ul>
        <li className="name">{data.name}</li>
        <li className="phone">{data.phone}</li>
        <li className="email">{data.email}</li>
      </ul>
    </div>
  );
};

export default Contact;
