import * as Types from "../constants/actionTypes";

const initialState = {
  servicesData: [],
  individualService: null,
  error: {},
};

export const Services = (state = initialState, action) => {
  switch (action.type) {
    case Types.SERVICES:
      return {
        ...state,
        servicesData: action.payload,
      };
    case Types.SERVICES_FAILURE:
      return { ...state, error: action?.payload?.response };
    case Types.GET_INDIVIDUAL_SERVICE_SUCCESS:
      return {
        ...state,
        individualService: action.data,
      };
    default:
      return state;
  }
};
