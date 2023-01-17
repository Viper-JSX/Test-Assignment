import { CLEAR_USERS_DATA, GET_USER } from "./action_types";

export function getUser(payload){
    return { type: GET_USER, payload };
}

export function clearUsersData(){
    return { type: CLEAR_USERS_DATA };
}