import '../styles/Singn.css';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import { FcGoogle } from 'react-icons/fc';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Singn() {
  const navigate=useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function onLoginPress() {
    const data = { email, password };
    fetch('http://localhost:8000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Failed to login');
        }
      })
      .then((data) => {
        alert('Login successful', data);
        window.localStorage.setItem('user',JSON.stringify(email))
        navigate('/');

      })
      .catch((error) => {
        alert('Login failed', error);
      });
  }

  useEffect(() => {
    AOS.init({
      duration: 8000,
    });
  }, []);


  const loginwithgoogle = ()=>{
    window.open("http://localhost:8000/auth/google/callback","_self")
  }
  

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div
          data-aos='zoom-in'
          data-aos-offset='200'
          data-aos-easing='ease-in-sine'
          data-aos-duration='600'
          className='singnbox'
        >
          <center>
            <b className='w-color text-danger fs-1'>Welcome Back</b>
            <p className='b-color fs-3'>Login to your account</p>
            <button className='fs-4 b-color fs-3 border border-none' onClick={loginwithgoogle}>
              <FcGoogle /> Google
            </button>
          </center>

          <label className='b-color'>Email</label>
          <input
            type='email' // Assuming it's an email input
            className='form-control input-height'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className='b-color'>Password</label>
          <input
            type='password'
            className='form-control input-height'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <center>
            <button className='singin-button' onClick={onLoginPress}>
              Sign In
            </button>
            <p className='b-color fs-3'>
              Don't have an account?{' '}
              <Link to='/singnup'>
                <span className='text-primary'>Sign up!</span>
              </Link>
            </p>
          </center>
        </div>
      </div>
    </div>
  );
}
