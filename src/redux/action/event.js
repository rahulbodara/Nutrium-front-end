import * as Types from "../constants/actionTypes";
import baseUrl from "../../util/baseUrl";
import axios from "axios";
import createHeaders from "../../util/headers";

export const CreateEventData = (data) => {
    return async (dispatch) => {
      try {
        const headers = createHeaders();
        const response = await axios.post(`${baseUrl}/event`, data, {
          headers,
        });
        return dispatch({
          type: Types.CREATE_EVENT_DATA,
          data: response,
        });
      } catch (err) {
        return dispatch({
          type: Types.CREATE_EVENT_DATA_FAILURE,
          data: err.response,
        });
      }
    };
  };

  export const GetAllEventData = () => {
    return async (dispatch) => {
      try {
        const headers = createHeaders();
        const response = await axios.get(`${baseUrl}/event`, {
          headers,
        });
        return dispatch({
          type: Types.EVENT_DATA,
          data: response,
        });
      } catch (err) {
        return dispatch({
          type: Types.EVENT_DATA_FAILURE,
          data: err.response,
        });
      }
    };
  };