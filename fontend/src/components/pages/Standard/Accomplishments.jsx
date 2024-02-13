
import React,{useState} from 'react'
import Tophead from "./Tophead";
import { Link } from "react-router-dom";
import Modalstandar from '../Modalstandard';
export default function Accomplishments() {
  const[	award_name,setAward_name]=useState('')
  const[	awarded_by,setAwarded_by]=useState('')
  const[ awarded_date,setAwarded_date]=useState('')
  const[	achiev_summary,setAchiev_summary]=useState('')

  function  Accomp() {
    fetch("http://localhost:8000/achievements",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({award_name,awarded_by,awarded_date,achiev_summary}),
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
            <span>Add Achievement</span>
          </div>

          <div>
              <label className="f-size mt-3">Award Name*</label>
              <input type="name" className="form-control input-basic" placeholder='Ace of initiative' value={award_name} onChange={(e)=>{setAward_name(e.target.value)}}/>
               </div>


              <div  className="col-sm-6  mt-3">
              <label className="f-size">Awarded By *</label>
              <input type="text" className="form-control input-basic" placeholder='National Science Foundation' value={awarded_by} onChange={(e)=>{setAwarded_by(e.target.value)}}/>
              </div>
              <div className="col-sm-6 mt-3 ">
              <label className="f-size">Awarded Date*</label>
              <input 
  type="date" 
  className="form-control input-basic" 
  value={awarded_date} 
  onChange={(e) => {
    const selectedDate = new Date(e.target.value);
    const year = selectedDate.getFullYear();
    let month = selectedDate.getMonth() + 1;
    month = month < 10 ? '0' + month : month;
    let day = selectedDate.getDate();
    day = day < 10 ? '0' + day : day; 
    const formattedDate = `${year}-${month}-${day}`;
    setAwarded_date(formattedDate);
  }}
/>
              </div>

             

               <div>
              <label className="f-size  mt-3">Summary</label>
              <textarea type="name" className="form-control input-basic" style={{height:'100px'}} value={achiev_summary} onChange={(e)=>{setAchiev_summary(e.target.value)}}/>
               </div>

          
  <div className='mt-5'>
  <Link to="/certification"><span style={{float:'right'}} ><button className="basic-button-blue m-1 " onClick={Accomp}>Next</button></span></Link>
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