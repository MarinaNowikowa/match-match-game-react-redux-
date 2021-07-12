import React from "react"

// toRecords(){
//   let table = {};
//   if(localStorage.people == undefined){
//       table['1'] = currentSettings.person;
//       let serialobj = JSON.stringify(table);
//       window.localStorage.setItem("people",serialobj);
//   }else{
//       let countOFPeople = Object.keys(JSON.parse(localStorage.getItem("people"))).length;
//       let ObjectOfElements = JSON.parse(localStorage.getItem("people"));
//       ObjectOfElements [`${countOFPeople + 1}`] = currentSettings.person;
//       let serialobj = JSON.stringify(ObjectOfElements);
//       window.localStorage.setItem("people",serialobj);
//   }
// }

export default function Records(){
    return (
        <div>
        <h2>Records</h2>
      </div>
    )
}