import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router";



function Profile(props) {
    const [details, setDetails] = useState({})
    let data = useLocation()
    let response
    const fetchStudentData = async () => {
      response = await fetch(`http://localhost:3000/api/student/get/${data.state}`, {
        method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.token
            },
        }
      )
      response = await response.json()
      setDetails(response)
      console.log(details)
    }
  
    useEffect(() => {
      fetchStudentData()
    },[])
  return (
    <div className="container my-5">
        <form>
            <div className="row">
                <div className="col">
                <label htmlFor="firstname">First Name</label>
                <input type="text" name='firstname' className="form-control" value={details.name.firstName} id='firstname' placeholder="First name"/>
                </div>
                <div className="col">
                <label htmlFor="lastname">Last Name</label>
                <input type="text" name='lastname' className="form-control" value={details.name.lastName} id='lastname' placeholder="Last name"/>
                </div>
            </div>
            <div className="row my-3">
                <div className="col">
                    <label htmlFor="enroll">Enrollment No.</label>
                    <input type="text" name='enrollment' className="form-control" value={details.enroll_no} id='enroll' placeholder="Enrollment No."/>
                </div>
                <div className="col">
                    <label htmlFor="contact">Contact No.</label>
                    <input type="text" name='contact' className="form-control" value={details.phone_no} id='contact' placeholder="Contact No."/>
                </div>
                <div className="col">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name='email' className="form-control" value={details.email} id='email' placeholder="Email"/>
                </div>
            </div>
            <div className="row my-3">
                <div className="col">
                    <label htmlFor="branch">Branch</label>
                    <input type="text" name='branch' className="form-control" value={details.branch} id='branch' placeholder="Branch"/>
                </div>
                <div className="col">
                    <label htmlFor="department">Department</label>
                    <input type="text" name='department' className="form-control" value={details.department} id='department' placeholder="Department"/>
                </div>
            </div>
            <div className="text-center">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Profile