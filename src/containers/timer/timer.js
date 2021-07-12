import React, { useEffect } from 'react';

const Timer = ({time, timerOn, setTime}) => {
  useEffect(() => {
    let interval = null;
    if (timerOn) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [time, timerOn, setTime]);

  return (
      <>
        <span> {("0" + Math.floor((time / 60000) % 60)).slice(-2)} :</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)} :</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </>
  );
};

export default Timer