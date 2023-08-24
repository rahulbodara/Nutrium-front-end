import * as Types from '../constants/actionTypes';

const initialState = {
  userData: [],
  clientData: [],
  error:null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.USER_DATA:
      return {
        ...state,
        userData: [action.data],
        error:null,
      };
    case Types.CLIENT_DATA:
      return {
        ...state,
        clientData: action.data,
        error:null,
      };
      case Types.CLIENT_BY_ID: 
      return {
        ...state,
        clientData: action.data,
        error:null,
      };
      case Types.USER_DATA:
      case Types.CLIENT_DATA_FAILURE:
    case Types.CLIENT_BY_ID_FAILURE:
      return {
        ...state,
        error: action.data, 
      };
    default:
      return state;
  }
};
