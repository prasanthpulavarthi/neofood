import React, { useState } from 'react'
import "./index.css"


const ContactForm=()=> {
    const initialValues = { username: "", email: "", password: "",natureofbusiness:"" };
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
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if(!values.natureofbusiness){
        errors.natureofbusiness="business name is required"
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <>
     {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
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
          <p>{formErrors.username}</p>

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
                <p>{formErrors.natureofbusiness}</p>
              </div>
              <div className="mb-5 d-flex flex-column flex-lg-row formSizeControl">
                <input
                  type="text"
                  className="form-control bg-transparent border-0 border-bottom rounded-0 border-secondary addressInput1"
                  id="inputContent3"
                  placeholder="Address"
                />

                <input
                  type="text"
                  className="form-control bg-transparent border-0 border-bottom rounded-0 border-secondary addressInput2"
                  id="inputContent4"
                  placeholder="Post Code"
                  name="password"
                  value={formValues.password}

                  onChange={handleChange}
                />
          <p>{formErrors.password}</p>

              </div>
              <div className="mb-5 formSizeControl">
                <input
                  type="text"
                  className="form-control bg-transparent border-0 border-bottom rounded-0 border-secondary"
                  id="inputContent5"
                  placeholder="Contact name"
                />
              </div>
              <div className="mb-5 formSizeControl">
                <input
                  type="text"
                  className="form-control bg-transparent border-0 border-bottom rounded-0 border-secondary"
                  id="inputContent6"
                  placeholder="Contact Phone"
                />
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
          <p>{formErrors.email}</p>

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
  )
}
export default ContactForm;
