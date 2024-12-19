import React, { useState } from "react";
import { EmployeeList } from "../../components/EmployeeList";
import { EmployeeForm } from "../../components/EmployeeForm";

export const Employees = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleEdit = (employee) => {
    setSelectedEmployee(employee);
  };

  const clearSelection = () => {
    setSelectedEmployee(null);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>EMPLOYEE MANAGEMENT</h1>
      <div style={styles.content}>
        <div style={styles.formContainer}>
          <EmployeeForm
            currentEmployee={selectedEmployee}
            clearSelection={clearSelection}
          />
        </div>
        <div style={styles.listContainer}>
          <EmployeeList onEdit={handleEdit} />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    backgroundColor: "#f5f5f5",
    minHeight: "100vh",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: "20px",
  },
  content: {
    display: "flex",
    gap: "20px",
    width: "100%",
    maxWidth: "1200px",
    alignItems: "flex-start",
  },
  formContainer: {
    flex: "1",
    maxWidth: "400px",
  },
  listContainer: {
    flex: "2",
  },
};
