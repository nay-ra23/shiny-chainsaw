import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import ReadEmp from './ReadEmp';
import CreateEmp from './CreateEmp';
import UpdateEmp from './UpdateEmp';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello</h1>

      <Router>
      <div>
        <NavBar/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CreateEmp" element={<CreateEmp />} />
          <Route path="/ReadEmp" element={<ReadEmp />} />
          <Route path="/UpdateEmp" element={<UpdateEmp />} />
          
          <Route path="/employees" element={<ReadEmp/>} /> 
          <Route path="/edit-employee/:id" element={<UpdateEmp/>} />  
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App