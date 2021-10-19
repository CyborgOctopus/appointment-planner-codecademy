import React from "react";

export const ContactPicker = ({ selectedContact, contacts, setContact }) => {
  const handleContactChange = e => {
    e.preventDefault();
    setContact(e.target.value);
  };

  return (
      <select value={selectedContact} onChange={handleContactChange}>
        <option selected="selected">No contact selected</option>
        {contacts.map(contact => <option>{contact.name}</option>)}
      </select>
  );
};
