import React,{useState} from 'react'
import Tophead from "./Tophead";
import "../../styles/Basicinfo.css";
import { Link } from 'react-router-dom';
import Modalstandar from '../Modalstandard';
export default function Refrences() {
  const[refrences_name,setRefrences_name]=useState('')
  const[refrences_number,setRefrences_number]=useState('')
  const[refrences_email,setRefrences_email]=useState('')
  const[refrences_relation,setRefrences_relation]=useState('')
  const[refrences_company,setRefrences_company]=useState('')

  function Refre() {
    fetch("http://localhost:8000/refrence",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({refrences_name,refrences_number,refrences_email,refrences_relation,refrences_company}),
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
              <label className="f-size mt-2">Name*</label>
              <input type="text" className="form-control input-basic" placeholder='Manish Maurya'  value={refrences_name} onChange={(e)=>{setRefrences_name(e.target.value)}}/>
               </div>


              <div  className="col-sm-6">
              <label className="f-size mt-2">Phone</label>
              <input type="number" className="form-control input-basic" placeholder='91+ 000 0000 000'  value={refrences_number} onChange={(e)=>{setRefrences_number(e.target.value)}}/>
              </div>
              <div className="col-sm-6 ">
              <label className="f-size mt-2">Email</label>
              <input type="email" className="form-control input-basic"  placeholder='xyz@gmail.come'  value={refrences_email} onChange={(e)=>{setRefrences_email(e.target.value)}}/>
              </div>

             

               <div>
              <label className="f-size mt-2">Relation</label>
              <input type="text" className="form-control input-basic"  placeholder='Uncle'  value={refrences_relation} onChange={(e)=>{setRefrences_relation(e.target.value)}}/>
               </div>

               <div>
              <label className="f-size mt-2">Company</label>
              <input type="name" className="form-control input-basic"  placeholder='Abc Solution'  value={refrences_company} onChange={(e)=>{setRefrences_company(e.target.value)}}/>
               </div>
          
  <div className='mt-5'>
  <Link to="/expertise"><span style={{float:'right'}} ><button className="basic-button-blue m-1" onClick={Refre}>Next</button></span></Link>
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
