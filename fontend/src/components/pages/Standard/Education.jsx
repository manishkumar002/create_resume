import React,{useState} from 'react'
import Tophead from "./Tophead";
import "../../styles/Basicinfo.css";
import { Link } from 'react-router-dom';
import Modalstandar from '../Modalstandard';
export default function Education() {
  const[education_sdate,setEducation_sdate]=useState('')
  const[	education_edate,setEducation_edate]=useState('')
  const[education_degree,setEducation_degree]=useState('')
  const[education_institute,setEducation_institute]=useState('')
 

  function Educa() {
    fetch("http://localhost:8000/education", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({education_sdate,education_edate,education_degree,education_institute}),
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
            <span>Add Education</span>
            <span  style={{float:'right'}}>Currently stuyding here</span>
          </div>
              <div  className="col-sm-6">
              <label className="f-size">From</label>
              <input 
  type="date" 
  className="form-control input-basic" 
  value={education_sdate} 
  onChange={(e) => {
    const selectedDate = new Date(e.target.value);
    const year = selectedDate.getFullYear();
    let month = selectedDate.getMonth() + 1;
    month = month < 10 ? '0' + month : month; 
    let day = selectedDate.getDate();
    day = day < 10 ? '0' + day : day; 
    const formattedDate = `${year}-${month}-${day}`;
    setEducation_sdate(formattedDate);
  }}
/>
              </div>
              <div className="col-sm-6">
              <label className="f-size">To</label>
              <input 
  type="date" 
  className="form-control input-basic" 
  value={education_edate} 
  onChange={(e) => {
    const selectedDate = new Date(e.target.value);
    const year = selectedDate.getFullYear();
    let month = selectedDate.getMonth() + 1;
    month = month < 10 ? '0' + month : month; 
    let day = selectedDate.getDate();
    day = day < 10 ? '0' + day : day; 
    const formattedDate = `${year}-${month}-${day}`;
    setEducation_edate(formattedDate);
  }}
/>
              </div>

              <div>
              <label className="f-size mt-3">Degree *</label>
              <input type="text" className="form-control input-basic" placeholder='Degree' value={education_degree} onChange={(e)=>{setEducation_degree(e.target.value)}}/>
               </div>

               <div>
              <label className="f-size mt-3">Institute *</label>
              <input type="text" className="form-control input-basic" placeholder='Institute' value={education_institute} onChange={(e)=>{setEducation_institute(e.target.value)}}/>
               </div>
          
  <div className='mt-5'>
  <Link to="/refrences"><span style={{float:'right'}} ><button className="basic-button-blue m-1" onClick={Educa}>Next</button></span></Link>
    <span style={{float:'right'}} ><button className="basic-button m-1" style={{width:'150px'}}> Add Education</button></span>
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
