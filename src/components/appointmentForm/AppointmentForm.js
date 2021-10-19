import React from "react";
import {ContactPicker} from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const handleTitleChange = e => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleDateChange = e => {
    e.preventDefault();
    setDate(e.target.value);
  };

  const handleTimeChange = e => {
    e.preventDefault();
    setTime(e.target.value);
  };

  return (
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={handleTitleChange} />
        <input type="date" value={date} min={getTodayString()} onChange={handleDateChange} />
        <input type="time" value={time} onChange={handleTimeChange} />
        <ContactPicker selectedContact={contact} contacts={contacts} setContact={setContact} />
        <input type="submit" value="Add Appointment" />
      </form>
  );
};
