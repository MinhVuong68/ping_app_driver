import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import userSlice from './user/userSlice'

const store = configureStore({
  reducer: {
    user: userSlice,
  },
})

// get RootState and AppDitpatch from your store
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store
