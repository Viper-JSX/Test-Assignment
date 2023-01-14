import { GET_USERS } from "./action_types";


export function getUsers(payload){
    return async function(dispatch){
        const usersData = null;

        dispatch({ type: GET_USERS })
    }
}