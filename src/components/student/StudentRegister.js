import React from 'react'
import DatePicker from 'react-date-picker';
import { useState } from 'react'

function StudentRegister() {
    const [value, setValue] = useState(new Date());
    const [details, setDetails] = useState({firstname: "", lastname: "", enrollment: "", contact: "", department: "", branch: "", dob: Date(), email: ""})
    const onChange = (e)=>{
        setDetails({...details, [e.target.name]: e.target.value})
    }
    const handlesubmit = async (e) => {
        e.preventDefault()
        let data = details
        data.dob = value
        const response = await fetch("http://localhost:3000/api/student/create", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.token
            },
            body: JSON.stringify(data)
        });
    }
    return (
    <div className="container my-5">
        <form onSubmit={handlesubmit}>
            <div className="row">
                <div className="col">
                <label htmlFor="firstname">First Name</label>
                <input type="text" name='firstname' className="form-control" value={details.firstname} onChange={onChange} id='firstname' placeholder="First name"/>
                </div>
                <div className="col">
                <label htmlFor="lastname">Last Name</label>
                <input type="text" name='lastname' className="form-control" onChange={onChange} value={details.lastname} id='lastname' placeholder="Last name"/>
                </div>
            </div>
            <div className="row my-3">
                <div className="col">
                    <label htmlFor="enroll">Enrollment No.</label>
                    <input type="text" name='enrollment' className="form-control" onChange={onChange} value={details.enrollment} id='enroll' placeholder="Enrollment No."/>
                </div>
                <div className="col">
                    <label htmlFor="contact">Contact No.</label>
                    <input type="text" name='contact' className="form-control" onChange={onChange} value={details.contact} id='contact' placeholder="Contact No."/>
                </div>
                <div className="col">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name='email' className="form-control" onChange={onChange} value={details.email} id='email' placeholder="Email"/>
                </div>
            </div>
            <div className="row my-3">
                <div className="col">
                    <label htmlFor="branch">Branch</label>
                    <input type="text" name='branch' className="form-control" onChange={onChange} value={details.branch} id='branch' placeholder="Branch"/>
                </div>
                <div className="col">
                    <label htmlFor="department">Department</label>
                    <input type="text" name='department' className="form-control" onChange={onChange} value={details.department} id='department' placeholder="Department"/>
                </div>
                <div className="col my-4">
                    <label htmlFor="dob">Date of Birth</label>
                    <DatePicker onChange={setValue} value={value}/>
                </div>
            </div>
            <div className="text-center">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
    )
}

export default StudentRegister