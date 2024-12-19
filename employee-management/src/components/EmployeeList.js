import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees, deleteEmployee } from "../features/employees/employeesSlice";

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
    <div style={styles.container}>
      <h1 style={styles.title}>EMPOYEE LIST</h1>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Mobile No.</th>
            <th>City</th>
            <th>Department</th>
            <th>Actions</th>
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
                <td style={styles.actionsCell}>
                  <button
                    style={styles.editButton}
                    onClick={() => onEdit(employee)}
                  >
                    Edit
                  </button>
                  <button
                    style={styles.deleteButton}
                    onClick={() => handleDelete(employee.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" style={styles.noData}>
                No employees found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    // maxWidth: "1000px",
    // margin: "5px auto",
    padding: "2px",
    textAlign: "center",
  },
  title: {
    fontSize: "24px",
    marginBottom: "5px",
    color: "#333",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    margin: "0 auto",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  },
  th: {
    backgroundColor: "#007BFF",
    color: "#fff",
    padding: "10px",
    textAlign: "left",
  },
  td: {
    padding: "10px",
    border: "1px solid #ddd",
    textAlign: "left",
  },
  tr: {
    transition: "background-color 0.3s ease",
  },
  "tr:hover": {
    backgroundColor: "#f9f9f9",
  },
  actionsCell: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
  },
  editButton: {
    padding: "8px 12px",
    backgroundColor: "green",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  deleteButton: {
    padding: "8px 12px",
    backgroundColor: "red",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  noData: {
    padding: "20px",
    color: "#666",
    fontStyle: "italic",
  },
};
