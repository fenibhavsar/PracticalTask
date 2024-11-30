import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee, updateEmployee } from "../features/employees/employeesSlice";

export const EmployeeForm = ({ currentEmployee, clearSelection }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [city, setCity] = useState("");
    const [department, setDepartment] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {
        if (currentEmployee) {
            setFirstName(currentEmployee.firstName || "");
            setLastName(currentEmployee.lastName || "");
            setEmail(currentEmployee.email || "");
            setMobileNo(currentEmployee.mobileNo || "");
            setCity(currentEmployee.city || "");
            setDepartment(currentEmployee.department || "");
        } else {
            setFirstName("");
            setLastName("");
            setEmail("");
            setMobileNo("");
            setCity("");
            setDepartment("");
        }
    }, [currentEmployee]);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Mobile number validation (10-digit only)
        if (!/^\d{10}$/.test(mobileNo)) {
            alert("Mobile number must be exactly 10 digits.");
            return;
        }

        const employeeData = { firstName, lastName, email, mobileNo, city, department };

        if (currentEmployee) {
            dispatch(updateEmployee({ ...currentEmployee, ...employeeData }));
        } else {
            dispatch(addEmployee(employeeData));
            setFirstName(""); // Clear input fields
            setLastName("");
            setEmail("");
            setMobileNo("");
            setCity("");
            setDepartment("");
        }

        clearSelection(); // Clear selected employee state
    };

    return (
        <div style={styles.card}>
            <h1 style={styles.title}>{currentEmployee ? "Update Employee" : "Add Employee"}</h1>
            <form onSubmit={handleSubmit}>
                <div style={styles.inputGroup}>
                    <label>First Name : </label>
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="First Name"
                        required
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label>Last Name : </label>
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Last Name"
                        required
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label>Email : </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label>Mobile No. : </label>
                    <input
                        type="text"
                        value={mobileNo}
                        onChange={(e) => setMobileNo(e.target.value)}
                        placeholder="Mobile No"
                        required
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label>City : </label>
                    <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="City"
                        required
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label>Department : </label>
                    <input
                        type="text"
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        placeholder="Department"
                        required
                    />
                </div>
                <button type="submit" style={styles.button}>{currentEmployee ? "Update" : "Add"} Employee</button>
            </form>
        </div>
    );
};

const styles = {
    card: {
        width: "300px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
        textAlign: "center",
    },
    title: {
        textAlign: "center",
        marginBottom: "20px",
        color: "#333",
    },
    inputGroup: {
        marginBottom: "15px",
    },
    
    button: {
        width: "50%",
        padding: "10px",
        fontSize: "16px",
        backgroundColor: "#007BFF",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    },
    buttonHover: {
        backgroundColor: "#0056b3",
    },
};
