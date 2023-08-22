import * as Types from '../constants/actionTypes';

const initialState = {
  userData: [],
  clientData: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.USER_DATA:
      return {
        ...state,
        userData: [action.data],
      };
    case Types.CLIENT_DATA:
      return {
        ...state,
        clientData: action.data,
      };
    default:
      return state;
  }
};
