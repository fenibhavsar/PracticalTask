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

        if (!/^\d{10}$/.test(mobileNo)) {
            alert("Mobile number must be exactly 10 digits.");
            return;
        }

        const employeeData = { firstName, lastName, email, mobileNo, city, department };

        if (currentEmployee) {
            dispatch(updateEmployee({ ...currentEmployee, ...employeeData }));
        } else {
            dispatch(addEmployee(employeeData));
            setFirstName("");
            setLastName("");
            setEmail("");
            setMobileNo("");
            setCity("");
            setDepartment("");
        }

        clearSelection();
    };

    return (
        <div style={styles.card}>
            <h1 style={styles.title}>{currentEmployee ? "UPDATE EMPOYEE" : "ADD EMPLOYEE"}</h1>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>First Name:</label>
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="First Name"
                        style={styles.input}
                        required
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Last Name:</label>
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Last Name"
                        style={styles.input}
                        required
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        style={styles.input}
                        required
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Mobile No.:</label>
                    <input
                        type="text"
                        value={mobileNo}
                        onChange={(e) => setMobileNo(e.target.value)}
                        placeholder="Mobile No"
                        style={styles.input}
                        required
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>City:</label>
                    <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="City"
                        style={styles.input}
                        required
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Department:</label>
                    <input
                        type="text"
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        placeholder="Department"
                        style={styles.input}
                        required
                    />
                </div>
                <button
                    type="submit"
                    style={styles.button}
                    onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                    onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
                >
                    {currentEmployee ? "Update" : "Add"} Employee
                </button>
            </form>
        </div>
    );
};

const styles = {
    card: {
        maxWidth: "400px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#f9f9f9",
    },
    title: {
        fontSize: "20px",
        marginBottom: "20px",
        color: "#333",
        textAlign: "center",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "15px",
    },
    inputGroup: {
        display: "flex",
        flexDirection: "column",
    },
    label: {
        fontSize: "14px",
        marginBottom: "5px",
        color: "#555",
    },
    input: {
        padding: "10px",
        fontSize: "14px",
        border: "1px solid #ccc",
        borderRadius: "4px",
    },
    button: {
        padding: "10px 20px",
        fontSize: "16px",
        color: "#fff",
        backgroundColor: "#007BFF",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
    },
    buttonHover: {
        backgroundColor: "#0056b3",
    },
};
