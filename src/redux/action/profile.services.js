import * as Types from "../constants/actionTypes";
import baseUrl from "../../util/baseUrl";
import axios from "axios";
import createHeaders from "../../util/headers";

export const CreateProfileService = (data) => {
  return async (dispatch) => {
    try {
      const headers = createHeaders();
      const response = await axios.post(`${baseUrl}/services`, data, {
        headers,
      });
      return dispatch({
        type: Types.CREATE_SERVICES,
        payload: response?.data,
      });
    } catch (err) {
      return dispatch({
        type: Types.CREATE_SERVICES_FAILURE,
        data: err.response,
      });
    }
  };
};

export const GetAllServices = () => {
  return async (dispatch) => {
    try {
      const headers = createHeaders(); // Use the createHeaders function here
      const response = await axios.get(`${baseUrl}/services`, { headers });
      return dispatch({
        type: Types.SERVICES,
        payload: response?.data,
      });
    } catch (err) {
      return dispatch({
        type: Types.SERVICES_FAILURE,
        data: err.response,
      });
    }
  };
};

export const GetIndividualService = (id) => {
  return async (dispatch) => {
    try {
      const headers = createHeaders(); // Use the createHeaders function here
      const response = await axios.get(`${baseUrl}/services/${id}`,{headers});
      return dispatch({
        type: Types.GET_INDIVIDUAL_SERVICE_SUCCESS,
        data: response?.data,
      });
    } catch (err) {
      return dispatch({
        type: Types.SERVICES_FAILURE,
        data: err.response,
      });
    }
  };
};



export const ServiceDataEdit = (data,id) => {
  return async (dispatch) => {
    try {
      const headers = createHeaders(); // Use the createHeaders function here

      const response = await axios.put(`${baseUrl}/services/${id}`,data,{headers});
      return dispatch({
        type: Types.UPDATE_SERVICES,
        data: response?.data,
      });
    } catch (err) {
      return dispatch({
        type: Types.UPDATE_SERVICES_FAILURE,
        data: err.response,
      });
    }
  };
};
