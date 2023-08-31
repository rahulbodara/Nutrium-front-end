import * as Types from "../constants/actionTypes";
import baseUrl from "../../util/baseUrl";
import axios from "axios";
import createHeaders from "../../util/headers";

export const GetAllSecreatries = () => {
  return async (dispatch) => {
    try {
      const headers = createHeaders();
      const response = await axios.get(`${baseUrl}/secretaries`, { headers });
      return dispatch({
        type: Types.SECRETARIES_DATA,
        payload: response?.data,
      });
    } catch (err) {
      return dispatch({
        type: Types.SECRETARIES_DATA_FAILURE,
        data: err.response,
      });
    }
  };
};

export const CreateSecretaries = (data) => {
  return async (dispatch) => {
    try {
      const headers = createHeaders(); 
      const response = await axios.post(`${baseUrl}/secretaries`,data,{headers});
      return dispatch({
        type: Types.SECRETARIES_DATA,
        data: response,
      });
    } catch (err) {
      return dispatch({
        type: Types.SECRETARIES_DATA_FAILURE,
        data: err.response,
      });
    }
  };
};

export const GetIndividualSecreataries = (id) => {
  return async (dispatch) => {
    try {
      const headers = createHeaders(); // Use the createHeaders function here
      const response = await axios.get(`${baseUrl}/secretaries/${id}`,{headers});
      return dispatch({
        type: Types.GET_INDIVIDUAL_SCREATE_SECRETARIES,
        data: response?.data,
      });
    } catch (err) {
      return dispatch({
        type: Types.SECRETARIES_DATA_FAILURE,
        data: err.response,
      });
    }
  };
};

export const SecreatriesDataEdit = (data,id) => {
  return async (dispatch) => {
    try {
      const headers = createHeaders(); // Use the createHeaders function here
      const response = await axios.put(`${baseUrl}/secretaries/${id}`,data,{headers});
      console.log(response,"responseresponse");
      return dispatch({
        type: Types.SECRETARIES_DATA,
        data: response,
      });
    } catch (err) {
      return dispatch({
        type: Types.WORKPLACE_DATA_FAILURE,
        data: err.response,
      });
    }
  };
};