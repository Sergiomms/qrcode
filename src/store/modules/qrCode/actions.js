import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const qrCodeRequest = createAsyncThunk(
  "qrCode/qrCodeRequest",
  async (qrCodeNumber, { rejectWithValue }) => {
    try {
      const qrCodeUrl = `https://us-central1-qr-code-api-90005.cloudfunctions.net/app/qr-code/${qrCodeNumber}`;
      const response = await axios.get(qrCodeUrl);

      return response.data;
    } catch (err) {
      if (err.response.status !== 200) {
        toast.error("Could not find your QR-COde. Please try again.");
      }
      return rejectWithValue("request error");
    }
  }
);

export const qrCodeEdit = createAsyncThunk(
  "qrCode/qrCodeEdit",
  async (payload, { rejectWithValue }) => {
    try {
      const qrCodeUrl = `https://us-central1-qr-code-api-90005.cloudfunctions.net/app/qr-code-update/${payload.qrCodeid}`;
      const response = await axios.put(qrCodeUrl, {
        qr_code_number: payload.qrCodeNumber,
        is_award: payload.isAward,
        award_already_given: payload.awardAlreadyGiven,
        name: payload.name,
        email: payload.email
      });

      return response.status;
    } catch (err) {
      if (err.response.status !== 200) {
        toast.error("Could not register yor form. Please try again.");
      }
      return rejectWithValue("request error");
    }
  }
);
