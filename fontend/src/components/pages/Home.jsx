// import React from 'react';
import React,{useEffect} from 'react';
import '../styles/Home.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Sliderpage from './Sliderpage'
export default function Home() {
  useEffect(()=>{
    AOS.init({
        duration:8000,
    })
},[])
  return (
    <div className='container-fluid'>
     <div className='row'>
     <div className='col-sm-6 col-md-12  col-xl-6 '>
     <p className='top-border'></p>
     <center>
      <span className='w-color p-5'>
      <i>Create a Free Resume that </i><i className='text-danger'>secures your dream job</i></span>
      <p className='w-color fs-3'>Build a resume thats piques the interest of recruiters and gets you hired. It’s <i className='text-danger'>fast and easy to use.</i></p>
     
      <div className='row p-5'>
      <div className='col-sm-6 p-3'>
      <button className='h-button'>Try For Free</button>
      </div>
      <div className='col-sm-6 p-3'>
      <button className='h-button'>Watch Video</button>
      </div>
      </div>
      <p className='top-box'style={{float:'right'}}></p>
      </center>
    
     </div>
     <div className='col-sm-6 mt-5 col-md-12  col-xl-6'>
      <div className='p-4'>
        <img src="https://www.techblitz.org/wp-content/uploads/2020/11/online-resume-writing-service.jpg" style={{width:'100%',borderRadius:'20px'}}/>
      </div>
     </div>
     </div>
     <div className='row'>
     <center><span className='w-color'>Build your <u className='text-danger'>Resume</u> in 3 steps</span></center>
      <div className='col-sm-6 col-md-12 col-lg-6'>
      <div className='row'>
        <div className='col-sm-12'>
      <div data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
        <div className='row'>
          <div className='col-sm-2 p-3 col-md-4 col-xl-4'>
       <div className='step-1'></div>
          </div>
          <div className='col-sm-10 p-3 col-md-8 col-xl-8 '>
          <span className='w-color'>1.</span>
          <span className='w-color fs-2'>Fill out your info</span><br/>
          <i className='text-danger w-color fs-3'>Fill in the blanks and see results in real-time.</i>
          </div>
        </div>
        </div>
      </div> 
        </div>
      </div>
     </div>
     <div className='row'>
      <div className='col-sm-6'></div>
      <div className='col-sm-6 col-md-12 col-lg-6'>
        <div className='row'>
        <div className='col-sm-12'>
      <div data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
        <div className='row'>
          <div className='col-sm-2 p-3 col-md-4 '>
       <div className='step-2'></div>
          </div>
          <div className='col-sm-10 p-3 col-md-8'>
          <span className='w-color'>2.</span>
          <span className='w-color fs-2'>Preview your resume</span><br/>
          <i className='text-danger w-color fs-3'>Give your document a professional and elegant look.</i>
          </div>
        </div>
        </div>
      </div> 
        </div>
      </div>
     </div>

     <div className='row'>
      <div className='col-sm-6 col-md-12 col-lg-6'>
      <div className='row'>
        <div className='col-sm-12'>
      <div data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
        <div className='row'>
          <div className='col-sm-2 p-3 col-md-4 '>
       <div className='step-3'></div>
          </div>
          <div className='col-sm-10 p-3 col-md-8 '>
          <span className='w-color'>3.</span>
          <span className='w-color fs-2'>Hit 'Download!'</span><br/>
          <i className='text-danger w-color fs-3'>Download your resume, apply, get more interviews.</i>
          </div>
        </div>
        </div>
      </div> 
        </div>
      </div>
     </div>
     <div className='row'>
     <center>
     <span className='w-color p-5'>
      <u>About </u><i className='text-danger'>Resume4U</i></span>
      </center>
   <div className='col-sm-2'></div>
   <div className='col-sm-8'>
    <div className='row'>
      <div className='col-sm-6 p-3 col-md-12 col-lg-12 col-xxl-6 '>
      <img src="https://resumegenius.com/wp-content/uploads/2018/12/illus-templatepage.svg" style={{width:'100%',borderRadius:'20px'}}/>
      </div>
      <div className='col-sm-6 col-md-12 col-lg-12 col-xxl-6 p-3'>
        <p className='w-color fs-4 mt-5'>
        Resume4u is owned by a single person.
         Resume4u is focused on providing the premium services
          free of coast all around the internet while other
           agencies are charging for these services. Resume4u 
           provides his user's a free resume builder , editor 
           where user can create , edit free premium resume templates.
            Our main motive is to give best user experience free of 
            coast so the can do something practical in their life.
             Share you thoughts with us about our plan.
        Unlock Your Potential, Unleash Your Future - For Free!
        </p>
      </div>
    </div>
   </div>
   <div className='col-sm-2'></div>

     </div>
     <center className='mt-5'>
     <span className='w-color p-5'>
      <i>Benefits Of Using</i><u className='text-danger'> Our Product</u></span>
      <p className='w-color fs-2'>Why Choose Us?</p>
      </center>
      <center>
<div className='row d-none d-lg-inline-flex'>

  <div className='col-sm-4 col-md-4 p-3 mt-5'>
    <div className='row'>
    <div data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
      <div className='col-sm-3 col-lg-5 col-xl-3'>
      <img src="https://resumegenius.com/wp-content/uploads/2018/12/illus-templatepage.svg" style={{width:'100%',borderRadius:'20px',height:'100px'}}/>
      </div>
      <div className='col-sm-9 col-lg-7 col-xl-9'>
      <b className='w-color fs-2 text-danger'>Easy to use</b>
      <p className='w-color fs-5 mt-1'>
      Craft Your Professional Story with Ease - Simplicity is our Specialty.      
        </p>
      </div>
    </div>
  </div>
  </div>
  <div className='col-sm-4  col-md-4 p-3  mt-5'>
    <div className='row'>
    <div data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
      <div className='col-sm-3 col-lg-5 col-xl-3'>
      <img src="https://www.uwp.edu/live/offices/AdvisingCareer/images/ResumeGraphic1.png" style={{width:'100%',borderRadius:'20px',height:'100px'}}/>
      </div>
      <div className='col-sm-9 col-lg-7 col-xl-9'>
      <b className='w-color text-danger fs-2'>Secure</b>
      <p className='w-color fs-5 mt-1'>
      Your Data, Safeguarded – We Value Your Privacy as Much as You Do.
        
        </p>
      </div>
      </div>
    </div>
  </div>
  <div className='col-sm-4 col-md-4 p-3  mt-5'>
    <div className='row'>
    <div data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
      <div className='col-sm-3 col-lg-5 col-xl-3'>
      <img src="https://resumegenius.com/wp-content/uploads/2018/12/illus-templatepage.svg" style={{width:'100%',borderRadius:'20px',height:'100px'}}/>
      </div>
      <div className='col-sm-9 col-lg-7 col-xl-9 '>
      <b className='w-color text-danger fs-2'>Sleek Design</b>
      <p className='w-color fs-5 mt-1'>
      Elegant Designs That Speak Volumes - Your Resume, Redefined.      
        </p>
      </div>
      </div>
    </div>
  </div>
  <div className='col-sm-4 col-md-4 p-3  mt-5'>
    <div className='row'>
    <div data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
      <div className='col-sm-3 col-lg-5 col-xl-3'>
      <img src="https://www.uwp.edu/live/offices/AdvisingCareer/images/ResumeGraphic1.png" style={{width:'100%',borderRadius:'20px',height:'100px'}}/>
      </div>
      <div className='col-sm-9 col-lg-7 col-xl-9 '>
      <b className='w-color text-danger  fs-2'>Customizable Templates</b>
      <p className='w-color fs-5 mt-1'>
      Unleash Creativity with Our Customizable Templates - Your Resume, Your Way     
        </p>
      </div>
      </div>
    </div>
  </div>
  <div className='col-sm-4 col-md-4 p-3  mt-5'>
    <div className='row'>
    <div data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
      <div className='col-sm-3 col-lg-5 col-xl-3'>
      <img src="https://resumegenius.com/wp-content/uploads/2018/12/illus-templatepage.svg" style={{width:'100%',borderRadius:'20px',height:'100px'}}/>
      </div>
      <div className='col-sm-9 col-lg-7 col-xl-9 '>
      <b className='w-color text-danger fs-2'>Mobile-Friendly</b>
      <p className='w-color fs-5 mt-1'>
      Resume Building on the Go - Perfectly Compatible with Your Mobile Lifestyle.     
        </p>
      </div>
      </div>
    </div>
  </div>
  <div className='col-sm-4 col-md-4 p-3  mt-5'>
    <div className='row'>
    <div data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
      <div className='col-sm-3 col-lg-5 col-xl-3'>
      <img src="https://www.uwp.edu/images/ResumeGraphic2.png" style={{width:'100%',borderRadius:'20px',height:'100px'}}/>
      </div>
      <div className='col-sm-9 col-lg-7 col-xl-9 '>
      <b className='w-color text-danger  fs-2'>No Charges</b>
      <p className='w-color fs-5 mt-1'>
      Absolutely Free, Absolutely Fabulous - Build Your Resume without Spending a Penny      
        </p>
      </div>
    </div>
    </div>
  </div>
</div>
</center>
<div className=' d-block d-lg-none'>
    <Sliderpage/>
</div>
<div className='row back-img'>

  <div className='col-sm-4  top text-center'>
    <b className='text-danger w-color fs-2  '>Testimonials From Our<br/> Previous Users</b>
    <p className='w-color fs-4'>
    What People Say About Us
        </p>
  </div>
  <div className='col-sm-4 col-md-8 col-lg-4 mt-5'>
  <div data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className='homebox'>
<div>
  <span className='p-3'>
    <img src="https://www.shutterstock.com/image-illustration/user-icon-isolated-on-background-260nw-1557699911.jpg" style={{height:'100px',width:'100px', borderRadius:'50px'}}/>
  </span>
  <span className='w-color fs-1'>manish Maurya</span>
</div>
<p className='w-color fs-4 p-3'><b className='text-danger'>“</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Dropping my honest feedback this website help me to create my resume
 within minutes and save my time as well. 
 Please include more resume template

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b className='text-danger'>”</b></p>
</div>
  </div>
  <div className='col-sm-4'></div>


  <div className='col-sm-4 col-md-8 col-lg-4 mt-5'>
  <div data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className='homebox'>
<div>
  <span className='p-3'>
    <img src="https://www.shutterstock.com/image-illustration/user-icon-isolated-on-background-260nw-1557699911.jpg" style={{height:'100px',width:'100px', borderRadius:'50px'}}/>
  </span>
  <span className='w-color fs-1'>Vijay Sharma</span>
</div>
<p className='w-color fs-4 p-3'><b className='text-danger'>“</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Dropping my honest feedback this website help me to create my resume
 within minutes and save my time as well. 
 Please include more resume template

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b className='text-danger'>”</b></p>
</div>
  </div>

  <div className='col-sm-4'></div>
  <div className='col-sm-4  col-md-8 col-lg-4 mt-5'>
  <div data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className='homebox'>
<div>
  <span className='p-3'>
    <img src="https://www.shutterstock.com/image-illustration/user-icon-isolated-on-background-260nw-1557699911.jpg" style={{height:'100px',width:'100px', borderRadius:'50px'}}/>
  </span>
  <span className='w-color fs-1'>Dilip kumar</span>
</div>
<p className='w-color fs-4 p-3'><b className='text-danger'>“</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Dropping my honest feedback this website help me to create my resume
 within minutes and save my time as well. 
 Please include more resume template

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b className='text-danger'>”</b></p>
</div>
  </div>
</div>

    </div>
  )
}

