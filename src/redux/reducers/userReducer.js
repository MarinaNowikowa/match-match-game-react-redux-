import {
    GET_USER
} from "../actions/types"

const initialState={
   user:{
    firstName:"",
    lastName:"",
    difficulty: "12"
   }
}

export default function userReducer(state = initialState, {type, payload}) {
   switch(type){
       case GET_USER:
           return {
            ...state,
            user:payload
        }
       
        
    default:
       return state;
   }
}