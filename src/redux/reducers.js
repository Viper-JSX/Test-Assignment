import { GET_POSITIONS, GET_USERS, HIDE_MESSAGE, SHOW_MESSAGE, SIGN_UP } from "./action_types";
import { defaultState } from "./default_state";

export function users(state=defaultState.users, action){
    switch(action.type){
        case GET_USERS: {
            return { ...state, usersData: action.payload.usersData, users: [ ...state.users, ...action.payload.usersData.users ] };
        }
        case GET_POSITIONS: {
            return {...state, positions: action.payload.positions };
        }
        default:{
            return state;
        }
    }
}


export function user(state=defaultState.user, action){
    switch(action.type){
        case SIGN_UP: {
            return { ...state, user: action.payload.user };
        }

        default: {
            return state;
        }
    }
}


export function message(state=defaultState.message, action){
    switch(action.type){
        case SHOW_MESSAGE: {
            return { messageTitle: action.payload.messageTitle, messageText: action.payload.messageText };
        }
        case HIDE_MESSAGE: {
            return null;
        }
        default: {
            return state;
        }
    }
}