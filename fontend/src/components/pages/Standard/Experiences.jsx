import React,{useState} from 'react'
import Tophead from "./Tophead";
import "../../styles/Basicinfo.css";
import { Link } from 'react-router-dom';
import Modalstandar from '../Modalstandard';
export default function Experiences() {
  const[estart_date,setEstart_date]=useState('')
  const[eend_date,setEend_date]=useState('')
  const[ecompanyname,setEcompanyname]=useState('')
  const[eyourpostion,setEyourpostion]=useState('')
  const[ecompanyaddress,setEcompanyaddress]=useState('')
  const[eyourexperience,setEyourexperience]=useState('')

  function Expe() {
    fetch("http://localhost:8000/experience", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({estart_date,eend_date,ecompanyname,ecompanyaddress,eyourpostion,eyourexperience}),
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
            <span>Add Experience</span>
            <span  style={{float:'right'}}>Currently working here</span>
          </div>
              <div  className="col-sm-6">
              <label className="f-size">From</label>
              <input 
  type="date" 
  className="form-control input-basic" 
  value={estart_date} 
  onChange={(e) => {
    const selectedDate = new Date(e.target.value);
    const year = selectedDate.getFullYear();
    let month = selectedDate.getMonth() + 1;
    month = month < 10 ? '0' + month : month; 
    let day = selectedDate.getDate();
    day = day < 10 ? '0' + day : day; 
    const formattedDate = `${year}-${month}-${day}`;
    setEstart_date(formattedDate);
  }}
/>


              </div>
              <div className="col-sm-6 ">
              <label className="f-size">To</label>
              <input 
  type="date" 
  className="form-control input-basic" 
  value={eend_date} 
  onChange={(e) => {
    const selectedDate = new Date(e.target.value);
    const year = selectedDate.getFullYear();
    let month = selectedDate.getMonth() + 1;
    month = month < 10 ? '0' + month : month;
    let day = selectedDate.getDate();
    day = day < 10 ? '0' + day : day; 
    const formattedDate = `${year}-${month}-${day}`;
    setEend_date(formattedDate);
  }}
/>

              </div>

              <div>
              <label className="f-size mt-3">Company Name *</label>
              <input type="text" className="form-control input-basic" placeholder='ABC Company' value={ecompanyname} onChange={(e)=>{setEcompanyname(e.target.value)}}/>
               </div>

               <div>
              <label className="f-size mt-3">Your Postion *</label>
              <input type="text" className="form-control input-basic"  placeholder='XYZ Manager' value={eyourpostion} onChange={(e)=>{setEyourpostion(e.target.value)}}/>
               </div>
          

               <div>
              <label className="f-size mt-3">Company Address</label>
              <input type="text" className="form-control input-basic"  placeholder='ABC Address' value={ecompanyaddress} onChange={(e)=>{setEcompanyaddress(e.target.value)}}/>
               </div>

               <div>
              <label className="f-size mt-3">Your Experience</label>
              <input type="text" className="form-control input-basic"  placeholder='XYZ Experience' value={eyourexperience} onChange={(e)=>{setEyourexperience(e.target.value)}}/>
               </div>
          
  
  <div className='mt-5'>
  <Link to="/education"><span style={{float:'right'}} ><button className="basic-button-blue m-1" onClick={Expe}>Next</button></span></Link>
    <span style={{float:'right'}} ><button className="basic-button m-1" style={{width:'150px'}}>Add Experience</button></span>
    <span style={{float:'right'}} ><button className="basic-button m-1 bg-danger" ><Modalstandar/></button></span>
  
  </div>
      
            </div>
          </div>
        </div>
        <div className="col-sm-2"></div>
      </div>
    </div>
  )
}
