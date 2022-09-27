import React, { useState } from "react";
import "./index.css";

const ContactForm = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    natureofbusiness: "",
    contactname: "",
    address: "",
    contactphone: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regexNum =new RegExp("^[0-9]*$");
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.natureofbusiness) {
      errors.natureofbusiness = "business name is required";
    }
    if (!values.contactname) {
      errors.contactname = "contact name is required";
    }
    if (!values.address) {
      errors.address = "address is required";
    }
    if (!values.contactphone) {
      errors.contactphone = "contact phone is required";
    }else if(!regexNum.test(values.contactphone)){
      errors.contactphone="should contain only digits"
    }else if((values.contactphone.length<10) || (values.contactphone.length>10)){
      errors.contactphone="must be 10 digits"
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if(!regexNum.test(values.password)){
      errors.password="should contain only digits"
    }else if((values.password.length<6) || (values.password.length>6)){
      errors.password="must be 6 digits"

    }
    return errors;
  };

  return (
    <>
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="successMsg">Signed in successfully</div>

      ) : (
        // <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
        ""
      )}
      <form className="mt-5 formStyleControl" onSubmit={handleSubmit}>
        <div className="mb-5 formSizeControl">
          <input
            type="text"
            className="form-control bg-transparent border-0 border-bottom rounded-0 border-secondary"
            id="inputContent1"
            placeholder="Your Company Name"
            name="username"
            value={formValues.username}
            onChange={handleChange}
          />
          <p className="errorMsg">{formErrors.username}</p>
        </div>
        <div className="mb-5 formSizeControl">
          <input
            type="text"
            className="form-control bg-transparent border-0 border-bottom rounded-0 border-secondary"
            id="inputContent2"
            placeholder="Nature of Business"
            name="natureofbusiness"
            value={formValues.natureofbusiness}
            onChange={handleChange}
          />
          <p className="errorMsg">{formErrors.natureofbusiness}</p>
        </div>
        <div className="mb-5 d-flex flex-column flex-lg-row formSizeControl">
          <div className="addressInput1">
            <input
              type="text"
              className="form-control bg-transparent border-0 border-bottom rounded-0 border-secondary "
              id="inputContent3"
              placeholder="Address"
              name="address"
              value={formValues.address}
              onChange={handleChange}
            />
            <p className="errorMsg">{formErrors.address}</p>
          </div>
          <div className="addressinput2">
            <input
              type="text"
              className="form-control bg-transparent border-0 border-bottom rounded-0 border-secondary"
              id="inputContent4"
              placeholder="Post Code"
              name="password"
              value={formValues.password}
              onChange={handleChange}
            />
            <p className="errorMsg">{formErrors.password}</p>
          </div>
        </div>
        <div className="mb-5 formSizeControl">
          <input
            type="text"
            className="form-control bg-transparent border-0 border-bottom rounded-0 border-secondary"
            id="inputContent5"
            placeholder="Contact name"
            name="contactname"
            value={formValues.contactname}
            onChange={handleChange}
          />
          <p className="errorMsg">{formErrors.contactname}</p>
        </div>
        <div className="mb-5 formSizeControl">
          <input
            type="text"
            className="form-control bg-transparent border-0 border-bottom rounded-0 border-secondary"
            id="inputContent6"
            placeholder="Contact Phone"
            name="contactphone"
            value={formValues.contactphone}
            onChange={handleChange}
          />
          <p className="errorMsg">{formErrors.contactphone}</p>
        </div>
        <div className="mb-5 formSizeControl">
          <input
            type="email"
            className="form-control bg-transparent border-0 border-bottom rounded-0 border-secondary"
            id="inputContent7"
            placeholder="email@gmail"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
          <p className="errorMsg">{formErrors.email}</p>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="checkAgreement"
          />
          <label className="form-check-label" htmlFor="checkAgreement">
            I want to protect my data by signing an NDA
          </label>
        </div>
        <button type="submit" className="btn btn-success submitBtn w-100">
          SUBMIT
        </button>
      </form>
    </>
  );
};
export default ContactForm;
