import React, { useState, useEffect } from "react";
import Tophead from "./Tophead";
import '../../styles/Experties.css';
import Modalstandar from '../Modalstandard';
import { Link } from "react-router-dom";
export default function Expertise() {
  const [isChecked, setIsChecked] = useState(false);
  const[expertise_skill,	setExpertise_skill]=useState('')

  function Expert() {
    fetch("http://localhost:8000/expertis",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({expertise_skill}),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      }).then((data) => {
        console.log(data);

       
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
     
  }

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-10">
          <Tophead />
          <div className="col-sm-1"></div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
          <div className="basic-box">
            <div className="p-5 row">
              <div>
                <span>Add Expertise</span>
              </div>

              <div className="mt-5">
                <label className="f-size">Expertise/Skill</label>
                <input
                  type="text"
                  className="form-control input-basic"
                  placeholder="XYZ Manager"
                  value={expertise_skill} onChange={(e)=>{setExpertise_skill(e.target.value)}}
                />
              </div>
              <p className="b-color">
                Press <span className="text-danger">Enter</span> or click{" "}
                <span className="text-danger">Add Expertise</span> to add
                expertise.
              </p>

              <div>
               
                    <span style={{ float: "right" }}><label>
                      <input
                        checked={isChecked}
                        onChange={handleChange}
                        className="switch"
                        type="checkbox"
                      />
                      <div>
                        <div></div>
                      </div>
                    </label>
                    </span> 

                    <span style={{ float: "right" }}>
                  <b className="fs-6 p-2">Show Level</b>
                  </span> 
                  </div>
              
                <div><span style={{ float: "right" }}>
                  <button
                    className="basic-button m-1"
                    style={{
                      width: "120px",
                      height: "30px",
                      borderRadius: "10px",
                    }}
                  >
                    Add Expertise
                  </button>
                  </span>
                </div>
              
              <div className="mt-2">
                <span style={{ float: "right" }}>
                  <Link to="/languages"><button className="basic-button-blue m-1" onClick={Expert}>Next</button></Link>
                </span>
                <span style={{ float: "right" }}>
                  <button className="basic-button m-1 bg-danger"><Modalstandar/></button>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-2"></div>
      </div>
    </div>
  );
}
