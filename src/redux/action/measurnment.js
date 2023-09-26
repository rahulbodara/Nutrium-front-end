import * as Types from "../constants/actionTypes";
import baseUrl, { clientUrl } from "../../util/baseUrl";
import axios from "axios";
import createHeaders from "../../util/headers";

export const addMeasurement = (id,data) => {
    return async (dispatch) => {
      try {
        const headers = createHeaders();
        const response = await axios.post(`${baseUrl}/client/measurements/${id}`, data, {
          headers,
        });
        console.log("HHHHHHHHHHHHHHHHHHHH",response)
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

  export const clientSelectedId = (id) => {
    return async (dispatch) => {
      try {
        return dispatch({
          type: Types.CLIENT_ID,
          data: id,
        });
      } catch (err) {
        console.log(err,"err")
      }
    };
  };

  