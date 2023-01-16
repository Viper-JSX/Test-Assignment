import { GET_USER } from "./action_types";

export function getUser(payload){
    return { type: GET_USER, payload };
}