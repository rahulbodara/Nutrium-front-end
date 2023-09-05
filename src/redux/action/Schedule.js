import * as Types from "../constants/actionTypes";
import baseUrl from "../../util/baseUrl";
import axios from "axios";
import createHeaders from "../../util/headers";

export const CreateSchedule = (data) => {
    return async (dispatch) => {
      try {
        const headers = createHeaders();
        const response = await axios.post(`${baseUrl}/schedule`, data, {
          headers,
        });
        return dispatch({
          type: Types.CREATE_SCHEDULE,
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