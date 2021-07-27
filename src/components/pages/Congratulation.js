import React  from "react"
import { Result, Button } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";


// import {restartGame, startTimer} from "../../redux/actions/gameActions";
// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';

export default function Congratulation ({ time}){
  
  const handleWin = (didWin) => didWin;
  
  let history = useHistory();
  
  function handleClick() {
    history.push("/records");
  }

  if(localStorage.getItem('users') ==null || []){
    return (<div className="profile_loading"> Your profile doesn't exist, please enter data...</div>)
  }

  return (
     <div>
        <div className={`transition win-div win-div-text ${handleWin ? "active" : ""}`}
        >Congratulations, you've won!</div>
        <div className="displayWrapper">
          <div className="timer">Time : {time}</div>
        </div>
         <Result
           icon={<SmileOutlined style={{color: '#F4B02B'}}/> }
           extra={<Button type="primary" style={ {background: '#F4B02B', width:"160px"}} onClick={handleClick}>Go to Records</Button>}
         />
      </div>
       
    )
}
//   // useEffect(()=>{
//   //   props.saveAndGetResultToState();
//   // })
  
// function mapDispatchToProps(dispatch) {
//   return {
      
//       restartGame: bindActionCreators(restartGame, dispatch),
//       startTimer: bindActionCreators(startTimer, dispatch)
//   }
// }

//  export default connect(null, mapDispatchToProps)(Congratulation);