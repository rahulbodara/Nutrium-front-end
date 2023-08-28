import * as Types from "../constants/actionTypes";
import baseUrl from "../../util/baseUrl";
import axios from "axios";
import createHeaders from "../../util/headers";

export const CreateProfileService = (data) => {
  console.log(
    "🚀 ~ file: profile.services.js:7 ~ GetAllWorkplace ~ data:",
    data
  );
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
        type: Types.WORKPLACE_DATA_FAILURE,
        data: err.response,
      });
    }
  };
};
