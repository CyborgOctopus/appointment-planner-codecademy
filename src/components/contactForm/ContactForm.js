import React from "react";

export const ContactForm = ({
    name,
    setName,
    phone,
    setPhone,
    email,
    setEmail,
    handleSubmit
}) => {
    const handleNameChange = e => {
        e.preventDefault();
        setName(e.target.value);
    };

    const handlePhoneChange = e => {
        e.preventDefault();
        setPhone(e.target.value);
    };

    const handleEmailChange = e => {
        e.preventDefault();
        setEmail(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={handleNameChange} />
            <input type="tel" value={phone} pattern="^[2-9]\d{2}-\d{3}-\d{4}$" onChange={handlePhoneChange} />
            <input type="email" value={email} onChange={handleEmailChange} />
            <input type="submit" value="Add Contact" />
        </form>
    );
};
