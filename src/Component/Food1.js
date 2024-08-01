import React from 'react'
import "./Food1.css";
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
function Food1() {
  return (
    <div className='pdMainContainer'>
      <div className='pdLConatiner'>
        <Link to="addFood">ADD</Link>
        <Link to="deleteFood">DELETE</Link>
        <Link to="details">DETAILS</Link>
        <Link to="updateFood">UPDATE</Link>
        <Link to="searchFood">SEARCH</Link>
      </div>
      <div className='pdRContainer'>
        <Outlet/>
      </div>
    </div>
  )
}

export default Food1