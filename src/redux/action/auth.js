import * as Types from '../constants/actionTypes';
import baseUrl from '../../util/baseUrl';
import axios from 'axios';

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
      const token = window.localStorage.getItem('token');
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      };
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
      const token = window.localStorage.getItem('token');
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      };
      const response = await axios.put(`${baseUrl}/professionals`,data,{ headers });
      return dispatch({
        type: Types.UPDATE_PROFILE,
        data: response?.data,
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
      const token = window.localStorage.getItem('token');
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      };
      const response = await axios.post(`${baseUrl}/client`, data, { headers });
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

export const clientData = () => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem('token');
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      };
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

export const WorkplaceDataCreation = (data) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem('token');
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      };
      const response = await axios.post(`${baseUrl}/workplaces`,data,{headers});
      return dispatch({
        type: Types.WORKPLACE_DATA,
        data: response?.data,
      });
    } catch (err) {
      return dispatch({
        type: Types.WORKPLACE_DATA_FAILURE,
        data: err.response,
      });
    }
  };
};

export const GetAllWorkplace = () => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem('token');
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      };
      const response = await axios.get(`${baseUrl}/workplaces`,{headers});
      return dispatch({
        type: Types.WORKPLACE_DATA,
        data: response?.data,
      });
    } catch (err) {
      return dispatch({
        type: Types.WORKPLACE_DATA_FAILURE,
        data: err.response,
      });
    }
  };
};

export const GetIndividualWorkplace = (id) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem('token');
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      };
      const response = await axios.get(`${baseUrl}/workplaces/${id}`,{headers});
      return dispatch({
        type: Types.GET_INDIVIDUAL_WORKPLACE_SUCCES,
        data: response?.data,
      });
    } catch (err) {
      return dispatch({
        type: Types.WORKPLACE_DATA_FAILURE,
        data: err.response,
      });
    }
  };
};

export const WorkplaceDataEdit = (data,id) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem('token');
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      };
      const response = await axios.put(`${baseUrl}/workplaces/${id}`,data,{headers});
      return dispatch({
        type: Types.WORKPLACE_DATA,
        data: response?.data,
      });
    } catch (err) {
      return dispatch({
        type: Types.WORKPLACE_DATA_FAILURE,
        data: err.response,
      });
    }
  };
};

export const getClientById = (clientId) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem('token');
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      };
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
      const token = window.localStorage.getItem('token');
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      };
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

export const GetAllServices = () => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem('token');
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      };
      const response = await axios.get(`${baseUrl}/services`, { headers });
      return dispatch({
        type: Types.SERVICES,
        data: response?.data,
      });
    } catch (err) {
      return dispatch({
        type: Types.SERVICES_FAILURE,
        data: err.response,
      });
    }
  };
};

export const GetIndividualService = (id) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem('token');
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      };
      const response = await axios.get(`${baseUrl}/services/${id}`,{headers});
      return dispatch({
        type: Types.GET_INDIVIDUAL_SERVICE_SUCCESS,
        data: response?.data,
      });
    } catch (err) {
      return dispatch({
        type: Types.SERVICES_FAILURE,
        data: err.response,
      });
    }
  };
};

export const ServiceDataEdit = (data,id) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem('token');
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      };
      const response = await axios.put(`${baseUrl}/services/${id}`,data,{headers});
      return dispatch({
        type: Types.UPDATE_SERVICES,
        data: response?.data,
      });
    } catch (err) {
      return dispatch({
        type: Types.UPDATE_SERVICES_FAILURE,
        data: err.response,
      });
    }
  };
};
