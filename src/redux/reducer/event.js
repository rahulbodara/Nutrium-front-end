import * as Types from "../constants/actionTypes";

const initialState = {
  eventData: [],
  error: null,
};

export const Event = (state = initialState, action) => {
  switch (action.type) {
    case Types.EVENT_DATA:
      return {
        ...state,
        eventData: action.data.data,
        error: null,
      };
    default:
      return state;
  }
};
