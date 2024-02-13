import React, { useState, useEffect } from "react";
import Tophead from "./Tophead";
import { Link } from 'react-router-dom';
import Modalstandar from '../Modalstandard';
export default function Interests() {
  const [isChecked, setIsChecked] = useState(false);
  const[interests_hobbies,setInterests_hobbies]=useState('')
  function  Inter() {
    fetch("http://localhost:8000/interest",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({interests_hobbies}),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      }).then((data) => {
        console.log(data);

       
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
     
  }

  const handleChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className='container-fluid'>
      <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-10">
          <Tophead />
           <div className="col-sm-1"></div>
       </div>
      </div>
      <div className="row mt-5">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
          <div className="basic-box">
            <div className="p-5 row">
            <div>
            <span>Add Interest</span>
          </div>

          <div className='mt-3'>
              <label className="f-size">Interest/Hobbies</label>
              <input type="name" className="form-control input-basic" value={interests_hobbies} onChange={(e)=>{setInterests_hobbies(e.target.value)}}/>
               </div>
               <p className='b-color'>Press <span className='text-danger'>Enter</span> or click <span className='text-danger'>Add Interest</span> to add Interest</p>

               <div>
               
               <span style={{ float: "right" }}><label>
                 <input
                   checked={isChecked}
                   onChange={handleChange}
                   className="switch"
                   type="checkbox"
                 />
                 <div>
                   <div></div>
                 </div>
               </label>
               </span> 

               <span style={{ float: "right" }}>
             <b className="fs-6 p-2">Show Level</b>
             </span> 
             </div>
         
           <div><span style={{ float: "right" }}>
             <button
               className="basic-button m-1"
               style={{
                 width: "120px",
                 height: "30px",
                 borderRadius: "10px",
               }}
             >
               Add Language
             </button>
             </span>
           </div>

  <div className='mt-5'>
  <Link to="/download"><span style={{float:'right'}} ><button className="basic-button-blue m-1" onClick={Inter}>Next</button></span></Link>
    <span style={{float:'right'}} ><button className="basic-button m-1" style={{width:'150px'}}> Add Reference</button></span>
    <span style={{float:'right'}} ><button className="basic-button m-1 bg-danger"><Modalstandar/></button></span>
  
  </div>
      
            </div>
          </div>
        </div>
        <div className="col-sm-2"></div>
      </div>
    </div>
  )
}
