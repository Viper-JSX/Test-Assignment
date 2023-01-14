import { GET_USERS } from "./action_types";
import { defaultState } from "./default_state";

export function users(state = defaultState.users, action){
    switch(action.type){
        case GET_USERS: {
            console.log("Getting the users")
            return state;
        }
        default:{
            return state;
        }
    }
}