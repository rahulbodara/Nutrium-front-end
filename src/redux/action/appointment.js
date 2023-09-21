import * as Types from "../constants/actionTypes";
import baseUrl from "../../util/baseUrl";
import axios from "axios";
import createHeaders from "../../util/headers";

export const ScheduleAppointment = (data) => {
    return async (dispatch) => {
      try {
        const headers = createHeaders();
        const response = await axios.post(`${baseUrl}/scheduleApointment`, data, {
          headers,
        });
        return dispatch({
          type: Types.CREATE_APPOINTMENT_DATA,
          data: response,
        });
      } catch (err) {
        return dispatch({
          type: Types.CREATE_APPOINTMENT_DATA_FAILURE,
          data: err.response,
        });
      }
    };
  };


  export const getAllAppointment = () => {
    return async (dispatch) => {
      try {
        const headers = createHeaders();
        const response = await axios.get(`${baseUrl}/scheduleApointment`, {
          headers,
        });
        return dispatch({
          type: Types.APPOINTMENT_DATA,
          data: response,
        });
      } catch (err) {
        return dispatch({
          type: Types.APPOINTMENT_DATA_FAILURE,
          data: err.response,
        });
      }
    };
  };

  export const EditAppointment = (data,id) => {
    return async (dispatch) => {
      try {
        const headers = createHeaders();
        const response = await axios.put(`${baseUrl}/scheduleApointment/${id}`,data, {
          headers,
        });
        return dispatch({
          type: Types.UPDATE_APPOINTMENT_DATA,
          data: response,
        });
      } catch (err) {
        return dispatch({
          type: Types.UPDATE_APPOINTMENT_DATA_FAILURE,
          data: err.response,
        });
      }
    };
  };

  
  