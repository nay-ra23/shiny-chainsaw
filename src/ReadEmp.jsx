import React, { useEffect, useState } from 'react'
import { getEmployeeApi } from './API/employee-api-service';
import { useNavigate, useParams } from 'react-router-dom';

const ReadEmp = () => {
  const navigator = useNavigate();
  const {id} = useParams();
  const [empData,setEmpData]=useState([]);
  const getData=async()=>{
    const empdata = await getEmployeeApi();
    //set data to empData
    setEmpData(empdata.data);
  };
  useEffect(()=>{
    //call
    getData();
  },[])
console.log('data should be:',empData);

function updateEmployee(id){
  navigator("/edit-employee/"+id);
}

  return (
    <div>
      <table>
    <thead>
    <tr class="table-headers">
      <th>Id</th>
      <th>empId</th>
      <th>firstName</th>
      <th>lastName</th>
      <th>emailId</th>
    </tr>
    </thead>
    <tbody>
      {empData.map((data,index)=>(
      <tr>
        <td>{data.id}</td>
        <td>{data.empId}</td>
        <td>{data.firstName}</td>
        <td>{data.lastName}</td>
        <td>{data.emailId}</td>
        <td>
        <button className="btn btn-info" onClick={() => updateEmployee(data.id)}>Update</button>
        <button
                    className="btn btn-danger ml-2"
                    onClick={() => deleteEmployee(data.id)} // Delete employee
                  >
                    Delete
                  </button>
  
        </td>
      </tr>
      ))
  
      }
      
    </tbody>
  </table></div>
  )
}

export default ReadEmp