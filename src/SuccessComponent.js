// src/SuccessComponent.js
import React from "react";
import { useLocation } from "react-router-dom";

const SuccessComponent = () => {
  const location = useLocation();
  const { state } = location;
  const { formData } = state || {};

  return (
    <div>
      <h1>Form Submitted Successfully</h1>
      {formData && (
        <div>
          <p>First Name: {formData.firstName}</p>
          <p>Last Name: {formData.lastName}</p>
          <p>Username: {formData.username}</p>
          <p>Email: {formData.email}</p>
          <p>Phone No.: {formData.phoneNo}</p>
          <p>Country: {formData.country}</p>
          <p>City: {formData.city}</p>
          <p>Pan No.: {formData.panNo}</p>
          <p>Aadhar No.: {formData.aadharNo}</p>
        </div>
      )}
    </div>
  );
};

export default SuccessComponent;
