import React,  {  useState, useContext } from 'react';
import CardContainer from '../card/cardContainer';
// import  Cards from '../card/cards'
import DifficultySelect from '../difficulty/difficultySelect';
import GameControls from './GameControls';
import Timer from "../timer/timer";
import { CurrentUserContext } from "../../services/context/currentUserContext";

// import {flipCard, restartGame, stopTimer} from "../../redux/actions/gameActions"
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';

export default function GameContent () {

    const { currentUser} = useContext(CurrentUserContext);

    const [difficulty, setDifficulty] = useState("4");
    const [gameStart, setGameStart] = useState(false)
    const [win, setWin] = useState(false);

    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    
    const handleDifficulty = () => {
        difficulty===null? (<div className="profile_loading"> Your profile doesn't exist, please enter data...</div>): setDifficulty(currentUser.difficulty )
    };
    
    // const startTimer = ()=>{
    //     setIsActive(true)
    //     setSeconds(0)
    // }
    // const stopTimer = ()=>{
    //   setIsActive(false)
    // }
    

    const handleGameStart = (e) => {
        setGameStart(e);
        handleWin(false);
        setDifficulty(currentUser.difficulty/2)
        // setIsActive(true)
    }
    const handleWin = (didWin) => {
        setWin(didWin);
       
    }
    
    if(!currentUser){
        return  <div className="profile_loading"> Your profile doesn't exist, please enter data...</div>
      }

    return (
         <>
            <DifficultySelect handleDifficulty={handleDifficulty} />
            <Timer isActive={isActive} seconds={seconds} setSeconds={setSeconds} />
            <GameControls didGameStart={gameStart} didWin={win} handleGameStart={handleGameStart}  />
            <CardContainer difficulty={difficulty} didWin={win} handleWin={handleWin} 
                className={gameStart ? "active" : ""} />
        
        </>
    )
    
    
} 

// function mapStateToProps(state) {
//     return {
//         gameField: state.game.gameField,
//         blockedCard: state.game.gamePlay.blockedCard,
//         timer: state.game.gamePlay.timer
//     }
// }

// function mapDispatchToProps(dispatch) {
//     return {
//         cardFlip: bindActionCreators(flipCard, dispatch),
//         restartGame: bindActionCreators(restartGame, dispatch)
//     }
// }

// export default connect (mapStateToProps, mapDispatchToProps)(GameContent);