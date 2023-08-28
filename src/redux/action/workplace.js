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
