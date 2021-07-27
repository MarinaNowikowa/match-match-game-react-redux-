import { combineReducers } from 'redux'
import  userReducer  from '../reducers/userReducer'
import  gameReducer  from '../reducers/game'
import resultsReducer  from '../reducers/results'

export const rootReducer = combineReducers({
    user: userReducer,
    game: gameReducer,
    results: resultsReducer
})