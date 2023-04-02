import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isloggedin: false,
}

export const authSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    login: (state,action) => {
      
        state.isloggedin = true;
        state.username = action.payload.username;
       
  
      },
      logout: (state,action) => {
      
        state.isloggedin = false;
        state.username = '';
        
  
      },
  },
})

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions

export default authSlice.reducer