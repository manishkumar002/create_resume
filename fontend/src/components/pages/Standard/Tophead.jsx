import React from 'react'
import { Link } from 'react-router-dom';
import '../../styles/Tophead.css';
import { BsChevronRight } from "react-icons/bs";
export default function Tophead() {
  return (
    <div>
         <div className='w-color fs-3 mt-4'>
                    <span><button className='info-button'>1</button><Link to="/basicinfo" className='linklinenone'>Basic Info</Link><BsChevronRight className='fs-4'/></span>&nbsp;
                    <span> <button className='info-button'>2</button><Link to="/experiences" className='linklinenone'> Experiences </Link><BsChevronRight className='fs-4'/></span>&nbsp;
                    <span> <button className='info-button'>3</button> <Link to="/education" className='linklinenone'>Education</Link> <BsChevronRight className='fs-4'/></span>&nbsp;
                    <span> <button className='info-button'>4</button> <Link to="/refrences" className='linklinenone'>Refrences</Link> <BsChevronRight className='fs-4'/></span>&nbsp;
                    <span> <button className='info-button'>5</button><Link to="/expertise" className='linklinenone'> Expertise </Link><BsChevronRight className='fs-4'/></span>
                    <span> <button className='info-button'>6</button><Link to="/languages" className='linklinenone'> Languages </Link><BsChevronRight className='fs-4'/></span><br/>
                    <span> <button className='info-button'>7</button><Link to="/achievements" className='linklinenone'> Achievements</Link><BsChevronRight className='fs-4'/></span>&nbsp;&nbsp;
                    <span> <button className='info-button'>8</button><Link to="/certification" className='linklinenone'> Certification </Link><BsChevronRight className='fs-4'/></span>&nbsp;&nbsp;
                    <span> <button className='info-button'>9</button> <Link to="/interests" className='linklinenone'>Interests</Link><BsChevronRight className='fs-4'/></span>
                    <span> <button className='info-button'>10</button><Link to="/download" className='linklinenone'> Download </Link><BsChevronRight className='fs-4'/></span>
                </div>
    </div>
  )
}
