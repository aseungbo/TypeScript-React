import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface userInfo {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

// Define the initial state using that type
const initialState = {
  id: "default",
  email: "default",
  first_name: "default",
  last_name: "default",
  avatar: "default",
} as userInfo;

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    userAll: (state, action: PayloadAction<userInfo>) => {
      return action.payload;
    },
    userInfoInitialize: (state) => {
      return initialState;
    },
  }
})

export const { userAll, userInfoInitialize } = userSlice.actions;
export default userSlice.reducer;