import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  isAuth: boolean;
  username: string;
  uid: string;
  isModerator: boolean;
};

type InitialState = {
  value: AuthState;
};

const initialState = {
  value: {
    isAuth: false,
    username: "",
    uid: "",
    isModerator: false,
  } as AuthState,
} as InitialState;

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: () => {
      return initialState;
    },
    logIn: (state, action: PayloadAction<string>) => {
      return {
        value: {
          isAuth: true,
          username: action.payload,
          uid: "ediohfg",
          isModerator: false,
        },
      };
    },
    toggleMode: (state) => {
      state.value.isModerator = !state.value.isModerator;
    },
  },
});

export const { logIn, logOut, toggleMode } = auth.actions;
export default auth.reducer;
