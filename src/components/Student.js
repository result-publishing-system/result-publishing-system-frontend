import React, { useState } from "react";

let semesterNo = [1, 2, 3, 4, 5, 6, 7, 8]

let students = {
    "name": {
        "firstName": "kunal",
        "lastName": "rohitas"
    },
    "_id": "62724c21969c032b054d9c8e",
    "email": "kunal@email.com",
    "enroll_no": "0901CS191052",
    "phone_no": "1234567890",
    "dob": "2022-05-04T09:49:21.239Z",
    "branch": "Computer Science and Engineering",
    "department": "CSE",
    "subjects": [
        {
            "semester": 1,
            "subjectName": "basic_computer_engineering",
            "marks": 54
        },
        {
            "semester": 1,
            "subjectName": "basic_mechanical_engineering",
            "marks": 32
        },
        {
            "semester": 1,
            "subjectName": "engineering_physics",
            "marks": 88
        },
        {
            "semester": 1,
            "subjectName": "basic_civil_engineering",
            "marks": 75
        },
        {
            "semester": 1,
            "subjectName": "EEES",
            "marks": 92
        },
        {
            "semester": 2,
            "subjectName": "basic_civil_engineering",
            "marks": 75
        },
        {
            "semester": 2,
            "subjectName": "EEES",
            "marks": 92
        }
    ],
    "__v": 0
}


const Student = ()=>{
    const [semester ,setSemester] = useState("");
    const [subject,setSubject] = useState("");
    const [marks,setMarks] = useState("");

    const [allEntry,setAllEntry] = useState([]);
    const submitForm = (e)=> {
        e.preventDefault();
        const newEntry =  {semester:semester , subject:subject , marks:marks};
        setAllEntry([...allEntry, newEntry]);
        console.log(semester, subject, marks)
    }

    return(
        <>
        <div className="container ">
        <form action="" onSubmit={submitForm}>
          
          <div className="text-center">
              <h3>Enter Student Marks</h3>
          </div>
          <div className="mb-3">
           <label htmlFor="exampleInputSemester1" className="form-label">Semester</label>
           <select name="semester" id="semester" className="form-control" onChange={(e) => setSemester(e.target.value)} >
            {
                semesterNo.map((obj, idx) => {
                    return(<option key={idx} value = {obj}>{obj}</option>)
                })
            }
           </select>
          </div>
         
         <div className="mb-3">
              <label htmlFor="exampleInputSubject1" className="form-label">Subject</label>
             <select name="subject" id="subject" className="form-control" onChange={(e) => setSubject(e.target.value)}>
             {
                students.subjects.map((obj, idx) => {
                    if (obj.semester == semester) {
                        return(<option key={idx} value = {obj.subjectName}>{obj.subjectName}</option>)
                    }
                })
            }
             </select>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputMarks1" className="form-label">Enter Marks</label>
          <input type="number" className="form-control" id="InputMarks" autoComplete="off" placeholder="Enter Marks" min="0" max="100"
                   value={marks}
                   onChange={(e) => setMarks(e.target.value)}
                   />
         </div>
           <button type="submit" className="btn btn-primary">Update</button>
        </form>
        </div>
        
        </>
     )
}

export default Student