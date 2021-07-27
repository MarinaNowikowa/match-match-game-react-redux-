import React, {useEffect, useState} from 'react';
import ResultTableRow from "./resultTableRow";

const ResultsTable = (props) => {
  const results = JSON.parse(localStorage.getItem('users'))
  // const [results, setResults] = useState(null)
    
  // useEffect(()=>{
  //     if(localStorage.getItem('users') !==null || []){
  //       setResults(JSON.parse(localStorage.getItem('users')))
  //     } 
  // }, [])
    
    if(localStorage.getItem('users') ==null || []){
        (<div className="profile_loading"> No games...</div> )
      } else{
        JSON.parse(localStorage.getItem('users'))
      }

    return (

      <div className="results wrapper">
        <h3 style={{fontSize: "20px", textAlign:'center', fontWeight:"700" }}>Top results</h3>
        <table style={{ width: 600, fontSize: "20px" }}>
            <thead>
            <tr>
                <th style={{ width: 300, textAlign:'center'}}>place</th>
                <th style={{ width: 300, textAlign:'center'}}>player</th>
                <th style={{ width: 300, textAlign:'center'}}>score</th>
            </tr>
            </thead>
            <tbody>
           {results.sort((a, b) => a.time - b.time).map((item, i) => <ResultTableRow
                    key={i}
                    place={i + 1}
                    player={`${item.firstName} ${item.lastName}`}
                    score={item.time}
                />
            )}
            </tbody>
        </table>
       
      </div>
      
    )
}

export default ResultsTable;