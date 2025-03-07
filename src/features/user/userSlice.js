import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.userName = action.payload;
    },
  },
});

export const { setName } = userSlice.actions;
export default userSlice.reducer;
export const getName = function (state) {
  return state.user.userName;
};
