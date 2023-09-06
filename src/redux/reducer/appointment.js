import * as Types from "../constants/actionTypes";

const initialState = {
  appointmentData: [],
  error: null,
};

export const Appointment=(state = initialState, action) => {
  switch (action.type) {
    case Types.CREATE_APPOINTMENT_DATA:
      return {
        ...state,
        appointmentData: [action.data],
        error: null,
      };
    default:
      return state;
  }
};
