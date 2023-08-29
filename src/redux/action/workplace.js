import * as Types from "../constants/actionTypes";
import baseUrl from "../../util/baseUrl";
import axios from "axios";
import createHeaders from "../../util/headers";

export const GetAllWorkplace = () => {
  return async (dispatch) => {
    try {
      const headers = createHeaders();
      const response = await axios.get(`${baseUrl}/workplaces`, { headers });
      return dispatch({
        type: Types.WORKPLACE_DATA,
        payload: response?.data,
      });
    } catch (err) {
      return dispatch({
        type: Types.WORKPLACE_DATA_FAILURE,
        data: err.response,
      });
    }
  };
};

export const WorkplaceDataCreation = (data) => {
  return async (dispatch) => {
    try {
      const headers = createHeaders(); // Use the createHeaders function here
      const response = await axios.post(`${baseUrl}/workplaces`,data,{headers});
      return dispatch({
        type: Types.WORKPLACE_DATA,
        data: response?.data,
      });
    } catch (err) {
      return dispatch({
        type: Types.WORKPLACE_DATA_FAILURE,
        data: err.response,
      });
    }
  };
};

export const GetIndividualWorkplace = (id) => {
  return async (dispatch) => {
    try {
      const headers = createHeaders(); // Use the createHeaders function here
      const response = await axios.get(`${baseUrl}/workplaces/${id}`,{headers});
      return dispatch({
        type: Types.GET_INDIVIDUAL_WORKPLACE_SUCCES,
        data: response?.data,
      });
    } catch (err) {
      return dispatch({
        type: Types.WORKPLACE_DATA_FAILURE,
        data: err.response,
      });
    }
  };
};

export const WorkplaceDataEdit = (data,id) => {
  return async (dispatch) => {
    try {
      const headers = createHeaders(); // Use the createHeaders function here
      const response = await axios.put(`${baseUrl}/workplaces/${id}`,data,{headers});
      return dispatch({
        type: Types.EDIT_WORKPLACE_SUCCESS,
        payload: response?.data,
      });
    } catch (err) {
      return dispatch({
        type: Types.EDIT_WORKPLACE_FAILURE,
        payload: err.response,
      });
    }
  };
};