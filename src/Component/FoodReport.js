import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

function FoodReport() {
    let [user, setUser] = useState([]);

  
    useEffect(()=>{
        axios.get("http://localhost:8900/food/get")
        .then((res)=>{
           console.log(res.data);
           setUser(res.data);
         
        })
        .catch((error)=>{
           console.log(error);
           alert("Something wrong with geting the Data");
        })
    },[])
 
  return (
    <div>
   <h2>Food Order Infromation</h2>
  
   
   
   {
  user.length>0?<div>
<table cellPadding={10} style={{margin:"10px auto",backgroundColor:"green"}} border={10}  >
<thead className='bg-primary text-warning text-center' style={{color:"blue", margin:"30px",backgroundColor:"orange"}} >
<tr>

    <td>Food ID</td>
    <td>Food Name</td>
    <td>PRICE</td>
    
</tr>


</thead>
<tbody>


{

    user.map((element,ind)=>{

        return (
            <tr>
            
<td>{element.fid}</td>
<td>{element.fname}</td>
<td>{element.price}</td>

  
            </tr>
        )



    })






}





</tbody>



</table>

  </div>
  :<h2 style={{color:"red"}}>No Food Order Infromation</h2>
    








   }

    </div>
  )
}

export default FoodReport