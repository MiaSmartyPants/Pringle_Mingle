import React from 'react'

export const TableOfNames = ({data}) => {


  return (
    <div>TableOfNames

     {/* encase the whole thing in a map? */}
     <h3>{data.tableName}</h3>
     <table class="styled-table">
     <thead>
       <tr>
        
         <th>First Name</th>
         <th>Last Name</th>
         <th>Edit</th>
         <th>Delete</th>
         
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
