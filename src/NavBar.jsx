import React from 'react'
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <div>
      <h3></h3>
      <table border={1} width={'100%'}>
        <tr>
          <td>
            <Link to="/">Home</Link> {/* Use Link instead of <a> */}
          </td>
          <td>
            <Link to="/CreateEmp">CreateEmp</Link> {/* Use Link instead of <a> */}
          </td>
          <td>
            <Link to="/ReadEmp">ReadEmp</Link>
          </td>
          <td>
            {/* Add any other links as necessary */}
          </td>
          <td>
            {/* Add any other links as necessary */}
          </td>
        </tr>
      </table>
    </div>
  )
}

export default NavBar