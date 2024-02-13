import React,{useState} from 'react'
import Tophead from "./Tophead";
import { Link } from 'react-router-dom';
import Modalstandar from '../Modalstandard';
export default function Certification() {
  const[certification_name,setCertification_name]=useState('')
  const[certification_institue,setCertification_institue]=useState('')
  const[certification_date,setCertification_date]=useState('')
  const[certification_link,setCertification_link]=useState('')
  const[certification_company,setCertification_company]=useState('')


  function  Certi() {
    fetch("http://localhost:8000/certification",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({certification_name,certification_institue,certification_date,certification_link,certification_company}),
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
            <span>Add Reference</span>
          </div>

          <div>
              <label className="f-size mt-3">Name*</label>
              <input type="text" className="form-control input-basic" placeholder='Certified Public Accountant' value={certification_name} onChange={(e)=>{setCertification_name(e.target.value)}}/>
               </div>


              <div  className="col-sm-6">
              <label className="f-size mt-3">Institue *</label>
              <input type="text" className="form-control input-basic" placeholder='American Institute of Certified Public Accountants' value={certification_institue} onChange={(e)=>{setCertification_institue(e.target.value)}}/>
              </div>
              <div className="col-sm-6 ">
              <label className="f-size mt-3">Date *</label>
              <input 
  type="date" 
  className="form-control input-basic" 
  value={certification_date} 
  onChange={(e) => {
    const selectedDate = new Date(e.target.value);
    const year = selectedDate.getFullYear();
    let month = selectedDate.getMonth() + 1;
    month = month < 10 ? '0' + month : month;
    let day = selectedDate.getDate();
    day = day < 10 ? '0' + day : day; 
    const formattedDate = `${year}-${month}-${day}`;
    setCertification_date(formattedDate);
  }}
/>
              </div>

             

               <div>
              <label className="f-size mt-3">Certificate link</label>
              <input type="name" className="form-control input-basic" placeholder='Ace  of Initiative' value={certification_link} onChange={(e)=>{setCertification_link(e.target.value)}}/>
               </div>

               <div>
              <label className="f-size mt-3">Company</label>
              <input type="name" style={{height:'80px'}} className="form-control input-basic" placeholder='Lorem Ipsum sit amet Lorem Ipsum sit amet Lorem Ipsum sit amet Lorem Ipsum sit amet Lorem Ipsum sit amet Lorem Ipsum sit amet...' value={certification_company} onChange={(e)=>{setCertification_company(e.target.value)}}/>
               </div>
          
  <div className='mt-5'>
  <Link to="/interests"><span style={{float:'right'}} ><button className="basic-button-blue m-1" onClick={Certi}>Next</button></span></Link>
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
