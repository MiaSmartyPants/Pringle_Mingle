import React from 'react'
import { useEffect, useState } from "react";



 const Fetch = ({user, recieveAdminData}) => {
    const [adminData, setAdminData] = useState();

    function getAdmin(){
  let email = user.email
  console.log('fetch', email)

  fetch(`http://localhost:5050/adminemail/${email}`)
	  
  //return the response
  .then((response) => response)
  .then((data) => {
    return data.json();
  })
  .then((data)=> {
    console.log("data", data)
    setAdminData(data)
    recieveAdminData(data)
  })
  .catch((error) => {
    console.error('Error:', error);
 });
}

useEffect(() => {
   
    getAdmin();
       
  
      
    },[]);
  return (
<div>
   
</div>
  )
}
export default Fetch;

