import React from 'react'
import { useNavigate } from 'react-router-dom'
function Home() {
    var navigate=useNavigate("");
  return (
    <div>
        <h2>Home Page</h2>

  <img src="https://tse4.mm.bing.net/th?id=OIP.uZtqNsdAsAbbLFeCAirDsgHaEK&pid=Api&P=0&h=180" height="200px" width="200px" alt='No'></img>
  <br></br><br></br><br></br>
  <button className='btn btn-outline-primary' onClick={()=>{
    navigate("/login")
  }}>Login</button>&nbsp;&nbsp;
  <button className='btn btn-outline-warning' onClick={()=>{
     navigate("/register")
  }}>Register</button>
    </div>
  )
}

export default Home