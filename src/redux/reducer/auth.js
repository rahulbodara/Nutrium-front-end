import * as Types from "../constants/actionTypes";

const initialState = {
  userData: [],
  clientData: [],
  individualWorkplace: null,
  individualService: null,
  serviceData: [],
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.USER_DATA:
      return {
        ...state,
        userData: [action.data],
        error: null,
      };
    case Types.CLIENT_DATA:
      return {
        ...state,
        clientData: action.data,
        error: null,
      };
    case Types.CLIENT_BY_ID:
      return {
        ...state,
        clientData: action.data,
        error: null,
      };
    case Types.USER_DATA:
    case Types.CLIENT_DATA_FAILURE:
    case Types.CLIENT_BY_ID_FAILURE:
      return {
        ...state,
        error: action.data,
      };
    case Types.GET_INDIVIDUAL_WORKPLACE_SUCCES:
      return {
        ...state,
        individualWorkplace: action.data,
      };
    case Types.GET_INDIVIDUAL_SERVICE_SUCCESS:
      return {
        ...state,
        individualService: action.data,
      };
    case Types.SERVICES:
      return {
        ...state,
        serviceData: action.data,
        error: null,
      };
    default:
      return state;
  }
};
