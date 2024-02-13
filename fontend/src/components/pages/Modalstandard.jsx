


import { Dropdown } from "bootstrap";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Basicinfo from './Standard/Basicinfo';

function Modalstandar() {
  const [data, setData] = useState([]);
  const [datas, setDatas] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);


  //  function handleShow() {
  //     var id=JSON.parse(window.localStorage.getItem('vt'))

  //     fetch(`http://localhost:8000/template/?key=${id}`)
  //       .then((result) => {
  //         result.json().then((res) => {
  //           setData(res);
  //           console.log(res);
  //         });
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //       setShow(true);
  //    }


  function handleShow() {
    var id = JSON.parse(window.localStorage.getItem('vt'));
    fetch(`http://localhost:8000/template/?key=${id}`)
        .then((result) => {
            result.json().then((res) => {
                setData(res);
                console.log(res);
            });
        })
        .catch((error) => {
            console.error(error);
        });

       var email = window.localStorage.getItem('basic');
       console.log(email)
    fetch(`http://localhost:8000/template/?email=${email}`)
    
        .then((result) => {
            result.json().then((res) => {
              setDatas(res);
                console.log(res);

                console.log(res[0]["basic_name"]);
                document.getElementById("ba1").innerText = res[0]["basic_name"];
                document.getElementById("ba2").innerText = res[0]["basic_email"];
                document.getElementById("ba3").innerText = res[0]["basic_number"];
                document.getElementById("ba4").innerText = res[0]["linkedin"];
                document.getElementById("ba5").innerText = res[0]["overflows"];
                document.getElementById("ba6").innerText = res[0]["gitHubs"];
                document.getElementById("ba7").innerText = res[0]["skypes"];
                document.getElementById("ba8").innerText = res[0]["basic_address"];
                document.getElementById("ba9").innerText = res[0]["basic_pobpostion"];
                document.getElementById("ba10").innerText = res[0]["basic_summary"];


                          // <------------Experiences ---------------------->

          document.getElementById("ex1").innerText = res[0]["estart_date"];
          document.getElementById("ex2").innerText = res[0]["eend_date"];
          document.getElementById("ex3").innerText = res[0]["ecompanyname"];
          document.getElementById("ex4").innerText = res[0]["ecompanyaddress"];
          document.getElementById("ex5").innerText = res[0]["eyourpostion"];
          document.getElementById("ex6").innerText = res[0]["eyourexperience"];

            });
        })
        .catch((error) => {
            console.error(error);
        });

    setShow(true);
}




  const renderHTML = (rawHTML) => {
    return { __html: rawHTML };
  };



  
  return (
    <>
      <Button onClick={handleShow} className="bg-danger text-dark border border-danger">Preview</Button>
      <Modal show={show} onHide={handleClose}>
      
          {data.map((item) => (
            <div> 
              <div>
                <div dangerouslySetInnerHTML={renderHTML(item.html)} />
                {/* <button style={{float:'right'}} className="mt-3">Download</button> */}
              {/* {
                datas.map((item)=>
                <>
                <div>{item.basic_name}</div>
                <div>{item.basic_email}</div>
                </>
                )
              } */}
              </div>
         
            </div>
          ))}
       
      </Modal>
    </>
  );
}

export default Modalstandar;









// import { Dropdown } from "bootstrap";
// import { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import Basicinfo from "./Standard/Basicinfo";

// function Modalstandar() {
//   const [data, setData] = useState([]);
//   const [datas, setDatas] = useState([]);
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);

//   //  function handleShow() {
//   //     var id=JSON.parse(window.localStorage.getItem('vt'))

//   //     fetch(`http://localhost:8000/template/?key=${id}`)
//   //       .then((result) => {
//   //         result.json().then((res) => {
//   //           setData(res);
//   //           console.log(res);
//   //         });
//   //       })
//   //       .catch((error) => {
//   //         console.error(error);
//   //       });
//   //       setShow(true);
//   //    }

//   function handleShow() {
//     var id = JSON.parse(window.localStorage.getItem("vt"));
//     fetch(`http://localhost:8000/template/?key=${id}`)
//       .then((result) => {
//         result.json().then((res) => {
//           setData(res);
//           console.log(res);
//         });
//       })
//       .catch((error) => {
//         console.error(error);
//       });

