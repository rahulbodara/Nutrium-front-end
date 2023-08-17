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

export const updateProfile = () => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem('token');
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      };
      const response = await axios.put(`${baseUrl}/professionals`, { headers });
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
