import React from "react";
import '../App.css'
import { GroupsOfNames } from "../components/GroupsOfNames";

export default function Groups({data}) {

  if(!data){
    return null;
}


  return (
    <div >
      <h1>Display Groups here</h1>
      <h3> groups from table h2 2022 here</h3>
      <GroupsOfNames data={data}/>
     
export to sheets here
    </div>
  );
}
