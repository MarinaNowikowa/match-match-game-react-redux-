import React from 'react';

const ResultTableRow = (props) => (
    <tr>
        <td style={{ width: 300, textAlign:'center'}}>{props.place}</td>
        <td style={{ width: 300, textAlign:'center'}}>{props.player}</td>
        <td style={{ width: 300, textAlign:'center'}}>{props.score}</td>
    </tr>
);
export default ResultTableRow;