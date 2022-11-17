import React from 'react';
import {useAuth0} from "@auth0/auth0-react";

export const Profile = () => {

const {user,isAuthenticated}= useAuth0();
// console.log(JSON.stringify(user,null,2))


  return (
    !!isAuthenticated && (

        <div style={{color: "white"}}>

        <img src={user.picture} alt={user.name}/>
        <h2>{user.name}</h2>
      </div>
    )
  )
}
