import { GET_POSITIONS, GET_USERS } from "./action_types";


export function getUsers(payload){
    return async function(dispatch){
        const usersData = null;

        dispatch({ type: GET_USERS })
    }
}

export function getPositions(payload){
    return async function(dispatch){
        console.log("Getting the positions")
        const positions = null;

        dispatch({ type: GET_POSITIONS, payload: { positions } });
    }
}