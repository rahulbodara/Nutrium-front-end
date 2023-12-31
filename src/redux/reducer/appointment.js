import * as Types from "../constants/actionTypes";

const initialState = {
  appointmentData: [],
  error: null,
};

export const Appointment = (state = initialState, action) => {
  switch (action.type) {
    case Types.CREATE_APPOINTMENT_DATA:
      return {
        ...state,
        appointmentData: [action.data],
        error: null,
      };
    case Types.APPOINTMENT_DATA:
      return {
        ...state,
        appointmentData: action.data.data.getallappointments,
        error: null,
      };
      case Types.UPDATE_APPOINTMENT_DATA:
        const updatedappointmentDetail = action.data.data;
        const updatedappointmentDetails = state.appointmentData.map((appointment) => {
          if (appointment._id === updatedappointmentDetail._id) {
            return updatedappointmentDetail;
          }else{
            return appointment
          }
        });
        return { ...state, appointmentData: updatedappointmentDetails };
      case Types.DELETE_APPOINTMENT:
          return {
            users: state.appointmentData.filter((appointment) => {
              return appointment._id !== action.payload;
            })
          }; 
    default:
      return state;
  }
};
