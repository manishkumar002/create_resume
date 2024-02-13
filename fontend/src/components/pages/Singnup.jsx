
import '../styles/Singnup.css';
import AOS from 'aos';
import { FcGoogle } from "react-icons/fc";
import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function Singnup() {
  const navigate=useNavigate()
  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')

  function signUp() {
    fetch("http://localhost:8000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name, email, password}),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      }).then((data) => {
        console.log(data);
        // window.localStorage.setItem('user',JSON.stringify(email))
        navigate('/singn');
       
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
     
  }

  useEffect(()=>{
    AOS.init({
        duration:8000,
    })
},[])
  return (
    <div className='container-fluid'>
     <div className='row'>
     <div data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className='singnupbox'>
      <center><b className='w-color text-danger fs-1'>Get Started With Resume</b>
      <p  className='b-color fs-3'>Get started with resume building</p>
      <button className='fs-4 b-color fs-3 border border-none'><FcGoogle/> Google</button></center><br/>
        <input type='text' className='form-control input-height' placeholder='Name..' value={name} onChange={(e)=>{setName(e.target.value)}} /><br/>
        <input type='email' className='form-control input-height' placeholder='Email..'  value={email} onChange={(e)=>{setEmail(e.target.value)}} /><br/>
        <input type='password' className='form-control input-height' placeholder='Password..'value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        <center><button className='singup-button' onClick={signUp}>Created Account</button>
        <p className='b-color fs-3'>Don't have an account? <Link to="/singn"><span className='text-primary'>Sign In!</span></Link></p>
        </center>
     </div>
  
     </div>
    </div>
  )
}
