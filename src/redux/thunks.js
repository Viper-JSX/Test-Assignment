import { GET_POSITIONS, GET_USERS } from "./action_types";
import { axiosClient } from "../api/axios/axios_client";
import axios from "axios";

export function getUsers(payload){
    return async function(dispatch){
        const usersData = await axiosClient.get("/users", { params: { count: payload.count, offset: payload.offset } })
        .then((response) => response.data);
    
        dispatch({ type: GET_USERS, payload: { usersData } });
    }
}

export function getPositions(payload){
    return async function(dispatch){
        console.log("Getting the positions")
        const positions = await axios.get("https://frontend-test-assignment-api.abz.agency/api/v1/positions")
        .then((response) => response.data.positions);
        console.log(positions)

        dispatch({ type: GET_POSITIONS, payload: { positions } });
    }
}