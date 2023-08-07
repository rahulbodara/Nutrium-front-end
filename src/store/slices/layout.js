import { createSlice } from '@reduxjs/toolkit';

export const customerSlice = createSlice({
  name: 'customer',
  initialState: {
    productDetails: [],
    userDetails: [],
  },
  reducers: {
    saveProductDetails: (state, action) => {
      state.productDetails = action.payload;
    },
    savedUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
  },
  devTools: true,
});

export const { saveProductDetails, savedUserDetails } = customerSlice.actions;
export const getProductDetails = (state) => state.customer.productDetails;
export const getuserDetails = (state) => state.customer.userDetails;
