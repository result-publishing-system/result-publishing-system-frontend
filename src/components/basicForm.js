import React, { useState } from "react";
const BasicForm = ()=>{
    const [email ,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const [allEntry,setAllEntry] = useState([]);
    const submitForm = (e)=> {
        e.preventDefault();
        const newEntry =  {email:email , password:password};
        setAllEntry([...allEntry, newEntry]);
        console.log(allEntry);
    }
    return(
       <>
       <div className="container ">
       <form action="" onSubmit={submitForm}>
         
         <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" autoComplete="off" placeholder="Email"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   />
         </div>
        
        <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1" autoComplete="off" placeholder="Password"
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}
                />
    </div>
    <button type="submit" className="btn btn-primary">Login</button>
         </form>
       </div>
       
       </>
    )
}
export default BasicForm