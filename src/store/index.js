import { configureStore } from "@reduxjs/toolkit";
import { qrCodeReducer } from "./modules/qrCode/reducer";

export const store = configureStore({
  reducer: {
    qrCode: qrCodeReducer,
  },
})