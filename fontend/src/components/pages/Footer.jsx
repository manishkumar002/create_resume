import React from 'react'
import '../styles/Footer.css'
export default function Footer() {
  return (
    <div className='container-fluid'>
    <div className='row'>
  <hr className='m'/>
        <div className='col-sm-4 col-md-6 col-lg-4'>
            <div className='footbox'>
                <div className='p-3'>
                <b className='w-color fs-2'>
  <img src="https://png.pngtree.com/png-vector/20190505/ourmid/pngtree-vector-resume-icon-png-image_1022714.jpg" style={{height:'100px',width:'100px',borderRadius:'50px'}}/>
  &nbsp;Resume
  </b>
                </div>
                <div className='p-3'>
             <p className='w-color fs-2'>Unlock Your Potential, Unleash Your Future - For Free!</p>
             </div>
            </div>
        </div>
        <div className='col-sm-8 col-md-6 col-lg-8'>
          <div className='row'>
            <div className='col-sm-4 mt-5'>
            <center style={{textAlign:'left'}}><b className='w-color fs-2 text-danger'>Terms & Policies</b><br/>
            <span className='w-color fs-4'>Disclaimer</span><br/>
              <span className='w-color fs-4'>Privacy Policy</span>
              </center> 
            </div>
            <div className='col-sm-4 mt-5'>
            <center style={{textAlign:'left'}}><b className='w-color fs-2 text-danger'>Company</b><br/>
            <span className='w-color fs-4'>Home</span><br/>
              <span className='w-color fs-4'>Create Resume</span><br/>
              <span className='w-color fs-4'>Blog</span><br/>
              <span className='w-color fs-4'>About Us</span><br/>
              </center> 
            </div>
            <div className='col-sm-4 mt-5'>
            <center style={{textAlign:'left'}}><b className='w-color fs-2 text-danger'>Support</b><br/>
            <span className='w-color fs-4'>Contact Us</span><br/>
              <span className='w-color fs-4'>Faq's</span><br/>
              <span className='w-color fs-4'>(+91) 6307899113</span>
              </center> 
            </div>
          </div>
        </div>
    </div>
     
    </div>
  )
}
