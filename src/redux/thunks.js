import { END_USERS_LOADING, GET_POSITIONS, GET_USERS, HIDE_MESSAGE, SHOW_MESSAGE, SIGN_UP, START_USERS_LOADING } from "./action_types";
import { axiosClient } from "../api/axios/axios_client";
import { clearUsersData, endSignUpProcessing, startSignUpProcessing } from "./action_creators";
import { usersPerRequest } from "../api/requests_config";

export function getUsers(payload){
    return async function(dispatch){
        dispatch({ type: START_USERS_LOADING });
        const usersData = await axiosClient.get(payload.url)
        .then((response) => response.data)
        .catch((error) => {
            showMessage("Network error", "You have probably been disconnected");
            return;
        });

        if(!usersData){
            dispatch(showMessage({ messageTitle: "Network error", messageText: "You have probably been disconnected" }));
            return;
        }

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
        dispatch(startSignUpProcessing());

        const formData = new FormData();
        formData.append("name", payload.signUpData.name);
        formData.append("email", payload.signUpData.email);
        formData.append("phone", payload.signUpData.phone);
        formData.append("position_id", payload.signUpData.position_id);
        formData.append("photo", payload.signUpData.photo[0]);

        const token = await axiosClient.get("/token")
        .then((response) => response.data.token)
        .catch((err) => console.log("Cannot get the token"));

        const userId = await axiosClient.post("/users",  formData, { headers:{ 'Token': token } } )
        .then((response) => response.data.user_id)
        .catch((error) => {

            if(error.response){
                switch(error.response.status){
                    case 409: {
                        dispatch(showMessage({ messageTitle: "Cannot post the user", messageText: error.response.data.message }));
                        break
                    }
                    case 422: {
                        dispatch(showMessage({ messageTitle: "Validation error", messageText: error.response.data.messae }));
                        break
                    }
                    default: {
                        dispatch(showMessage({ messageTitle: "Error", messageText: "Unknown error has occured" }));
                        break
                    }
                }
                return;
            }
            
            dispatch(showMessage({ messageTitle: "Network error", messageText: "You have probably been disconnected" }));
            return;
        });
        
        if(userId){ //User was created
            const user = await axiosClient.get(`/users/${userId}`).
            then((response) => response.data.user)
            .catch((err) => console.log("Cannot get the user"));
    
            if(!user){
                dispatch(showMessage({ messageTitle: "Network error", messageText: "You have probably been disconnected" }));
                return;
            }

            dispatch({ type: SIGN_UP, payload: { user } }); //Authoruze the user
            dispatch(clearUsersData()); //Clear all users 
            dispatch(getUsers({url: `/users?page=1&count=${usersPerRequest}` })); //Refetch data starting at page 1
        }

        dispatch(endSignUpProcessing());
    }
}


export function showMessage(payload){
    return function(dispatch){
        dispatch({ type: SHOW_MESSAGE, payload });
        setTimeout(() => dispatch({ type: HIDE_MESSAGE }), 5000);
    }
}