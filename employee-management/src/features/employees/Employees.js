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
        <div>

            <h1>Employee Management</h1>
            <EmployeeForm currentEmployee={selectedEmployee} clearSelection={clearSelection} />

            <EmployeeList onEdit={handleEdit} />
        </div>
    );
};
