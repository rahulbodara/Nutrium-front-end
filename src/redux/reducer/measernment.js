import * as Types from "../constants/actionTypes";

const initialState = {
    measurementData: [],
    clientId: '',
    error: null,
};

export const Measurement = (state = initialState, action) => {
    switch (action.type) {
        case Types.CREATE_MEASUREMENTS:
            return {
                ...state,
                measurementData: [...state.measurementData,action.data],
                error: null,
            };
        case Types.MEASUREMENTS_DATA:
            return {
                ...state,
                measurementData: [action.data],
                error: null,
            };
        case Types.CLIENT_ID:
            return {
                ...state,
                clientId: action.data
            }
            case Types.REMOVE_MEASUREMENTS:
                return {
                  ...state,
                  measurementData: state.measurementData.map((item) => {
                    return {
                      ...item,
                      Measurement: {
                        ...item.Measurement,
                        measurements: item.Measurement.measurements.map((measurement) => {
                          return {
                            ...measurement,
                            entries: measurement.entries.filter((entry) => entry._id !== action.data),
                          };
                        }),
                      },
                    };
                  }),
                };    
        default:
            return state;
    }
};
