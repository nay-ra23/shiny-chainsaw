import React, { useState } from 'react'
import { createEmployee } from './API/employee-api-service';
import { useNavigate } from 'react-router-dom';

const CreateEmp = () => {
  const [empId,setempId] = useState('');
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [emailId, setemailId] = useState('');
 
  const navigator = useNavigate();


  function saveEmployee(e){
    e.preventDefault();
    const employee = {empId,firstName,lastName,emailId}
    console.log(employee);

    createEmployee(employee).then((response) =>{
      console.log(response.data);
      navigator('/ReadEmp');
        
   })

  }
  
  return (
    <div>
     <div className="container">
        <div className="row">
          <div className="card">
            <h2 className="text-center">Add Employee</h2>
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label">Emp Id</label>
                  <input
                    type="text"
                    placeholder="Enter Employee Id"
                    name="empId"
                    value={empId}
                    className="form-control"
                    onChange={(e)=>  setempId(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Emp Name</label>
                  <input
                    type="text"
                    placeholder="Enter Employee Name"
                    name="firstName"
                    value={firstName}
                    className="form-control"
                    onChange={(e)=>  setfirstName(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Emp LastName</label>
                  <input
                    type="text"
                    placeholder="Enter Employee Email"
                    name="lastName"
                    value={lastName}
                    className="form-control"
                    onChange={(e) =>setlastName(e.target.value)  }
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Emp Email</label>
                  <input
                    type="text"
                    placeholder="Enter Employee Email"
                    name="emailId"
                    value={emailId}
                    className="form-control"
                    onChange={(e) => setemailId(e.target.value) }
                  ></input>
                </div>

                <button className="btn btn-success" onClick={saveEmployee}>Submit</button>  
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateEmp