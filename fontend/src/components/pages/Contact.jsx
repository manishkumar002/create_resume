import React from 'react'
import '../styles/Contact.css'
export default function Contact() {
  return (
    <div className='container-fluid'>
     <div className='row'>
      <p className='w-color p-5'>Contact <span className='text-danger'>Us</span></p>
      <center className='w-color fs-3'>Our 24/7 support is available. Find a solution to any of your query and we would love a feedback regarding our services.</center>
      <div className='contactbox'>
      <label className='b-color mt-4 p-2'>Name</label>
        <input type='name' className='form-control input-height p-3'/>
        <label className='b-color p-2'>email</label>
        <input type='name' className='form-control input-height'/>
        <label className='b-color p-2'>subject</label>
        <input type='name' className='form-control input-height'/>
        <label className='b-color p-2'>Massage</label>
        <input type='name' className='form-control input-height' style={{height:'100px'}}/>
       <button className='contact-button p-4'>Send</button>
      </div>
     </div>
    </div>
  )
}
