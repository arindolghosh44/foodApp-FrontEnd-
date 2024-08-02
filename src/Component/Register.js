import React from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {

    var navigate=useNavigate("");


  return (
    <div>
     <h2>Register</h2>
    <card>

      <card-body>
        <div style={{width:"30%",margin:"50px auto",backgroundColor:"green"}} className='p-5 w-25'>
        <input type='text' placeholder='Enter the username' className='form-control'/><br></br><br></br>
        <input type='text' placeholder='Enter the name' className='form-control'/><br></br><br></br>
        <input type='text' placeholder='Enter the password'className='form-control'/><br></br><br></br>
       <button className='bg-primary btn btn-outline-warning '>Register</button>
       <button className='bg-primary btn btn-outline-warning' onClick={()=>{
    navigate("/")
}}>Home</button>
        </div>
     
      </card-body>
    </card>


    
     
     
    </div>
  )
}

export default Register