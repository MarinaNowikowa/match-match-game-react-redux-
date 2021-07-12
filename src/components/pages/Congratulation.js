import React from "react"
import { Result, Button } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";

export default function Congratulation (){
  
  const handleWin = (didWin) => didWin;
  
  let history = useHistory();
  
  function handleClick() {
    history.push("/records");
  }

  return (
     <div>
        <div className={`transition win-div win-div-text ${handleWin ? "active" : ""}`}
        >Congratulations, you've won!</div>
         <Result
           icon={<SmileOutlined style={{color: '#F4B02B'}}/> }
           extra={<Button type="primary" style={ {background: '#F4B02B', width:"160px"}} onClick={handleClick}>Go to Records</Button>}
         />
      </div>
       
    )
}