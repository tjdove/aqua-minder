"use client";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useFormik } from "formik";

export const UserForm = () => {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    addr1: "",
    addr2: "",
    state: "",
    zip: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Submit the user data to the server
    // ...
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        placeholder="First name"
        value={formData.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last name"
        value={formData.lastName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="addr1"
        placeholder="Address"
        value={formData.addr1}
        onChange={handleChange}
      />
      <input
        type="text"
        name="addr2"
        placeholder="Address 2"
        value={formData.addr2}
        onChange={handleChange}
      />
      <input
        type="text"
        name="state"
        placeholder="State"
        value={formData.state}
        onChange={handleChange}
      />
      <input
        type="text"
        name="zip"
        placeholder="Zip code"
        value={formData.zip}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

// export default UserForm;
