import { createReducer } from "@reduxjs/toolkit";
import {
  qrCodeRequest,
  qrCodeEdit,
} from "./actions";

const qrCodeInitialState = {
  loadingqrCode: false,
  successqrCode: false,
  qrCodeData: {},
  errorqrCode: false,
  loadingqrCodeEdit: false,
  successqrCodeEdit: false,
  errorqrCodeEdit: false,
};

export const qrCodeReducer = createReducer(qrCodeInitialState, (builder) => {
  builder
  .addCase(qrCodeRequest.pending, (state) => {
    state.loadingqrCode = true;
    state.successqrCode = false;
    state.qrCodeData = {};
    state.errorqrCode = false;
  })
  .addCase(qrCodeRequest.fulfilled, (state, { payload }) => {
    state.loadingqrCode = false;
    state.successqrCode = true;
    state.qrCodeData = payload;
    state.errorqrCode = false;
  })
  .addCase(qrCodeRequest.rejected, (state) => {
    state.loadingqrCode = false;
    state.successqrCode = false;
    state.qrCodeData = {};
    state.errorqrCode = true;
  })
  .addCase(qrCodeEdit.pending, (state) => {
    state.loadingqrCodeEdit = true;
    state.successqrCodeEdit = false;
    state.errorqrCodeEdit = false;
  })
  .addCase(qrCodeEdit.fulfilled, (state, { payload }) => {
    state.loadingqrCodeEdit = false;
    state.successqrCodeEdit = payload;
    state.errorqrCodeEdit = false;
  })
  .addCase(qrCodeEdit.rejected, (state) => {
    state.loadingqrCodeEdit = false;
    state.successqrCodeEdit = false;
    state.errorqrCodeEdit = true;
  })
})


