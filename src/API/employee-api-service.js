import axios from "axios";

export const getEmployeeApi = async()=>
    {
    const allempdata= await axios.get("http://localhost:9081/api/viewemp");
    return allempdata;
   }    
   export const getEmployeeById = (id) => axios.get("http://localhost:9081/api/employees/${id}"); // API to get employee by ID
   const REST_API_POST_URL = "http://localhost:9081/api/storeemp";
   export const createEmployee  = (employee) => axios.post(REST_API_POST_URL,employee);
   export const updateEmployee = (employee,id) => axios.put("http://localhost:9081/api/update-employee/"+id,employee);