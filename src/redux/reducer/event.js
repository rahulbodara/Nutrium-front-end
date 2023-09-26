import * as Types from "../constants/actionTypes";

const initialState = {
  eventData: [],
  error: null,
};

export const Event = (state = initialState, action) => {
  switch (action.type) {
    case Types.EVENT_DATA:
      return {
        ...state,
        eventData: action.data.data,
        error: null,
      };
    case Types.UPDATE_EVENT:
      const updatedevent = action.data.data;
      const updatedeventDetails = state.eventData.map(
        (event) => {
          if (event._id === updatedevent._id) {
            return updatedevent;
          } else {
            return event;
          }
        }
      );
      return { ...state, appointmentData: updatedeventDetails };
    default:
      return state;
  }
};
