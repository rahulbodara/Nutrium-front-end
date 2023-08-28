import * as Types from "../constants/actionTypes";

const initialState = {
  workplaceData: [],
  error: {},
};

export const Workplace = (state = initialState, action) => {
  switch (action.type) {
    case Types.WORKPLACE_DATA:
      return {
        ...state,
        workplaceData: action.payload,
      };
    case Types.WORKPLACE_DATA_FAILURE:
      return { ...state, error: action?.payload?.response };
    default:
      return state;
      break;
  }
};
