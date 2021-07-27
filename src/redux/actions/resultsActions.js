import {
    PREPARE_RESULTS_TO_STATE,
    
 }
from "./types"

const RESULTS_URL = '';
const COUNT_OF_RESULTS = 10;
const LOAD_ERROR = 'Unable to load results list';

export const getResultsFromServer = () => {
    return (dispatch) => {
        fetch(RESULTS_URL)
            .then((response) => response.json() || [])
            .then((results) => {
                dispatch(prepareResultsToState(results['result'].sort((a, b) => a.time - b.time).splice(0, COUNT_OF_RESULTS)))
            })
            .catch((e) => {
                console.error(LOAD_ERROR, e);
            });

    };
};

const prepareResultsToState = (preparedArray) => {
    return {
        type: PREPARE_RESULTS_TO_STATE,
        preparedArray
    }
};