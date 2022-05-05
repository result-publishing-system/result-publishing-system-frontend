import React, { useState } from "react";

var semesterObject = {
    "1": {
        "Chemistry": [],
        "ED": [],
        "English": []      
    },
    "2": {
        "Physics": [],
        "Mechanical": [],
        "Civil": []      
    },
    "3": {
        "Data Structure": [],
        "CSS": [],
        "JavaScript": []      
    },
    "4": {
        "HTML": [],
        "CSS": [],
        "JavaScript": []      
    },
    "5": {
        "HTML": [],
        "CSS": [],
        "JavaScript": []      
    },
    "6": {
        "HTML": [],
        "CSS": [],
        "JavaScript": []      
    },
    "7": {
        "HTML": [],
        "CSS": [],
        "JavaScript": []      
    },
    "8": {
        "HTML": [],
        "CSS": [],
        "JavaScript": []      
    }
  }
  window.onload = function() {
    var semesterSel = document.getElementById("semester");
    var subjectSel = document.getElementById("subject");
    for (var x in semesterObject) {
        semesterSel.options[semesterSel.options.length] = new Option(x, x);
    }
    semesterSel.onchange = function() {
      
      subjectSel.length = 1;
      
      for (var y in semesterObject[this.value]) {
        subjectSel.options[subjectSel.options.length] = new Option(y, y);
      }
    }
//     subjectSel.onchange = function() {
//       
//       //display correct values
//       var z = semesterObject[subjectSel.value][this.value];
      
//     }
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
        console.log(allEntry);
    }

    return(
        <>
        <div className="container ">
        <form action="" onSubmit={submitForm}>
          
          <div class="text-center">
              <h3>Enter Student Marks</h3>
          </div>
          <div className="mb-3">
           <label htmlFor="exampleInputSemester1" className="form-label">Semester</label>
           <select name="semester" id="semester" className="form-control" >
               <option class="text-dark" value="" selected="selected">Select Semester</option>
           </select>
          </div>
         
         <div className="mb-3">
              <label htmlFor="exampleInputSubject1" className="form-label">Subject</label>
             <select name="subject" id="subject" className="form-control">
               <option class="text-dark" value="" selected="selected">Please select semester first</option>
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