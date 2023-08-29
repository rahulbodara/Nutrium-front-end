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
    case Types.UPDATE_SERVICES:
      const updatedServiceDetail = action.payload;
      const updatedServicesDetails = state.servicesData.map((services) => {
        if (services._id === updatedServiceDetail._id) {
          return updatedServiceDetail;
        } else {
          return workplace;
        }
      });
      return { ...state, servicesData: updatedServicesDetails };
    default:
      return state;
  }
};
