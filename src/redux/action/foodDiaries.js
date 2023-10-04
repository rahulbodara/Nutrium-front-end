import * as Types from "../constants/actionTypes";
import baseUrl from "../../util/baseUrl";
import axios from "axios";
import createHeaders from "../../util/headers";

export const createFood = (data, id) => {
    return async (dispatch) => {
        try {
            const headers = createHeaders();
            const response = await axios.post(`${baseUrl}/client/food-diary/${id}`, data, {
                headers,
            });
            return dispatch({
                type: Types.CREATE_FOOD,
                data: response,
            });
        } catch (err) {
            return dispatch({
                type: Types.CREATE_FOOD_FAILURE,
                data: err.response,
            });
        }
    };
};

export const GetAllFoods = (id) => {
    return async (dispatch) => {
        try {
            const headers = createHeaders(); // Use the createHeaders function here
            const response = await axios.get(`${baseUrl}/client/food-diary/${id}`, { headers });
            console.log(response, "GetAllFoods");
            return dispatch({
                type: Types.GET_ALL_FOODS,
                data: response.data,
            });
        } catch (err) {
            return dispatch({
                type: Types.CREATE_FOOD_FAILURE,
                data: err.response,
            });
        }
    };
}

export const updateFood = (data, id) => {
    return async (dispatch) => {
        try {
            const headers = createHeaders(); // Use the createHeaders function here

            const response = await axios.put(`${baseUrl}/client/food-diary/${id}`, data, { headers });
            console.log(response,"sdfghjkl;'asasfc");
            return dispatch({
                type: Types.UPDATE_FOOD,
                data: response,
            });
        } catch (err) {
            return dispatch({
                type: Types.CREATE_FOOD_FAILURE,
                data: err.response,
            });
        }
    };
};

export const RemoveFood = (data, id) => {
    return async (dispatch) => {
        try {
            const headers = createHeaders(); // Use the createHeaders function here
            const response = await axios.delete(`${baseUrl}/client/food-diary/${id}`, {
                headers: headers, 
                data: data, 
            });            
            console.log(response,"resposekkekkek");
            return dispatch({
                type: Types.REMOVE_FOOD,
                data: response,
            });
        } catch (err) {
            return dispatch({
                type: Types.CREATE_FOOD_FAILURE,
                data: err.response,
            });
        }
    };
};