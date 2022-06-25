import { createSlice } from '@reduxjs/toolkit'

const firstTimeSlice = createSlice({
    name: 'firstTime',
    initialState: false,
    reducers: {
      changeFirstTime: (state, action) => {
        state.firstTime = action.payload;
      },
    }
  })
  
  export const { changeFirstTime } = firstTimeSlice.actions
  
  export default firstTimeSlice.reducer