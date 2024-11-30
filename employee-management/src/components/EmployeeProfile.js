import React from "react";

export const EmployeeProfile = ({ employee, onClose }) => {
  if (!employee) {
    return null; // No employee selected
  }

  return (
    <div className="employee-profile">
      <div className="profile-header">
        <h2>Employee Profile</h2>
        <button onClick={onClose} className="close-button">X</button>
      </div>
      <div className="profile-details">
        <p><strong>ID:</strong> {employee.id}</p>
        <p><strong>Name:</strong> {employee.name}</p>
        <p><strong>Position:</strong> {employee.position}</p>
        <p><strong>Email:</strong> {employee.email || "Not provided"}</p>
        <p><strong>Phone:</strong> {employee.phone || "Not provided"}</p>
        <p><strong>Department:</strong> {employee.department || "Not specified"}</p>
      </div>
    </div>
  );
};
