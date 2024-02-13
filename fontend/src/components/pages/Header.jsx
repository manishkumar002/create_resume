
import React, { useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import '../styles/Header.css';
import { VscThreeBars } from "react-icons/vsc";
import { BsXLg } from "react-icons/bs";
import Logout from './Logout';
export default function Header() {
   const auth = localStorage.getItem('user')
   const Navigate =useNavigate()


   useEffect(()=>{
    if(auth){
      Navigate('/')
    }
   },[])

   const logout=()=>{
    localStorage.clear()
   }

  function togleSidebar() {
    var element = document.getElementById("manish");
    element.classList.toggle("hidesidebar");
  }

  return(
  
<div className='container-fluid'>
 <div className='row'>
 <div className='col-sm-2 col-10 col-md-11 col-lg-4'>
 <div className='d-block d-lg-none'>
  <span className='text-light fs-3'>
    <img src="https://image.shutterstock.com/image-photo/image-260nw-787885846.jpg" style={{height:'50px',width:'50px',borderRadius:'50px'}}/>
  </span>
 </div>
 <div>
  <b className='w-color fs-2 d-none d-lg-block '>
  <img src="https://image.shutterstock.com/image-photo/image-260nw-787885846.jpg" style={{height:'50px',width:'50px',borderRadius:'50px'}}/>
  &nbsp;Resume
  </b>
  </div>
 </div>
 <div className='col-sm-10 col-2 col-md-1 col-lg-8 '>
  <div className='row'>
  <div className='d-block d-lg-none' style={{float:'right'}}>
  <span onClick={togleSidebar} className='text-light fs-1'><VscThreeBars/></span>
 </div>
 
<div className='d-none d-lg-block '>
  <ul className='header'>
  <li>
        <Link className='Link fs-5' to="/"> <img src="https://cdn5.vectorstock.com/i/1000x1000/88/49/home-red-icon-symbol-of-residential-house-vector-20468849.jpg" style={{height:'25px',width:'25px',borderRadius:'50px'}}/> Home</Link>
      </li>
      <li >
        <Link className='Link  fs-5' to="contact"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl6UdqJhgr1zFFkg4BFRhm9Le4xG3i_uBBe04vmQak7w&s" style={{height:'25px',width:'25px',borderRadius:'50px'}}/> Contact Us</Link>
      </li>
      <li >
        <Link className='Link fs-5' to="blog"><img src="https://www.logolynx.com/images/logolynx/66/660fa0bb5270a5abb27f9a81a96c7b3d.png" style={{height:'25px',width:'25px',borderRadius:'50px'}}/> Blog</Link>
      </li>
      <li>
        <Link className='Link fs-5' to="template"><img src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-vector-cv-icon-png-image_3991880.jpg" style={{height:'25px',width:'25px',borderRadius:'50px'}}/> Create Resume</Link>
      </li>
      

      <li>
      <>
      {auth?<Link to='logout' className='Link  fs-5' onClick={logout}><img src="https://previews.123rf.com/images/valentint/valentint1304/valentint130400091/19113406-login-icon-with-white-writing-on-red-background.jpg" style={{height:'25px',width:'25px',borderRadius:'50px'}}/> Logout</Link>
        :<Link className='Link  fs-5' to="singn"><img src="https://previews.123rf.com/images/valentint/valentint1304/valentint130400091/19113406-login-icon-with-white-writing-on-red-background.jpg" style={{height:'25px',width:'25px',borderRadius:'50px'}}/> Singn in</Link>
      }
        </>
      </li>
  </ul>
  </div> 
  </div>
 </div>
 <hr className='text-light'/>
</div>
{/* <---------------------------------> */}
<div className='col-sm-3  sidebar hidesidebar d-lg-none' id="manish" style={{background:'#060c40'}}>
<span  onClick={togleSidebar} className='text-light fs-3'><BsXLg/></span>
<ul className=''>
<li>
        <Link className='Link w-color fs-5' to="/"> <img src="https://cdn5.vectorstock.com/i/1000x1000/88/49/home-red-icon-symbol-of-residential-house-vector-20468849.jpg" style={{height:'25px',width:'25px',borderRadius:'50px'}}/> Home</Link>
      </li>
      <li >
        <Link className='Link w-color fs-5' to="contact"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl6UdqJhgr1zFFkg4BFRhm9Le4xG3i_uBBe04vmQak7w&s" style={{height:'25px',width:'25px',borderRadius:'50px'}}/> Contact Us</Link>
      </li>
      <li >
        <Link className='Link w-color fs-5' to="blog"><img src="https://www.logolynx.com/images/logolynx/66/660fa0bb5270a5abb27f9a81a96c7b3d.png" style={{height:'25px',width:'25px',borderRadius:'50px'}}/> Blog</Link>
      </li>
      <li>
        <Link className='Link w-color fs-5' to="template"><img src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-vector-cv-icon-png-image_3991880.jpg" style={{height:'25px',width:'25px',borderRadius:'50px'}}/> Create Resume</Link>
      </li>
      
      <li>
      <>
      {auth?<Link to='logout' className='Link  fs-5' onClick={logout}><img src="https://previews.123rf.com/images/valentint/valentint1304/valentint130400091/19113406-login-icon-with-white-writing-on-red-background.jpg" style={{height:'25px',width:'25px',borderRadius:'50px'}}/> Logout</Link>
        :<Link className='Link  fs-5' to="singn"><img src="https://previews.123rf.com/images/valentint/valentint1304/valentint130400091/19113406-login-icon-with-white-writing-on-red-background.jpg" style={{height:'25px',width:'25px',borderRadius:'50px'}}/> Singn in</Link>
      }
        </>
      </li>
  </ul>
</div>
{/* <---------------------------------> */}
</div>
  )
}
