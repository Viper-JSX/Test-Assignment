import { END_USERS_LOADING, GET_POSITIONS, GET_USERS, HIDE_MESSAGE, SHOW_MESSAGE, SIGN_UP, START_USERS_LOADING } from "./action_types";
import { axiosClient } from "../api/axios/axios_client";

export function getUsers(payload){
    return async function(dispatch){
        dispatch({ type: START_USERS_LOADING });
        const usersData = await axiosClient.get(payload.url)
        .then((response) => response.data);
    
        dispatch({ type: GET_USERS, payload: { usersData } });
        dispatch({ type: END_USERS_LOADING });
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
        const formData = new FormData();
        formData.append("name", payload.signUpData.name);
        formData.append("email", payload.signUpData.email);
        formData.append("phone", payload.signUpData.phone);
        formData.append("position_id", payload.signUpData.position_id);
        formData.append("photo", payload.signUpData.photo[0]);
        console.log(payload.signUpData.photo[0]);

        const token = await axiosClient.get("/token")
        .then((response) => response.data.token)
        .catch((err) => console.log(err));

        const userId = await axiosClient.post("/users",  formData, { headers:{ 'Token': token } } )
        .then((response) => response.data.user_id)
        .catch((error) => {
            dispatch({ type: SHOW_MESSAGE, payload: { messageTitle: "Cannot post the user", messageText: "Sign up not success"  } })
            return;
        });
        
        console.log(userId);

        //dispatch({ type: SIGN_UP, payload: { user } });
    }
}


export function showMessage(payload){
    return function(dispatch){
        dispatch({ type: SHOW_MESSAGE, payload })
        setTimeout(() => dispatch({ type: HIDE_MESSAGE }), 5000);
    }
}