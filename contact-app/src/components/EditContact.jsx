import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const EditContact = ({ updateContactHandler }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Initialize state with contact passed from location.state
  const [contact, setContact] = useState({
    id: "",
    name: "",
    email: "",
  });

  // Use effect to populate the form with the existing contact data
  useEffect(() => {
    if (location.state && location.state.contact) {
      const { id, name, email } = location.state.contact;
      setContact({ id, name, email });
    }
  }, [location.state]);

  // Handle form submission for updating contact
  const update = (e) => {
    e.preventDefault();
    if (contact.name === "" || contact.email === "") {
      alert("Empty fields!!");
      return;
    }

    // Call the handler to update the contact
    updateContactHandler(contact);

    // After updating, clear the form and navigate back to the contact list
    setContact({ name: "", email: "" });
    navigate("/");
  };

  return (
    <div className="ui main">
      <h2>Edit Contact</h2>
      <form className="ui form" onSubmit={update}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={contact.name}
            onChange={(e) => setContact({ ...contact, name: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={contact.email}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
          />
        </div>
        <button className="ui button blue">Update</button>
      </form>
    </div>
  );
};

export default EditContact;
