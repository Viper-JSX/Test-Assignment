import { defaultState } from "./default_state";

export function users(state = defaultState.users, action){
    switch(action.type){
        default:{
            return state;
        }
    }
}