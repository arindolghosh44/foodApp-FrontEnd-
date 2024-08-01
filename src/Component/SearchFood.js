import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

function SearchFood() {
    let[food,setFood]=useState({
        fid:"",
        fname:"",
        price:""
    })
    let[data,setData]=useState({
        fid:"",
        fname:"",
        price:""
    })
    const searchData=(fid)=>{
        axios.put(`http://localhost:8900/food/get/${fid}`)
        .then((res)=>{
            console.log(res.data);
           // setFood(res.data);
           setData(res.data)
        })
        .catch((error)=>{
            console.log(error);
            alert("SOME THING WRONG ON DELETING DATA");
         })
    }
  return (
    <div style={{width:"100%",margin:"50px auto"}}>
    <h2>SearchFood by ID </h2>
    <input type="text" className='form-control' value={food.fid}
    onChange={(event)=>{
       setFood({
        ...food,
        fid:event.target.value        
       })
    }}placeholder='ENTER THE FOOD ID'/>
   
     <button className='btn btn-outline-primary' style={{marginTop:"10px"}} onClick={(fid)=>{
        searchData(food.fid);
     }}>SearchFood</button>&nbsp;&nbsp;
     <table cellPadding={10} style={{margin:"10px auto",backgroundColor:"green"}} border={10}  >
<thead className='bg-primary text-warning text-center' style={{color:"blue", margin:"30px",backgroundColor:"orange"}} >
<tr>

    <td>Food ID</td>
    <td>Food Name</td>
    <td>PRICE</td>
    
</tr>


</thead>
<tbody>




    
            <tr>
            
<td>{data.fid}</td>
<td>{data.fname}</td>
<td>{data.price}</td>

  
            </tr>
        


</tbody>



</table>



     </div>
  )
}

export default SearchFood