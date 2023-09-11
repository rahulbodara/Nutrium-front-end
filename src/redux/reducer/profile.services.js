import * as Types from "../constants/actionTypes";

const initialState = {
  servicesData: [],
  individualService: null,
  error: {},
};

export const Services = (state = initialState, action) => {
  switch (action.type) {
    case Types.SERVICES_DATA:
      return {
        ...state,
        servicesData: action.data,
      };
    case Types.SERVICES__DATA_FAILURE:
      return { ...state, error: action?.data?.response };
    case Types.GET_INDIVIDUAL_SERVICE_SUCCESS:
      return {
        ...state,
        individualService: action.data,
      };
    case Types.UPDATE_SERVICES:
      const updatedServiceDetail = action.data.data;
      const updatedServicesDetails = state.servicesData.map((services) => {
        if (services._id === updatedServiceDetail._id) {
          return updatedServiceDetail;
        }else{
          return services
        } 
      });
      return { ...state, servicesData: updatedServicesDetails };
    case Types.REMOVE_SERVICES:
      console.log(action.data,"actionactuionactiobn");
      return { ...state, servicesData: action.data }
    default:
      return state;
  }
};
