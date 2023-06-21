import React, { useState } from "https://cdn.skypack.dev/react@17.0.1";
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

const InputField = ({ label, value, onChange, error }) => (
  <div className="flex flex-col items-start">
    <label htmlFor={label}>{label}</label>
    <input
      style={{ border: "1px solid black", marginRight: "15px" }}
      className="border-[1px] border-[#B7B7B7] rounded-full px-3 py-1 text-lg"
      type="text"
      name={label}
      id={label}
      value={value}
      onChange={onChange}
      required
    />
    {error && <p className="text-red-500">{error}</p>}
  </div>
);

const App = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: ""
  });

  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!/^[A-Za-z]+$/.test(formData.firstName)) {
      errors.firstName = "Invalid firstname";
    }

    if (!/^[A-Za-z]+$/.test(formData.lastName)) {
      errors.lastName = "Invalid lastname";
    }

    if (
      !/^(?=.*[a-zA-Z0-9])(?!.*[. _])(?=.*[!@#$%^&*()_+|?~]).{5,30}$/.test(
        formData.username
      )
    ) {
      errors.username =
        "Username must be 5 to 30 characters long and can contain alphanumeric characters and certain special characters.";
    }

    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+|?~]).{7,16}$/.test(
        formData.password
      )
    ) {
      errors.password =
        "Password must be 7 to 16 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Form submitted successfully!");
    } else {
      alert("Please fill in all fields and fix the form errors");
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="gap-y-5 flex flex-col items-center">
        <h1 className="text-2xl font-bold text-center">SignUp</h1>
        <form onSubmit={handleSubmit}>
          <div className="gap-y-5 px-5 flex flex-col items-center">
            <div className="flex flex-row items-center justify-between">
              <InputField
                label="Firstname"
                value={formData.firstName}
                onChange={handleChange}
                error={formErrors.firstName}
              />
              <InputField
                label="Lastname"
                value={formData.lastName}
                onChange={handleChange}
                error={formErrors.lastName}
              />
            </div>
            <div className="flex flex-row justify-between items-center">
              <InputField
                label="Username"
                value={formData.username}
                onChange={handleChange}
                error={formErrors.username}
              />
              <InputField
                label="Password"
                value={formData.password}
                onChange={handleChange}
                error={formErrors.password}
                type="password"
              />
            </div>
            <button
              style={{ border: "1px solid black" }}
              type="submit"
              className="border-[1px] border-[#B7B7B7] rounded-full px-3 py-1 text-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
