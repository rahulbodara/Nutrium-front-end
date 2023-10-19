import * as Types from "../constants/actionTypes";
import baseUrl, { clientUrl } from "../../util/baseUrl";
import axios from "axios";
import createHeaders from "../../util/headers";
import { data } from "jquery";
import { dispatch } from "d3";

export const GetAllMeasurementData = (clientId) =>{
  return async (dispatch) => {
    try {
      const headers = createHeaders();
      const response = await axios.get(`${baseUrl}/client/measurements/${clientId}`, { headers })
      return dispatch({
        type: Types.MEASUREMENTS_DATA,
        data: response.data,
      });
    } catch (err) {
      return dispatch({
        type: Types.MEASUREMENTS_DATA_FAILURE,
        data: err.response,
      });   
    }
  };
}

export const addMeasurement = (data, clientId) => { 
  console.log('<<== data ==>>', data);
  return async (dispatch) => {
    try {
      const headers = createHeaders();
      const response = await axios.post(
        `${baseUrl}/client/measurements/${clientId}`,data, { headers }
      );
      return dispatch({
        type: Types.CREATE_MEASUREMENTS,
        data: response,
      });
    } catch (err) {
      return dispatch({
        type: Types.CREATE_MEASUREMENTS_DATA_FAILURE,
        data: err.response,
      });
    }
  };
};



export const RemoveMeasurements = (clientId, entryId) => {
  return async (dispatch) => {
    try {
      const headers = createHeaders(); 
      const response = await axios.delete(`${baseUrl}/client/measurements/${clientId}/entries/${entryId}`,{ 
          headers : headers,
      });
      return dispatch({
        type: Types.REMOVE_MEASUREMENTS,
        data: response,
      });
    } catch (err) {
      return dispatch({
        type: Types.REMOVE_MEASUREMENTS_FAILURE,
        data: err.response,
      });
    }
  };
};

export const clientSelectedId = (id) => {
  return async (dispatch) => {
    try {
      return dispatch({
        type: Types.CLIENT_ID,
        data: id,
      });
    } catch (err) {
      console.log(err, "err");
    }
  };
};
