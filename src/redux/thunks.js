import { GET_POSITIONS, GET_USERS, HIDE_MESSAGE, SHOW_MESSAGE, SIGN_UP } from "./action_types";
import { axiosClient } from "../api/axios/axios_client";

export function getUsers(payload){
    return async function(dispatch){
        const usersData = await axiosClient.get(payload.url)
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
        .then((response) => response.data.token)
        .catch((err) => console.log(err));

        const user = axiosClient.post("/users", { ...payload.signUpData, photo: undefined }, { headers:{ 'Token': token } } )
        .then((response) => console.log(response))
        .catch((error) => console.log(error));

        if(!user){
            dispatch({ type: SHOW_MESSAGE, payload: { messageTitle: "Cannot post the user", messageText: "Sign up not success"  } })
            return;
        }
        
        //dispatch({ type: SIGN_UP, payload: { user } });
    }
}


export function showMessage(payload){
    return function(dispatch){
        dispatch({ type: SHOW_MESSAGE, payload })
        setTimeout(() => dispatch({ type: HIDE_MESSAGE }), 5000);
    }
}