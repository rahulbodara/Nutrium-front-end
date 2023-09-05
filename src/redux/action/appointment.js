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
  