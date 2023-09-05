import * as Types from "../constants/actionTypes";

const initialState = {
  scheduleData: [],
  error: null,
};

export const Schedule = (state = initialState, action) => {
  switch (action.type) {
    case Types.CREATE_SCHEDULE:
      return {
        ...state,
        scheduleData: [action.data],
        error: null,
      };
    default:
      return state;
  }
};
