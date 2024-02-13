import React from 'react'
import Tophead from "./Tophead";
import '../../styles/Download.css'
export default function Download() {
  
  return (
    <div className='container-fluid'>
    <div className="row">
      <div className="col-sm-1"></div>
      <div className="col-sm-10">
        <Tophead />

        <div className='row mt-5 mb-3'>
          <div className='col-sm-4 col-md-12 col-lg-4'>
          <div className=' m-box m-1'>
          <center className='w-color fs-2 p-1 text-danger'><b>Standard</b></center>
          <div className='template-1 m-3'></div> 
       <center><button className='d-button mb-2'>Select</button></center>
          </div>
          </div>
          <div className='col-sm-4 col-md-12 col-lg-4'>
          <div className=' m-box m-1'>
          <center className='w-color fs-2 p-1 text-danger'><b>Professional</b></center>
          <div className='template-2 m-3'></div> 
       <center><button className='d-button mb-2'>Select</button></center>
          </div>
          </div>
          <div className='col-sm-4 col-md-12 col-lg-4'>
          <div className=' m-box m-1'>
          <center className='w-color fs-2 p-1 text-danger'><b>Futuristic</b></center>
          <div className='template-3 m-3'></div> 
       <center><button className='d-button mb-2'>Select</button></center>
          </div>
          </div>
        </div>
         <div className="col-sm-1"></div>
     </div>
    </div>
  </div>
  )
}
