import { useEffect} from 'react';
// import { Row, Col } from 'react-bootstrap';

export default function Timer  ({isActive, seconds, setSeconds}) {

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, setSeconds]);

        
        
  return (
    // <Row className="justify-content-md-center">
    //      <Col md="3"></Col>
    //      <Col md="2" className="text-right">
    //          <label className="red control-label">Timer </label>
    //      </Col>
    //      <Col md="3">
    //      <span> {timerOn? `${seconds} seconds`: `00:00:00`}</span>
         
    //      </Col>
    //      <Col md="4"></Col>
    //  </Row>

    // // <div className="timer wrapper">
    // //     <p>{props.time}</p>
    // // </div>

    <div style={ {textAlign: 'center'}}>
      Timer: {seconds}s
    </div>
  );
};

// export default Timer

// export const useTimer = () => {
//   const [time, setTime] = useState(0);
//   const [active, setActive] = useState(false);
//   const [timesUp, setTimesUp] = useState(false);

//   useEffect(() => {
//     console.log(time);
//     let interval = null;
//     if (timesUp) return false;
//     if (active) {
//       if (time === 0) {
//         setTimesUp(true);
//         setActive(false);
//       }
//       interval = setTimeout(() => {
//         setTime((time) => time + 1);
//       }, 1000);
//     } else {
//       clearTimeout(interval);
//     }
//   }, [time]);
     
//   return [time, setTime, active, setActive, timesUp, setTimesUp];
// };