import React from 'react';
import { Row, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
// import Timer from "../timer/timer";

export default function GameControls({ didGameStart, didWin, handleGameStart }) {
    // const [time, setTime] = useState(0);
    // const [timerOn, setTimerOn] = useState(false);

    const setNewGame = () => {
    handleGameStart(false);
    }

    return (
        <Row className="justify-content-md-center top-padding">
        <span className="timer">Timer  
        {/* <Timer timerOn={timerOn} time={time} setTime={setTime}/> */}
        </span>
            <Button 
                size="lg" 
                style={{ width: "260px", background: '#F4B02B'}} 
                onClick={() => handleGameStart(true)}
                className={!didWin && !didGameStart ? "show-control" : "hide-control"}>Start Game
            </Button>
            <OverlayTrigger 
                placement={"right"}
                overlay={
                <Tooltip id="tooltip-right">
                    Restart game to change difficulty
                </Tooltip>
                }>
            <Button 
                variant="info" 
                size="lg" 
                style={{ width: "260px" }} 
                onClick={() => setNewGame()}
                className={didWin || didGameStart ? "show-control" : "hide-control"}>Restart game
            </Button>
            </OverlayTrigger>
        </Row>
    );
}