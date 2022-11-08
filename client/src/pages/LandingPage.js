import React from "react";
import  LoginButton  from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";
import { RetrieveOrg } from "../components/RetrieveOrg";
import { Profile } from "../components/Profile";
import {useAuth0} from "@auth0/auth0-react";
import { useState,useEffect } from "react";

 
export default function LandingPage() {
  const {user,isAuthenticated}= useAuth0();
  
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [org_name, setOrgName] = useState();
  const [org_id, setOrgId] = useState();
 
  useEffect(() => {
		// CALL here
		 setEmail(user?.email)
     setName(user?.name)
    
    
  },[isAuthenticated])
  

     //onsumbit take the user input, send it to the database aloong with the user email and name
  // const validation = (e) => {
  //   e.preventDefault();
// when user logs in add their info to admins table (addToAdmin),x
//if the user already exist, load welcome components,x 
//if user does not exist
//prompt for organization name,x
//when name is submitted, add to organization, if name exists, update admin user to include company name, if name does exist,update admin to company name
//in order to update admin with company name, company id must be sent back and made to a gloable variable
  //post to admin table

  function addToAdmin(){
   fetch('/admin', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({name, email}),
       })
         .then(response => {
           return response.text();
         })
         .then(data => {
            console.log("post", data)
            if(data.includes('already exists')){
            
             console.log('take me to dashboard')
            }else{
              console.log('user added')
              const orgName = prompt('Please enter organization name')
              console.log(orgName.toLowerCase())
              setOrgName(orgName.toLowerCase());
            }
          })
          .catch((error) => {
           console.error('Error:', error);
        });
      }

//if isAuthenticated add admin to table, 
  //if duplication (change coulmn restraint to unique) message, welcome in page
  //else
//then replace getData() with addToOrganization table,
        //post to organizations
          //if duplication
          //else
          // if success message call update admin to inlude org_id

if(org_name){
  console.log(org_name)
  addToOrganization();
}

        //post to organizations
        function addToOrganization(){
        fetch('/organizations', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({org_name}),
       })
         .then(response => {
           return response.text();
         })
         .then(data => {
          if(data.includes('already exists')){
            console.log('org: take me to dashboard')
            console.log('update user to inlcude compnay id')
            getOrganizations()
          }else{
          console.log('else: update user to include orid')
          getOrganizations();
          // updateAdmin();
          }
          })
          .catch((error) => {
           console.error('Error:', error);
        });
  }


  //soon to be getusersbyorgid
  // function getData() {
	//    fetch(`/admin/${id}`)
	  
	//   //return the response
	// 	.then((response) => response)
	// 	.then((data) => {
	// 	  return data.json();
	// 	})
	// 	.then((data)=> {
	// 	  console.log("data", data)
	// 	})
	//  } 

function getOrganizations(){
  fetch(`/organizations/${org_name}`)
	  
	  //return the response
		.then((response) => response)
		.then((data) => {
		  return data.json();
		})
		.then((data)=> {
		  console.log("data", data)
      setOrgId(data[0].id)
		})
 }

 useEffect(() => {
  // CALL here
  updateAdmin()
  
  
},[org_id])

 function updateAdmin(){
  //finally this function will get the admin org id for the whole program
  console.log('org_id', org_id)
  fetch(`/admin/${email}`, {
    method: "PUT",
    headers: {
     "Content-Type": "application/json",
    },
    body: JSON.stringify({ org_id }),
   })
   .then(response => {
    return response.text();
  })
  .then(data => {
   console.log('data?', data)  
   })
   .catch((error) => {
    console.error('Error:', error);
 });
  }



  return (
    <div >
      <h1>Landing Page</h1>
      {!isAuthenticated && (
        
      <div className="loginLanding">
      <LoginButton/>
      </div>
      )}
       {!!isAuthenticated && ( 
        <div>
          Signin Successful
          <br></br>
          
         <button onClick={addToAdmin}>Welcome in!</button>
         
         {/* <button onClick={getOrganizations}>Welcome in!</button> */}
        </div>
        )}
     
     
   </div>
  );
}