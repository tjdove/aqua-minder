"use client";

import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

export const UserForm = () => {
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    addr1: Yup.string().required("Address is required"),
    addr2: Yup.string(),
    state: Yup.string().required("State is required"),
    zip: Yup.string().required("Zip code is required"),
  });

  const onSubmit = async (values) => {
    // Submit the user data to the server using a Next.js API endpoint
    const response = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (response.status === 201) {
      // The user account was created successfully
      // Redirect to the user's account page
    } else {
      // An error occurred while creating the user account
      // Display an error message to the user
    }
  };

  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      initialValues={{
        firstName: "",
        lastName: "",
        addr1: "",
        addr2: "",
        state: "",
        zip: "",
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={values.firstName}
            onChange={handleChange}
            error={errors.firstName && touched.firstName}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={values.lastName}
            onChange={handleChange}
            error={errors.lastName && touched.lastName}
          />
          <input
            type="text"
            name="addr1"
            placeholder="Address"
            value={values.addr1}
            onChange={handleChange}
            error={errors.addr1 && touched.addr1}
          />
          <input
            type="text"
            name="addr2"
            placeholder="Address 2"
            value={values.addr2}
            onChange={handleChange}
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={values.state}
            onChange={handleChange}
            error={errors.state && touched.state}
          />
          <input
            type="text"
            name="zip"
            placeholder="Zip code"
            value={values.zip}
            onChange={handleChange}
            error={errors.zip && touched.zip}
          />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
};

// export default UserForm;
