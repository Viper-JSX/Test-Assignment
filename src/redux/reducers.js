import { CLEAR_USERS_DATA, END_SIGN_UP_PROCESSING, END_USERS_LOADING, GET_POSITIONS, GET_USER, GET_USERS, HIDE_MESSAGE, SHOW_MESSAGE, SIGN_UP, START_SIGN_UP_PROCESSING, START_USERS_LOADING } from "./action_types";
import { defaultState } from "./default_state";

export function users(state=defaultState.users, action){
    switch(action.type){
        case GET_USERS: {
            return { ...state, usersData: action.payload.usersData, users: [ ...state.users, ...action.payload.usersData.users ] };
        }
        case CLEAR_USERS_DATA: {
            return { ...defaultState.users, positions: state.positions  };
        }
        case GET_POSITIONS: {
            return {...state, positions: action.payload.positions };
        }
        case START_USERS_LOADING:{
            return { ...state, usersAreLoading: true };
        }
        case END_USERS_LOADING: {
            return { ...state, usersAreLoading: false };
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
        case START_SIGN_UP_PROCESSING: {
            return { ...state, signUpProcessing: true };
        }
        case END_SIGN_UP_PROCESSING: {
            return { ...state, signUpProcessing: false };
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