import React from "react";
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";
import { RetrieveOrg } from "../components/RetrieveOrg";
import { Profile } from "../components/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";



import { Link } from 'react-router-dom';



export default function LandingPage() {
  const { user, isAuthenticated } = useAuth0();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [org_name, setOrgName] = useState();
  const [org_id, setOrgId] = useState();

  useEffect(() => {
    // CALL here
    setEmail(user?.email)
    setName(user?.name)


  }, [isAuthenticated])


  function orgValidation() {
    const orgName = prompt('Please enter organization name')

    if (email.includes(orgName.toLowerCase().replace(/\s/g, ''))) {
      setOrgName(orgName.toLowerCase().replace(/\s/g, ''));
    } else {
      alert( "Organization not found. Please use organization email or try again");
      orgValidation()
    }
  }


  function addToAdmin() {
    console.log('addToAdmin')
    fetch('http://localhost:5050/admin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        console.log("post", data)
        if (data.includes('already exists')) {
          console.log('take me to dashboard')
        } else {
          orgValidation();
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }


  if (org_name) {
    console.log(org_name)
    addToOrganization();
  }

// Onnce the organization of the user has been  validated, the organization is sent to the database to return an org id
  //post to organizations
  function addToOrganization() {
    fetch('http://localhost:5050/organizations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ org_name }),
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        if (data.includes('already exists')) {
          console.log('org: take me to dashboard')
          console.log('update user to inlcude compnay id')
          getOrganizations()
        } else {
          console.log('else: update user to include orid')
          getOrganizations();
          // updateAdmin();
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }



  function getOrganizations() {
    fetch(`http://localhost:5050/organizations/${org_name}`)

      //return the response
      .then((response) => response)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log("data", data)
        setOrgId(data[0].id)
      })
  }

  useEffect(() => {
    // CALL here
    if (email && org_id) {
      updateAdmin()
    }



  }, [org_id, email])

  function updateAdmin() {
    //finally this function will get the admin org id for the whole program
    console.log('org_id', org_id)
    fetch(`http://localhost:5050/adminupdate/${email}`, {
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
    <div className="landing">



      <section id="home">
        <div className="container">
          <div className="home-text">
            <div className="section-text__subtitle">App landing page</div>
            <div className="section-text__title-big">
              No stress wth Pringle Mingle
            </div>
            <div className="section-text__body">
              Dorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusm
              tempor incididunt ulabore et dolore magna aliqua.
            </div>
            {!isAuthenticated && (

              <div className="download-btn">
                <LoginButton />
              </div>
            )}
            {!!isAuthenticated && (
              <div>
                Signin Successful
                <br></br>

                <button className="download-btn" onClick={addToAdmin}>Welcome in!</button>

              </div>
            )}
          </div>

          <div className="section-image">
            <img src="./images/hero_right.webp" alt="app preview" />
          </div>
        </div>
      </section>
      );

    </div>
  )
}


