import * as Types from '../constants/actionTypes';
import baseUrl from '../../util/baseUrl';
import axios from 'axios';
import createHeaders from '../../util/headers';



export const login = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${baseUrl}/sign_in`, data);
      return dispatch({
        type: Types.LOGIN,
        data: response?.data,
      });
    } catch (err) {
      return dispatch({
        type: Types.LOGIN_FAILURE,
        data: err.response,
      });
    }
  };
};

export const signUp = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${baseUrl}/sign_up`, data);
      return dispatch({
        type: Types.SIGNUP,
        data: response?.data,
      });
    } catch (err) {
      return dispatch({
        type: Types.SIGNUP_FAILURE,
        data: err.response,
      });
    }
  };
};

export const userData = () => {
  return async (dispatch) => {
    try {
      const headers = createHeaders(); // Use the createHeaders function here

      const response = await axios.get(`${baseUrl}/professionals`, { headers });
      return dispatch({
        type: Types.USER_DATA,
        data: response?.data,
      });
    } catch (err) {
      return dispatch({
        type: Types.USER_DATA_FAILURE,
        data: err.response,
      });
    }
  };
};

export const forgotPassword = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${baseUrl}/forget-password`, data);
      return dispatch({
        type: Types.FORGOT_PASSWORD,
        data: response?.data,
      });
    } catch (err) {
      return dispatch({
        type: Types.FORGOT_PASSWORD_FAILURE,
        data: err.response,
      });
    }
  };
};

export const updateProfile = (data) => {
  return async (dispatch) => {
    try {
      const headers = createHeaders(); // Use the createHeaders function here
      const response = await axios.put(`${baseUrl}/professionals`,data,{ headers });
      return dispatch({
        type: Types.UPDATE_PROFILE,
        data: response,
      });
    } catch (err) {
      return dispatch({
        type: Types.UPDATE_PROFILE_FAILURE,
        data: err.response,
      });
    }
  };
};

export const registerClient = (data) => {
  return async (dispatch) => {
    try {
      const headers = createHeaders(); // Use the createHeaders function here
      const response = await axios.post(`${baseUrl}/client`, data, { headers });
      return dispatch({
        type: Types.CLIENT_DATA,
        data: response,
      });
    } catch (err) {
      return dispatch({
        type: Types.CLIENT_DATA_FAILURE,
        data: err.response,
      });
    }
  };
};

export const clientData = () => {
  return async (dispatch) => {
    try {
      const headers = createHeaders(); // Use the createHeaders function here
      const response = await axios.get(`${baseUrl}/client`, { headers });
      return dispatch({
        type: Types.CLIENT_DATA,
        data: response?.data,
      });
    } catch (err) {
      return dispatch({
        type: Types.CLIENT_DATA_FAILURE,
        data: err.response,
      });
    }
  };
};

export const getClientById = (clientId) => {
  return async (dispatch) => {
    try {
      const headers = createHeaders(); // Use the createHeaders function here
      const response = await axios.get(`${baseUrl}/client/${clientId}`, { headers });
      return dispatch({
        type: Types.CLIENT_BY_ID,
        data: response?.data,
      });
    } catch (err) {
      return dispatch({
        type: Types.CLIENT_BY_ID_FAILURE,
        data: err.response,
      });
    }
  };
};

export const deleteClient = (clientId) => {
  return async (dispatch) => {
    try {
      const headers = createHeaders(); // Use the createHeaders function here
      const response = await axios.delete(`${baseUrl}/client/${clientId}`, { headers });
      return dispatch({
        type: Types.CLIENT_BY_ID,
        data: response?.data,
      });
    } catch (err) {
      return dispatch({
        type: Types.CLIENT_BY_ID_FAILURE,
        data: err.response,
      });
    }
  };
};

export const updateClient = (data, clientId) => {
  return async (dispatch) => {
    try {
      const headers = createHeaders(); 
      const response = await axios.put(`${baseUrl}/client/${clientId}`,data, { headers });
      return dispatch({
        type: Types.CLIENT_BY_ID,
        data: response,
      });
    } catch (err) {
      return dispatch({
        type: Types.CLIENT_BY_ID_FAILURE, 
        data: err.response,
      });
    }
  };
}

export const updateAppointment = (data, clientId) => {
  return async (dispatch) => {
    try {
      const headers = createHeaders();
      const response = await axios.put(`${baseUrl}/client/appointment/${clientId}`, data, { headers });
      return dispatch({
        type: Types.CLIENT_BY_ID,
        data: response,
      })
    } catch(err) {
      return dispatch({
        type: Types.CLIENT_BY_ID_FAILURE, 
        data: err.response,
      })
    }
  }
}

export const updateMedicalHistory = (data, clientId) => {
  return async (dispatch) => {
    try {
      const headers = createHeaders();
      const response = await axios.put(`${baseUrl}/client/medical-history/${clientId}`, data, { headers });
      return dispatch({
        type: Types.CLIENT_BY_ID,
        data: response,
      })
    } catch(err) {
      return dispatch({
        type: Types.CLIENT_BY_ID_FAILURE, 
        data: err.response,
      })
    }
  }
}

export const updateDietaryHistory = (data, clientId) => {
  return async (dispatch) => {
    try {
      const headers = createHeaders()
      const response = await axios.put(`${baseUrl}/client/diet-history/${clientId}`, data, {headers})
      return dispatch({
        type: Types.CLIENT_BY_ID,
        data: response,
      })
    } catch (err) {
      return dispatch({
        type: Types.CLIENT_BY_ID_FAILURE,
        data: err.response,
      })
    }
  }
}

export const eatingBehaviour = (data, clientId) => {
  return async (dispatch) => {
    try {
      const headers = createHeaders()
      const response = await axios.post(`${baseUrl}/client/eating-behaviour/${clientId}`, data, {headers});
      return dispatch({
        type: Types.EATING_BEHAVIOUR,
        data: response,
      });
    } catch (err) {
      return dispatch({
        type: Types.EATING_BEHAVIOUR_FAILURE,
        data: err,
      });
    }
  };
};

export const observationBehaviour = (data) => {
  return async (dispatch) => {
    try {
      const headers = createHeaders()
      const response = await axios.post(`${baseUrl}/client/observation`, data, {headers});
      return dispatch({
        type: Types.OBSERVATION_BEHAVIOUR,
        data: response,
      })
    } catch(err) {
      return dispatch({
        type: Types.OBSERVATION_BAHAVIOUR_FAILURE,
        data: err,
      })
    }
  }
}

export const getObservationData = (clientId) => {
  return async (dispatch) => {
    try {
      const headers = createHeaders();

      const response = await axios.get(`${baseUrl}/client/observation/${clientId}`, { headers });
      return dispatch({
        type: Types.OBSERVATION_DATA,
        data: response,
      });
    } catch (err) {
      return dispatch({
        type: Types.OBSERVATION_DATA_FAILURE,
        data: err.response,
      });
    }
  };
};

export const deleteObservation = (observationId) => {
  return async (dispatch) => {
    try {
      const headers = createHeaders(); // Use the createHeaders function here
      const response = await axios.delete(`${baseUrl}/client/observation/${observationId}`, { headers });
      return dispatch({
        type: Types.OBSERVATION_BY_ID,
        data: response,
      });
    } catch (err) {
      return dispatch({
        type: Types.OBSERVATION_BY_ID_FAILURE,
        data: err.response,
      });
    }
  };
};

export const updateObservation = (data, id) => {
  return async (dispatch) => {
    try {
      const headers = createHeaders();
      const response = await axios.put(`${baseUrl}/client/observation/${id}`,data,{ headers });
      return dispatch({
        type: Types.UPDATE_OBSERVATION,
        data: response,
      });
    } catch (err) {
      return dispatch({
        type: Types.UPDATE_OBSERVATION_FAILURE,
        data: err.response,
      });
    }
  };
};