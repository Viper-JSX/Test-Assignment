import { CLEAR_USERS_DATA, END_SIGN_UP_PROCESSING, START_SIGN_UP_PROCESSING } from "./action_types";

export function clearUsersData(){
    return { type: CLEAR_USERS_DATA };
}

export function startSignUpProcessing(){
    return { type: START_SIGN_UP_PROCESSING };
}

export function endSignUpProcessing(){
    return { type: END_SIGN_UP_PROCESSING };
}