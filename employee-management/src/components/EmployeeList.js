import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees, deleteEmployee } from "../features/employees/employeesSlice";
import { Button } from "react-bootstrap";

export const EmployeeList = ({ onEdit }) => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees.employees);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this employee?");
    if (confirmDelete) {
      dispatch(deleteEmployee(id));
    }
  };

  return (
    <div>
      <h1>Employee List</h1>
      <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Mobile No</th>
            <th>Mobile No</th>
            <th>City</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{employee.mobileNo}</td>
                <td>{employee.city}</td>
                <td>{employee.department}</td>
                <td>
                  <button  style={styles.buttonedit} variant="primary" color="blue" onClick={() => onEdit(employee)}>Edit</button>
                  <button  style={styles.buttondelete}variant="primary" color="red" onClick={() => handleDelete(employee.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No employees found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};


const styles = {
 
  title: {
      textAlign: "center",
      marginBottom: "20px",
      color: "#333",
  },
 
  
  buttonedit: {
      width: "30%",
     
      fontSize: "16px",
      backgroundColor: "green",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
  },
  buttondelete: {
    width: "30%",
   
    fontSize: "16px",
    backgroundColor: "red",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
},
  buttonHover: {
      backgroundColor: "#0056b3",
  },
};