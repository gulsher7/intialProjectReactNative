import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'userData',
    initialState: {
      userData: {},
      isLogin: false

    },
    reducers: {
      saveUserData: (state, action) => {
       state.isLogin = action.payload;
      },
    },
    
  })
  
  export const { saveUserData } = authSlice.actions
  
  export default authSlice.reducer