import { GET_POSITIONS, GET_USERS } from "./action_types";
import { defaultState } from "./default_state";

export function users(state = defaultState.users, action){
    switch(action.type){
        case GET_USERS: {
            console.log("Getting the users")
            return state;
        }
        case GET_POSITIONS: {
            return {...state, positions: action.payload.positions };
        }
        default:{
            return state;
        }
    }
}