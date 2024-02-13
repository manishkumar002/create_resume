// import React from "react";
// import Tophead from "./Tophead";
// import "../../styles/Basicinfo.css";
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import { PiUserCircleLight } from "react-icons/pi";
// import { MdOutlineAttachEmail } from "react-icons/md";
// import { FaPhone } from "react-icons/fa6";
// import { FaRegAddressBook } from "react-icons/fa";
// import { IoCameraReverseOutline } from "react-icons/io5";
// export default function Basicinfo() {
//   return (
//     <div className="container-fluid">
//       <div className="row">
//         <div className="col-sm-1"></div>
//         <div className="col-sm-10">
//           <Tophead />
//            <div className="col-sm-1"></div>
//        </div>
//       </div>
//       <div className="row mt-5">
//         <div className="col-sm-2"></div>
//         <div className="col-sm-8">
//           <div className="basic-box">
//             <div className="p-5 row">
//               <div  className="col-sm-2 col-md-6 col-lg-5 col-xxl-2 col-xl-4 text-center">
//               <span className="basic-user">
//               <PiUserCircleLight/>
//               </span>
//               <span className="fs-3">
//               <IoCameraReverseOutline style={{transform:'translateX(-25px)'}}/>
//               </span>
//               </div>
//               <div className="col-sm-10 col-md-6 col-lg-7 col-xxl-10  col-xl-8 tophed">
//               <label className="f-size">Full Name</label>
//               <input type="name" className="form-control input-basic"/>
//               </div>

//               <label className="f-size">Email</label>
//               <InputGroup className="">
//         <InputGroup.Text className="fs-3"><MdOutlineAttachEmail/></InputGroup.Text>
//         <Form.Control
//           placeholder="xyz@gmail.com"
//           className="input-basic"
//         />
//       </InputGroup>

//       <label className="f-size">Phone Number</label>
//               <InputGroup className="mb-3">
//         <InputGroup.Text className="fs-3"><FaPhone/></InputGroup.Text>
//         <Form.Control
//           placeholder="Enter the number"
//           className="input-basic"
//         />
//       </InputGroup>

//       <label className="f-size">Address</label>
//               <InputGroup className="mb-3">
//         <InputGroup.Text className="fs-3"><FaRegAddressBook/></InputGroup.Text>
//         <Form.Control
//           placeholder="Enter the Address"
//           className="input-basic"
//         />
//       </InputGroup>

//       <label className="f-size">Job Postion*</label>
//               <InputGroup className="mb-3 ">
//         <Form.Control
//           placeholder="postion*"
//           className="input-basic"
//         />
//       </InputGroup>


//       <label className="f-size">Summary*</label>
//               <InputGroup className="mb-3">
//         <Form.Control
//           placeholder="Summary*"
//           className="input-basic"
//         />
//       </InputGroup>
  


//       <div>

 
 
  
//     <span style={{float:'right'}} ><button className="basic-button-add m-1">+ Stack overflow</button></span>
//     <span style={{float:'right'}} ><button className="basic-button-ad m-1">+ GitHub</button></span>
//     <span style={{float:'right'}} ><button className="basic-button-ad m-1">+ Skype</button></span>
//     <span style={{float:'right'}} ><button className="basic-buttoGitHubon-ad m-1">+ Addinfo</button></span>
 
//   </div>


//   <div>
//   <span style={{float:'right'}} ><button className="basic-button-blue m-1 ">Next</button></span>
//     <span style={{float:'right'}} ><button className="basic-button m-1">Preview</button></span>
  
//   </div>
      
//             </div>
//           </div>
//         </div>
//         <div className="col-sm-2"></div>
//       </div>
//     </div>
//   );
// }




