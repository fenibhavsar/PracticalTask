import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async Thunks
export const fetchEmployees = createAsyncThunk("employees/fetchEmployees", async () => {
  const response = await fetch("/api/employees");
  return response.json();
});

export const addEmployee = createAsyncThunk("employees/addEmployee", async (employee) => {
  const response = await fetch("/api/employees", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(employee),
  });
  return response.json();
});

export const updateEmployee = createAsyncThunk("employees/updateEmployee", async (employee) => {
  const response = await fetch(`/api/employees/${employee.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(employee),
  });
  return response.json();
});

export const deleteEmployee = createAsyncThunk("employees/deleteEmployee", async (id) => {
  await fetch(`/api/employees/${id}`, { method: "DELETE" });
  return id;
});

// Slice Definition
const employeesSlice = createSlice({
  name: "employees",
  initialState: {
    employees: [],
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.employees = action.payload.employees;
      })
      .addCase(addEmployee.fulfilled, (state, action) => {
        state.employees.push(action.payload.employee);
      })
      .addCase(updateEmployee.fulfilled, (state, action) => {
        const index = state.employees.findIndex((e) => e.id === action.payload.employee.id);
        if (index !== -1) {
          state.employees[index] = action.payload.employee;
        }
      })
      .addCase(deleteEmployee.fulfilled, (state, action) => {
        state.employees = state.employees.filter((e) => e.id !== action.payload);
      });
  },
});

export default employeesSlice.reducer;
