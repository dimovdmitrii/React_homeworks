import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    { id: 1, name: "Ivan", email: "ivan@email.com" },
    { id: 2, name: "Bob", email: "bob@email.com" },
    { id: 3, name: "Kate", email: "kate@email.com" },
  ],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectUsers = (state) => state.users.users;
export default userSlice.reducer;