import React,{useState,useEffect} from "react";
import Tophead from "./Tophead";
// import { useParams } from "react-router-dom";
import "../../styles/Basicinfo.css";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { PiUserCircleLight } from "react-icons/pi";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaRegAddressBook } from "react-icons/fa";
import { IoCameraReverseOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { ImSkype } from "react-icons/im";
import { FaGithub } from "react-icons/fa6";
import { FaStackOverflow } from "react-icons/fa";
import Modalstandar from '../Modalstandard';
import { Link } from 'react-router-dom';
export default function Basicinfo() {

  const[basic_name,setBasic_name]=useState('')
  const[basic_email,setBasic_email]=useState('')
  const[basic_number,setBasic_number]=useState('')
  const[linkedin,setLinkedin]=useState('')
  const[overflows,setOverflows]=useState('')
  const[gitHubs,setGitHubs]=useState('')
  const[skypes,setSkypes]=useState('')
  const[basic_address,setBasic_address]=useState('')
  const[basic_pobpostion,setBasic_pobpostion]=useState('')
  const[basic_summary,setBasic_summary]=useState('')
  
  const [linkeDin, setLinkeDin] = useState(false);
  const [overflow, setOverflow] = useState(false);
  const [gitHub, setGitHub] = useState(false);
  const [skype, setSkype] = useState(false);


  function Info() {
    fetch("http://localhost:8000/basicinfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({basic_name, basic_email, basic_number,linkedin,overflows,gitHubs,skypes,basic_address,basic_pobpostion,basic_summary}),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      }).then((data) => {
        console.log(data);
        window.localStorage.setItem('basic',JSON.stringify(basic_email))
       
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
     
  }


  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-1">
         
        </div>
        <div className="col-sm-10">
          <Tophead/>
           <div className="col-sm-1"></div>
       </div>
      </div>
      <div className="row mt-5">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
          <div className="basic-box">
            <div className="p-5 row">
              <div  className="col-sm-2 col-md-6 col-lg-5 col-xxl-2 col-xl-4 text-center">
              <span className="basic-user">
              <PiUserCircleLight/>
              </span>
              <span className="fs-3">
              <IoCameraReverseOutline style={{transform:'translateX(-25px)'}}/>
              </span>
              </div>
              <div className="col-sm-10 col-md-6 col-lg-7 col-xxl-10  col-xl-8 tophed">
              <label className="f-size">Full Name</label>
              <input type="name" className="form-control input-basic"  value={basic_name} onChange={(e)=>{setBasic_name(e.target.value)}}/>
              </div>

              <label className="f-size">Email</label>
              <InputGroup className="">
        <InputGroup.Text className="fs-3"><MdOutlineAttachEmail/></InputGroup.Text>
        <Form.Control
          placeholder="xyz@gmail.com"
          className="input-basic"
          type="email"
          value={basic_email} onChange={(e)=>{setBasic_email(e.target.value)}}
        />
      </InputGroup>

      <label className="f-size mt-4">Phone Number</label>
              <InputGroup className="mb-3">
        <InputGroup.Text className="fs-3"><FaPhone/></InputGroup.Text>
        <Form.Control
          placeholder="Enter the number"
          className="input-basic"
          type="number"
          value={basic_number} onChange={(e)=>{setBasic_number(e.target.value)}}
        />
      </InputGroup>

      {linkeDin && <div>
        <label className="f-size">LinkeDin</label>
              <InputGroup className="mb-3">
        <InputGroup.Text className="fs-3"><FaLinkedin/></InputGroup.Text>
        <Form.Control
          placeholder="Enter the Address"
          className="input-basic"
          type="text"
          value={linkedin} onChange={(e)=>{setLinkedin(e.target.value)}}
        />
      </InputGroup>
      </div>}


      {overflow && <div>
        <label className="f-size">Overflow</label>
              <InputGroup className="mb-3">
        <InputGroup.Text className="fs-3"><FaStackOverflow/></InputGroup.Text>
        <Form.Control
          placeholder="Enter the Address"
          className="input-basic"
          type="text"
          value={overflows} onChange={(e)=>{setOverflows(e.target.value)}}
        />
      </InputGroup>
      </div>}

      {gitHub && <div>
        <label className="f-size">GitHub</label>
              <InputGroup className="mb-3">
        <InputGroup.Text className="fs-3"><FaGithub/></InputGroup.Text>
        <Form.Control
          placeholder="Enter the Address"
          className="input-basic"
          type="text"
          value={gitHubs} onChange={(e)=>{setGitHubs(e.target.value)}}
        />
      </InputGroup>
      </div>}


      {skype && <div>
        <label className="f-size">Skype</label>
              <InputGroup className="mb-3">
        <InputGroup.Text className="fs-3"><ImSkype/></InputGroup.Text>
        <Form.Control
          placeholder="Enter the Address"
          className="input-basic"
          type="text"
          value={skypes} onChange={(e)=>{setSkypes(e.target.value)}}
        />
      </InputGroup>
      </div>}
      <label className="f-size">Address</label>
              <InputGroup className="mb-3">
        <InputGroup.Text className="fs-3"><FaRegAddressBook/></InputGroup.Text>
        <Form.Control
          placeholder="Enter the Address"
          className="input-basic"
          type="text"
          value={basic_address} onChange={(e)=>{setBasic_address(e.target.value)}}
        />
      </InputGroup>

      <label className="f-size">Job Postion*</label>
              <InputGroup className="mb-3 ">
        <Form.Control
          placeholder="postion*"
          className="input-basic"
          type="text"
          value={basic_pobpostion} onChange={(e)=>{setBasic_pobpostion(e.target.value)}}
        />
      </InputGroup>


      <div>
              <label className="f-size  mt-3">Summary</label>
              <textarea type="name" className="form-control input-basic" style={{height:'100px'}}  value={basic_summary} onChange={(e)=>{setBasic_summary(e.target.value)}}/>
               </div>
      <div className="mt-3">
    <span style={{float:'right'}} ><button className={`basic-button-add m-1 ${overflow ? 'red-button' : ''}`}onClick={() => setOverflow(!overflow)}>{ overflow ? "-Stack overflow" : "+ Stack overflow"}</button></span>
    <span style={{float:'right'}} ><button className={`basic-button-ad m-1 ${gitHub ? 'red-button' : ''}`}onClick={() => setGitHub(!gitHub)}>{gitHub ? "- GitHub" : "+ GitHub"}</button></span>
    <span style={{float:'right'}} ><button className={`basic-button-ad m-1 ${skype ? 'red-button' : ''}`}onClick={() => setSkype(!skype)}>{skype ? "- Skype" : "+ Skype"}</button></span>
    <span style={{float:'right'}} ><button className={`basic-button-ad m-1 ${linkeDin ? 'red-button' : ''}`}onClick={() => setLinkeDin(!linkeDin)}>{linkeDin ? "- Linkedin" : "+ Linkedin"}</button></span>
    <span style={{float:'right'}} ><button className="basic-button-ad m-1"> + Add info</button></span>
 
  </div>


  <div>
  <Link to="/experiences"><span style={{float:'right'}} ><button className="basic-button-blue m-1" onClick={Info}>Next</button></span></Link>
    <span style={{float:'right'}} ><button className="basic-button bg-danger m-1"><Modalstandar/></button></span>
  
  </div>
      
            </div>
          </div>
        </div>
        <div className="col-sm-2"></div>
      </div>
    </div>
  );
}
