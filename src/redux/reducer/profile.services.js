import * as Types from "../constants/actionTypes";

const initialState = {
  servicesData: [],
  error: {},
};

export const Services = (state = initialState, action) => {
  switch (action.type) {
    case Types.CREATE_SERVICES:
      return {
        ...state,
        servicesData: action.payload,
      };
    case Types.WORKPLACE_DATA_FAILURE:
      return { ...state, error: action?.payload?.response };
    default:
      return state;
      break;
  }
};
