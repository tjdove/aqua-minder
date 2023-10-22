// import React from "react";
// import { Formik } from "formik";
import * as Yup from "yup";
import { useFormik } from "formik";

export const UserForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      addr1: "",
      addr2: "",
      state: "",
      zip: "",
    },

    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(20, "First name must be 20 characters or less.")
        .required("First Name is required"),
      lastName: Yup.string()
        .max(20, "Last name must be 20 characters or less.")
        .required("Last Name is required"),
      addr1: Yup.string()
        .max(20, "Address must be 20 characters or less.")
        .required("Address is required"),
      state: Yup.string()
        .max(20, "State must be 2 characters or less.")
        .required("State is required"),
      zip: Yup.string()
        .max(20, "Zip must be 10 characters or less.")
        .required("Zip is required"),
    }),
    //Submit form
    onSubmit: (values) => {
      console.log(values);
      //router.push({ pathname: "/success", query: values });
    },
  });
  // console.log("Test!");

  // console.log(formik.errors);
  return (
    <form onSubmit={formik.handleSubmit}>
      <label
        className={`block pb-2 ${
          formik.touched.firstName && formik.errors.firstName
            ? "text-red-400"
            : ""
        }`}
        htmlFor="firstName"
      >
        {formik.touched.firstName && formik.errors.firstName
          ? formik.errors.firstName
          : "First Name"}
      </label>
      <input
        type="text"
        name="firstName"
        placeholder="First name"
        value={formik.values.firstName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <label
        className={`block pb-2 ${
          formik.touched.lastName && formik.errors.lastName
            ? "text-red-400"
            : ""
        }`}
        htmlFor="lastName"
      >
        {formik.touched.lastName && formik.errors.lastName
          ? formik.errors.lastName
          : "Last Name"}
      </label>
      <input
        type="text"
        name="lastName"
        placeholder="Last name"
        value={formik.values.lastName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <label
        className={`block pb-2 ${
          formik.touched.addr1 && formik.errors.addr1 ? "text-red-400" : ""
        }`}
        htmlFor="addr1"
      >
        {formik.touched.addr1 && formik.errors.addr1
          ? formik.errors.addr1
          : "Address"}
      </label>
      <input
        type="text"
        name="addr1"
        placeholder="Address"
        value={formik.values.addr1}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <label className="block pb-2" htmlFor="addr2">
        Address:
      </label>
      <input
        type="text"
        name="addr2"
        placeholder="Address 2"
        value={formik.values.addr2}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <label
        className={`block pb-2 ${
          formik.touched.state && formik.errors.state ? "text-red-400" : ""
        }`}
        htmlFor="state"
      >
        {formik.touched.state && formik.errors.state
          ? formik.errors.state
          : "State"}
      </label>
      <input
        type="text"
        name="state"
        placeholder="State"
        value={formik.values.state}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <label
        className={`block pb-2 ${
          formik.touched.zip && formik.errors.zip ? "text-red-400" : ""
        }`}
        htmlFor="zip"
      >
        {formik.touched.zip && formik.errors.zip ? formik.errors.zip : "Zip"}
      </label>
      <input
        type="text"
        name="zip"
        placeholder="Zip code"
        value={formik.values.zip}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

// export default UserForm;
