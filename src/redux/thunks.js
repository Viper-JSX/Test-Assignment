import { GET_POSITIONS, GET_USERS, SHOW_ERROR, SIGN_UP } from "./action_types";
import { axiosClient } from "../api/axios/axios_client";

export function getUsers(payload){
    return async function(dispatch){
        const usersData = await axiosClient.get("/users", { params: { count: payload.count, offset: payload.offset } })
        .then((response) => response.data);
    
        dispatch({ type: GET_USERS, payload: { usersData } });
    }
}

export function getPositions(payload){
    return async function(dispatch){
        const positions = await axiosClient.get("/positions")
        .then((response) => response.data.positions);

        dispatch({ type: GET_POSITIONS, payload: { positions } });
    }
}

export function signUp(payload){
    return async function(dispatch){
        const token = await axiosClient.get("/token")
        .then((response) => response.data.token);

        
        const user = axiosClient.post("/users", {}, { headers:{ 'Token': token } } )
        .then((response) => console.log(response))
        .catch((error) => console.log(error));

        if(!user){
            dispatch({ type: SHOW_ERROR, payload: { errorTitle: "Cannot post the user", errorText: "Sign up not success"  } })

            return;
        }
        
        dispatch({ type: SIGN_UP, payload: { user } });
    }
}

//fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', { method: 'POST', body: formData, headers: { 'Token': token,  }, }) .then(function(response) { return response.json(); }) .then(function(data) { console.log(data); if(data.success) {  } else { // proccess server errors } }) .catch(function(error) {  });
