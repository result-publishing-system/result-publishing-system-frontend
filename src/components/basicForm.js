import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'

const BasicForm = (props)=>{
    const [credentials, setCredentials] = useState({email: "", password: ""})
    let navigate = useNavigate()
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(credentials)
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: credentials.email, password: credentials.password})
      })
      const json = await response.json()
      console.log(json)
      if (json.success) {
        localStorage.setItem('token', json.authToken)
        // navigate.push('/')
        navigate('/dashboard')
      } else {
        alert('Invalid creadentials')
      }
    }
    const onchange = (e)=>{
      setCredentials({...credentials, [e.target.name]: e.target.value})
  }
    return(
       <>
       <div className="container ">
       <form action="" onSubmit={handleSubmit}>
         
         <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" name="email" id="email" autoComplete="off" placeholder="Email"
                   value={credentials.email}
                   onChange={onchange}
                   />
         </div>
        
        <div className="mb-3">
      <label htmlFor="password" className="form-label">Password</label>
      <input type="password" className="form-control" name="password" id="password" autoComplete="off" placeholder="Password"
                   value={credentials.password}
                   onChange={onchange}
                />
    </div>
    <button type="submit" className="btn btn-primary">Login</button>
         </form>
       </div>
       
       </>
    )
}
export default BasicForm