//     var email = window.localStorage.getItem("basic");
//     console.log(email);
//     fetch(`http://localhost:8000/template/?email=${email}`)
//       .then((result) => {
//         result.json().then((res) => {
//           setDatas(res);
//           console.log(res);

//           // <------------basic info----------------------->

          // console.log(res[0]["basic_name"]);
          // document.getElementById("ba1").innerText = res[0]["basic_name"];
          // document.getElementById("ba2").innerText = res[0]["basic_email"];
          // document.getElementById("ba3").innerText = res[0]["basic_number"];
          // document.getElementById("ba4").innerText = res[0]["linkedin"];
          // document.getElementById("ba5").innerText = res[0]["overflows"];
          // document.getElementById("ba6").innerText = res[0]["gitHubs"];
          // document.getElementById("ba7").innerText = res[0]["skypes"];
          // document.getElementById("ba8").innerText = res[0]["basic_address"];
          // document.getElementById("ba9").innerText = res[0]["basic_pobpostion"];
          // document.getElementById("ba10").innerText = res[0]["basic_summary"];

          // // <------------Experiences ---------------------->

          // document.getElementById("ex1").innerText = res[0]["estart_date"];
          // document.getElementById("ex2").innerText = res[0]["eend_date"];
          // document.getElementById("ex3").innerText = res[0]["ecompanyname"];
          // document.getElementById("ex4").innerText = res[0]["ecompanyaddress"];
          // document.getElementById("ex5").innerText = res[0]["eyourpostion"];
          // document.getElementById("ex6").innerText = res[0]["eyourexperience"];

//           // <------------Education ---------------------->

//           document.getElementById("ed1").innerText = res[0]["education_sdate"];
//           document.getElementById("ed2").innerText = res[0]["education_edate"];
//           document.getElementById("ed3").innerText = res[0]["education_degree"];
//           document.getElementById("ed4").innerText = res[0]["education_institute"];

//           // <------------Refrences  ---------------------->

//           document.getElementById("re1").innerText = res[0]["refrences_name"];
//           document.getElementById("re2").innerText = res[0]["refrences_number"];
//           document.getElementById("re3").innerText = res[0]["refrences_email"];
//           document.getElementById("re4").innerText =res[0]["refrences_relation"];
//           document.getElementById("re4").innerText = res[0]["refrences_company"];

//           // <------------Expertise  ---------------------->

//           document.getElementById("exp1").innerText = res[0]["expertise_skill"];

//           // <------------Languages  ---------------------->

//           document.getElementById("la1").innerText = res[0]["languages_name"];

//           // <------------Achievements  ---------------------->

//           document.getElementById("ac1").innerText = res[0]["award_name"];
//           document.getElementById("ac2").innerText = res[0]["awarded_by"];
//           document.getElementById("ac3").innerText = res[0]["awarded_date"];
//           document.getElementById("ac4").innerText = res[0]["achiev_summary"];

//           // <------------Certification  ---------------------->

//           document.getElementById("ce1").innerText =res[0]["certification_name"];
//           document.getElementById("ce2").innerText =res[0]["certification_institue"];
//           document.getElementById("ce3").innerText =res[0]["certification_date"];
//           document.getElementById("ce4").innerText =res[0]["certification_link"];
//           document.getElementById("ce5").innerText =res[0]["certification_company"];

//           // <------------Interests---------------------->

//           document.getElementById("in1").innerText = res[0]["interests_hobbies"];
//         });
//       })

//       .catch((error) => {
//         console.error(error);
//       });

//     setShow(true);
//   }

//   const renderHTML = (rawHTML) => {
//     return { __html: rawHTML };
//   };

//   return (
//     <>
//       <Button onClick={handleShow}>Preview</Button>
//       <Modal show={show} onHide={handleClose}>
//         {data.map((item) => (
//           <div>
//             <div>
            
//               <div dangerouslySetInnerHTML={renderHTML(item.html)} />
//             </div>
//           </div>
//         ))}
//       </Modal>
//     </>
//   );
// }

// export default Modalstandar;