import React from 'react'
import { useState } from 'react';


export const RetrieveOrg = ({func}) => {
    const [org_name, setOrgName] = useState();
    const updateOrgName = (e) => { setOrgName(e.target.value) }

  return (
    <div>
        <form onSubmit={func(org_name)}>
          <label>Organization Name?</label>
          <br></br>
          <input type='text' onChange={updateOrgName}/>
          <input type='submit' />
        </form>
    </div>
  )
}
