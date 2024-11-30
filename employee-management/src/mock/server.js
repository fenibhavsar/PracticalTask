import { createServer, Model } from "miragejs";

export function makeServer() {
    createServer({
        models: {
            employee: Model,
        },

        seeds(server) {
            server.create("employee", {
                id: 1,
                firstName: "Feni",
                lastName: "Bhavsar",
                email: "feni1211@gmail.com",
                mobileNo: "8128418540",
                city: "Ahmedabad",
                department: "Developer"
            });
            server.create("employee", {
                id: 2,
                firstName: "Rushabh",
                lastName: "Patel",
                email: "rushabh@24gmail.com",
                mobileNo: "9925065614",
                city: "Mahesana",
                department: "Developer"
            });
            server.create("employee", {
                id: 3,
                firstName: "Het",
                lastName: "Bhavsar",
                email: "het.b@26gmail.com",
                mobileNo: "9995065614",
                city: "Ahmedabad",
                department: "Designer"
            });
            server.create("employee", {
                id: 4,
                firstName: "Riya",
                lastName: "Thakkar",
                email: "riya.r@2gmail.com",
                mobileNo: "9000065614",
                city: "Surendrnagar",
                department: "Tester"
            });
            server.create("employee", {
                id: 5,
                firstName: "Richa",
                lastName: "Bhavsar",
                email: "richa.r@gmail.com",
                mobileNo: "9945065632",
                city: "Rajakot",
                department: "Designer"
            });
            server.create("employee", {
                id: 6,
                firstName: "Nikita",
                lastName: "Joshi",
                email: "nikita12@gmail.com",
                mobileNo: "8940065632",
                city: "Ahmedabad",
                department: "Sales"
            });
            server.create("employee", {
                id: 7,
                firstName: "Gaurav",
                lastName: "Gajjar",
                email: "Gaurav@hr.in",
                mobileNo: "7654321908",
                city: "Baroda",
                department: "HR"
            });
            server.create("employee", {
                id: 8,
                firstName: "Krishna",
                lastName: "Patel",
                email: "kri123@gmail.in",
                mobileNo: "7890654321",
                city: "Ahmedabad",
                department: "Sales"
            });
            server.create("employee", {
                id: 9,
                firstName: "Yash",
                lastName: "Patel",
                email: "yash14@gmail.com",
                mobileNo: "9876543201",
                city: "Surat",
                department: "Developer"
            });
            server.create("employee", {
                id: 10,
                firstName: "Molik",
                lastName: "Bhatiya",
                email: "molik@gmail.com",
                mobileNo: "9087654321",
                city: "Rajkot",
                department: "Sales"
            });
           
        },

        routes() {
            this.namespace = "api";

            this.get("/employees", (schema) => schema.employees.all());
            this.post("/employees", (schema, request) => {
                const data = JSON.parse(request.requestBody);
                return schema.employees.create(data);
            });
            this.put("/employees/:id", (schema, request) => {
                const data = JSON.parse(request.requestBody);
                const id = request.params.id;
                return schema.employees.find(id).update(data);
            });
            this.delete("/employees/:id", (schema, request) => {
                const id = request.params.id;
                return schema.employees.find(id).destroy();
            });
        },
    });
}
