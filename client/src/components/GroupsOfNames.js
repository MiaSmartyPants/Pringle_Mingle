import React from 'react'

export const GroupsOfNames = ({data}) => {


  return (
    <div>

      {/* encase the whole thing in a map? */}
      <h3>{data.groupName}</h3>
      <table class="styled-table">
      <thead>
        <tr>
         
          <th>First Name</th>
          <th>Last Name</th>
       
          
        </tr>
      </thead>
 
      <tbody>
        {data.mockData.map((item, index) => (
          <tr key={item.key}>
         
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
           
            <td />
          </tr>
        ))}
      </tbody>
    </table> 

    </div>
  )
}
