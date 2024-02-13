import React from 'react'
import '../styles/Template.css'
import { Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

export default function CreateResume() {

  
  function demo(e){
    document.getElementsByClassName('manish')
   var id= e.target.id;
  window.localStorage.setItem('vt',JSON.stringify(id))
  }
  return (
    <div className='container-fluid'>
      <div className='row'>
        <center className='w-color'>
          <span>We have variety of <span className='text-danger'>Free Templates</span></span><br/>
          <span>for you. Select the eye-catching</span><br/>
          <span className='text-danger'>Template.</span>
        </center>
        <div className='col-sm-1'></div>
        <div className='col-sm-10'>
          <div className='row'>
            <div className='col-sm-4 col-md-12  col-lg-4'>
            <div className=' m-box m-1'>
              <div className='template-1 m-3'>
                <div className='template-rgba-1'>
                <Link to="/basicinfo"><center><button className='button-select manish' id="1"  onClick={demo}>Select</button></center></Link>
                </div>
              </div>
              <p className='w-color fs-2 p-1'>Standard</p>
            </div>
            </div>
            <div className='col-sm-4 col-md-12 col-lg-4'>

            <div className=' m-box m-1'>
            <div className='template-2 m-3'>
            <div className='template-rgba-1'>
            <Link to="/basicinfo"><center><button className='button-select manish'  id="2" onClick={demo}>Select</button></center></Link>
                </div>
                </div>
                <p className='w-color fs-2 p-1'>Professional</p>
            </div>
            </div>
            <div className='col-sm-4 col-md-12  col-lg-4'>

            <div className=' m-box m-1'>
            <div className='template-3 m-3'>
            <div className='template-rgba-1'>
            <Link to="/basicinfo"><center><button className='button-select manish' id="3" onClick={demo}>Select</button></center></Link>
                </div>
                </div>
                <p className='w-color fs-2 p-1'>Futuristic</p>
            </div>
            </div>
            
          </div>
        </div>
        <div className='col-sm-1'></div>
      </div>
    </div>
  )
}
