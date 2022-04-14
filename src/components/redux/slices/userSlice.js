import { createSlice } from "@reduxjs/toolkit";
import { localService } from "../../../services/localService";
let initialState = {
  userInfo: localService.getUserInfo() || null,
  avatar: "",
};
const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setSignIn: (state, action) => {
      state.userInfo = action.payload;
    },
    setAvatar: (state, action) => {
      state.avatar = URL.createObjectURL(action.payload);
    },
  },
});

const { actions, reducer } = userSlice;

export const { setSignIn, setAvatar } = actions;

export default reducer;
