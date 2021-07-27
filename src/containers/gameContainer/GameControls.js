import React, {useState} from 'react';
import { Row, Button} from 'react-bootstrap';


export default function GameControls({ didGameStart, didWin, handleGameStart }) {
    const [isActive, setIsActive] = useState(false);

    const setNewGame = () => {
    handleGameStart(false);
    setIsActive(false)
    }

    return (
        <Row className="justify-content-md-center top-padding">
            <Button 
                size="lg" 
                style={{ width: "260px", background: '#F4B02B'}} 
                onClick={() => handleGameStart(true)}
                className={!didWin && !didGameStart ? "show-control" : "hide-control"}>Start Game
            </Button>
            <Button 
                variant="info" 
                size="lg" 
                style={{ width: "260px" }} 
                onClick={() => setNewGame()}
                className={didWin || didGameStart ? "show-control" : "hide-control"}>Restart game
            </Button>
            
        </Row>
    );
}