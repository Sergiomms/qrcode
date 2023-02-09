import { createSelector } from '@reduxjs/toolkit';

export const qrCode = (state) => state.qrCode;

export const qrCodeSelector = createSelector(
  qrCode,
  state => state
);

