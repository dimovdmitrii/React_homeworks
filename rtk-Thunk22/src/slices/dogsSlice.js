import { createSlice } from "@reduxjs/toolkit";
import { fetchDogs } from "../redux/thunks";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

const dogsSlice = createSlice({
  name: "dogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDogs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDogs.fulfilled, (state, acttion) => {
        state.data = acttion.payload;
        state.status = "succeeded";
      })
      .addCase(fetchDogs.rejected, (state, acttion) => {
        state.status = "failed";
        state.error = "Request failed";
      });
  },
});

export default dogsSlice.reducer;
