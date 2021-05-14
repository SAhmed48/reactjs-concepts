import React from "react";
import { useFormik } from "formik";

function SimpleForm() {
  const sForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      channel: "",
    },
    onSubmit: (values) => {
      console.log("FORM SUBMISSION", values);
    },
    validate: (values) => {
      let errors = {};
      debugger;
      if (!values.name) {
        errors.name = "Required";
      }
      if (!values.email) {
        errors.email = "Required";
      }
      if (!values.channel) {
        errors.channel = "Required";
      }

      return errors;
    },
  });

  return (
    <div>
      <h3>Simple Form</h3>
      <div>
        <form
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
          onSubmit={sForm.handleSubmit}
        >
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={sForm.handleChange}
            value={sForm.values.name}
            onBlur={sForm.handleBlur}
          />
          {sForm.touched.name && sForm.errors.name ? (
            <div style={{ color: "red" }}>{sForm.errors.name}</div>
          ) : null}

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={sForm.handleChange}
            value={sForm.values.email}
            onBlur={sForm.handleBlur}
          />

          {sForm.touched.email && sForm.errors.email ? (
            <div style={{ color: "red" }}>{sForm.errors.email}</div>
          ) : null}

          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            name="channel"
            onChange={sForm.handleChange}
            value={sForm.values.channel}
            onBlur={sForm.handleBlur}
          />
          {sForm.touched.channel && sForm.errors.channel ? (
            <div style={{ color: "red" }}>{sForm.errors.channel}</div>
          ) : null}

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default SimpleForm;
