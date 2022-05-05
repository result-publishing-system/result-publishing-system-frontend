import React, { useState } from "react";
import './UserForm.css';
const UserForm = ()=>{
    const [enrollmentNumber ,setEnrollmentNumber] = useState("");
    const [otp,setOtp] = useState("");

    const [allEntry,setAllEntry] = useState([]);
    const submitForm = (e)=> {
        e.preventDefault();
        const newEntry =  {enrollmentNumber:enrollmentNumber , otp:otp};
        setAllEntry([...allEntry, newEntry]);
        console.log(allEntry);
    }
    return(
    <>
      <body>

        <div class="background">
             <div class="shape"></div>
             <div class="shape"></div>
        </div>
       
        <form action="" onSubmit={submitForm}>
          
          <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Enrollment Number</label>
              <input type="email" className="form-control" id="exampleInputEmail1" autoComplete="off" placeholder="Enter Enrollment Number"
                    value={enrollmentNumber}
                    onChange={(e) => setEnrollmentNumber(e.target.value)}
                    />
          </div>

          <div className="mb-3">
              <button type="submit" className="btn btn-primary">Get Otp</button>
          </div>
         
          <div className="mb-3">
               <label htmlFor="exampleInputPassword1" className="form-label">Enter OTP</label>
               <input type="password" className="form-control" id="exampleInputPassword1" autoComplete="off" placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                 />
          </div>
          <button type="submit" className="btn btn-primary">Get Result</button>
        </form>
        
      </body>
    </>
   )
 }
 export default UserForm