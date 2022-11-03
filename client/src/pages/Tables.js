import React from "react";
import '../App.css'
export default function Tables({data}) {
    if(!data){
        return null;
    }

    console.log(data);
  return (
    <div >
       <h1>{data.Header}</h1>

      <table class="styled-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
          <th>Options</th>
        </tr>
      </thead>

      <tbody>
        {data.mockData.map((item, index) => (
          <tr key={item.key}>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.address}</td>
            <td />
          </tr>
        ))}
      </tbody>
    </table> 
  
    </div>
  );
}