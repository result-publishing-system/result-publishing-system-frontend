import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

export default function Table() {
    const [students, setStudents] = useState([]);
    useEffect(() => {
        getStudents();
    }, []);
    
    const getStudents = async () => {
        const response = await fetch("http://localhost:3000/api/student/fetchallstudents", {
            method: 'GET',
            headers: {
                'content-Type': 'application/json',
                'auth-token': localStorage.token
            },
        })
        const json = await response.json();
        setStudents(json)
    }
    return (
    <div className="container py-4">
        <table className="table">
        <thead className="thead-light">
            <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Branch</th>
            </tr>
        </thead>
        <tbody>
            {students && students.map((element, index) => {
                return (
                    <tr key = {index}>
                        <th scope="row">{index}</th>
                        <td><Link to='/student' state={element._id} >{element.name.firstName + ' ' + element.name.lastName}</Link></td>
                        <td>{element.email}</td>
                        <td>{element.phone_no}</td>
                        <td>{element.branch}</td>
                    </tr>
                )
            })}
        </tbody>
        </table>
    </div>
    );
}
