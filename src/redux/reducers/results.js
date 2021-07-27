import {
    PREPARE_RESULTS_TO_STATE, 
    CLEAR_PREPARED_ARRAY
} from "../actions/types/index";


const resultsReducer = (state = {apiError: '', preparedArray: []}, action) => {
    switch (action.type) {
        case PREPARE_RESULTS_TO_STATE:
            return {...state, preparedArray: action.preparedArray};
        case CLEAR_PREPARED_ARRAY:
            return {...state, preparedArray: []};
        default:
            return state;
    }
};

export default resultsReducer;