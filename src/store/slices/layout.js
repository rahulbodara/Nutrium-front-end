import { createSlice } from "@reduxjs/toolkit";

export const customerSlice = createSlice({
  name: "customer",
  initialState: {
    productDetails: [],
  },
  reducers: {
    saveProductDetails: (state, action) => {
      state.productDetails=action.payload
    },
  },
  devTools: true,
});

export const {
  saveProductDetails,
} = customerSlice.actions;
export const getProductDetails = (state) => state.customer.productDetails;
