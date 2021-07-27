import { useHistory } from 'react-router-dom';
import {
    FILL_CARDS_STATE,
    CLEAR_GAME_FIELD,
    DECREASE_COUNTER,
    INIT_GAME_PLAY,
    
    TICK
 }
from "./types"
import {shuffle} from "../../containers/gameContainer/utils"
import CardItem from "../../containers/card/cardItem"

let st;
export const startTimer = () => {
    return (dispatch) => {
        st = setInterval(() => {
            dispatch(tick())
        }, 1000);
    };
};

export const stopTimer = () => {
    return clearInterval(st);
};

const tick = () => {
    return {
        type: TICK
    }
};


const prepareCardArray = (difficulty) =>
    Array.from({length: difficulty}, (e, i) => new CardItem(i % (difficulty / 2), false, false, ''));

const fillCardsState = (difficulty) => {
    return {
        type: FILL_CARDS_STATE,
        cards: shuffle(prepareCardArray(difficulty))
    }
};

export const clearGameField = () => {
    return {
        type: CLEAR_GAME_FIELD
    }
};

export const decreaseCounter = () => {
    return {
        type: DECREASE_COUNTER
    }
};

const initGamePlay = (difficulty) => {
    return {
        type: INIT_GAME_PLAY,
        difficulty
    }
};

export const initGame = (difficulty, shirt) => {
    return (dispatch) => {
        dispatch(clearGameField());
        dispatch(initGamePlay(difficulty));
        dispatch(fillCardsState(difficulty, shirt));
    }
};