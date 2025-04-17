import { useState } from "react";
import PropTypes from "prop-types";
import "./Form.css";

const Form = ({ formData, setFormData, onSubmit }) => {
  const [error, setError] = useState({});

  const validate = () => {
    let tempError = {};

    if (!formData.name.trim()) {
      tempError.name = "Name is required";
    } else if (formData.name.length < 3 || formData.name.length > 50) {
      tempError.name = "Name must be between 3 and 50 characters";
    }

    if (!formData.email) {
      tempError.email = "Email is required";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    ) {
      tempError.email = "Invalid email format";
    }

    if (!formData.password) {
      tempError.password = "Password is required";
    } else if (formData.password.length < 6) {
      tempError.password = "Password must be at least 6 characters";
    }

    if (!formData.startDate) {
      tempError.startDate = "Start Date is required";
    }
    if (!formData.endDate) {
      tempError.endDate = "End Date is required";
    }
    if (!formData.phoneNumber) {
      tempError.phoneNumber = "Phone Number is required";
    } else if (formData.phoneNumber.length < 10) {
      tempError.phoneNumber = "Phone number must be at least 10 digits";
    }

    setError(tempError);
    return Object.keys(tempError).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: "" });
  };

  const handleChangeName = (e) => {
    const value = e.target.value;
    if (/^[a-zA-Z\s'-]*$/.test(value)) {
      setFormData({ ...formData, name: value });
    }
    if (value.length >= 3 && value.length <= 50) {
      setError({ ...error, name: "" });
    }
  };

  const handleChangePhone = (e) => {
    const value = e.target.value;
    if (/^[0-9]*$/.test(value)) {
      setFormData({ ...formData, phoneNumber: value });
    }

    if (value.length >= 10) {
      setError({ ...error, phoneNumber: "" });
    }
  };

  const handleStartDateChange = (e) => {
    const newStartDate = e.target.value;
    setFormData({
      ...formData,
      startDate: newStartDate,
      endDate:
        formData.endDate && formData.endDate < newStartDate
          ? ""
          : formData.endDate,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit();
      setError({});
    }
  };
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-grid">
        <h2>User Form</h2>

        {/* Row 1 */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleChangeName}
              value={formData.name}
            />
            {error.name && <p className="error">{error.name}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              value={formData.email}
            />
            {error.email && <p className="error">{error.email}</p>}
          </div>
        </div>

        {/* Row 2 */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              value={formData.password}
            />
            {error.password && <p className="error">{error.password}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              onChange={handleChangePhone}
              value={formData.phoneNumber}
            />
            {error.phoneNumber && <p className="error">{error.phoneNumber}</p>}
          </div>
        </div>

        {/* Row 3 */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="startDate">Start Date</label>
            <input
              type="date"
              name="startDate"
              id="startDate"
              onChange={handleStartDateChange}
              value={formData.startDate}
            />
            {error.startDate && <p className="error">{error.startDate}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="endDate">End Date</label>
            <input
              type="date"
              name="endDate"
              id="endDate"
              onChange={handleChange}
              value={formData.endDate}
              disabled={!formData.startDate}
              min={formData.startDate}
            />
            {error.endDate && <p className="error">{error.endDate}</p>}
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

Form.propTypes = {
  formData: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    phoneNumber: PropTypes.number,
  }).isRequired,
  setFormData: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
