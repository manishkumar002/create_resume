import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import { FaRegCalendarCheck } from "react-icons/fa6";
export default function Blog() {
  return (
    <div className='container-fluid'>
   <div className='row'>
   <p className='w-color p-5'>Bl<span className='text-danger'>og</span></p>
      <center className='w-color fs-3'>You will find all the blogs related to better resume understanding and writing here.</center>
      <div className='col-sm-2'></div>
      <div className='col-sm-8 col-sm-12'>
        <div className='row mt-5'>
          <div className='col-sm-6 col-md-12 col-xl-6'>
          <div className='p-4'>
        <img src="https://resumegenius.com/wp-content/uploads/2018/12/illus-templatepage.svg" style={{width:'100%',borderRadius:'20px' ,height:'450px'}}/>
      </div>
          </div>
          <div className='col-sm-6 col-md-12 col-xl-6'>
          <p className='w-color fs-1'> Reverse Chronological Resumes</p>
           <p className='w-color fs-4'>Table Of Contents for - Reverse Chronological Resumes</p>
           <ul>
            <li className='w-color fs-4'>Introduction</li>
            <li className='w-color fs-4'>What is reverse chronological order?</li>
            <li className='w-color fs-4'>How to structre reverse chronological resume?</li>
            <li className='w-color fs-4'>Diffrence between reverse chronological & chronological order</li>
            <li className='w-color fs-4'>Significane of reverse chronological resumes</li>
            <li className='w-color fs-4'>Reverse chronological resume example</li>
           </ul>
           <div className='mt-5'> 
            <span className='w-color fs-5 text-primary'>Read More<BsArrowRight/></span>
            <span className='w-color fs-5 text-primary' style={{float:'right'}}><FaRegCalendarCheck/> January 23, 2024</span>
           </div>
          </div>
        </div>

        <div className='row mt-5'>
          <div className='col-sm-6 col-md-12 col-xl-6'>
          <div className='p-4'>
        <img src="https://www.uwp.edu/live/offices/AdvisingCareer/images/ResumeGraphic1.png" style={{width:'100%',borderRadius:'20px' ,height:'450px'}}/>
      </div>
          </div>
          <div className='col-sm-6 col-md-12 col-xl-6'>
          <p className='w-color fs-1'> Reverse Chronological Resumes</p>
           <p className='w-color fs-4'>Table Of Contents for - Reverse Chronological Resumes</p>
           <ul>
            <li className='w-color fs-4'>Introduction</li>
            <li className='w-color fs-4'>What is reverse chronological order?</li>
            <li className='w-color fs-4'>How to structre reverse chronological resume?</li>
            <li className='w-color fs-4'>Diffrence between reverse chronological & chronological order</li>
            <li className='w-color fs-4'>Significane of reverse chronological resumes</li>
            <li className='w-color fs-4'>Reverse chronological resume example</li>
           </ul>
           <div className='mt-5'> 
            <span className='w-color fs-5 text-primary'>Read More<BsArrowRight/></span>
            <span className='w-color fs-5 text-primary' style={{float:'right'}}><FaRegCalendarCheck/> January 23, 2024</span>
           </div>
          </div>
        </div>


      </div>
      <div className='col-sm-2'></div>
   </div>
   <div className='row'>
   <video
          autoPlay
          muted
          loop
          id="myVideo"
          style={{ height: "500px", width: "100%", objectFit: "cover" }}
        >
          <source
            src="https://mooncart.dexignzone.com/xhtml/images/background/bg-video.mp4"
            type="video/mp4"
          />
        </video>
   </div>
    </div>
  )
}


