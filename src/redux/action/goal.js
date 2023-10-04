import * as Types from "../constants/actionTypes";
import baseUrl from "../../util/baseUrl";
import axios from "axios";
import createHeaders from "../../util/headers";
import { data } from "jquery";

export const GetAllGoalData = (clientId) => {
  return async (dispatch) => {
    try {
      const headers = createHeaders();
    
      const response = await axios.get(`${baseUrl}/client/allGoals/${clientId}`, { headers })
      console.log("🚀 ~ file: goal.js:14 ~ return ~ response:", response)
      return dispatch({
        type: Types.CREATE_GOAL,
        data: response.data,
      });
    } catch (err) {
      return dispatch({
        type: Types.CREATE_GOAL_FAILURE,
        data: err.response,
      });   
    }
  };
};

export const CreateGoalData = (data, clientId) => {
  return async (dispatch) => {
    try {
      const headers = createHeaders();
      const response = await axios.post(`${baseUrl}/client/goals/${clientId}`, data, { headers });
      return dispatch({
        type: Types.CREATE_GOAL,
        data: response,
      });
    } catch (err) {
      return dispatch({
        type: Types.CREATE_GOAL_FAILURE,
        data: err.response,
      });
    }
  };
};




export const RemoveGoals = (goalId, _id, clientId, userId) => {
    return async (dispatch) => {
      try {
        const headers = createHeaders(); 
        const response = await axios.delete(`${baseUrl}/client/goals/${_id}`,{ 
            headers : headers,
            data: {
                _id: _id, 
                clientId: clientId,
                userId: userId,
            },
        });
        return dispatch({
          type: Types.REMOVE_GOAL,
          data: response,
        });
      } catch (err) {
        return dispatch({
          type: Types.REMOVE_GOAL_FAILURE,
          data: err.response,
        });
      }
    };
  };
