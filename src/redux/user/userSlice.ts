import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { CurrentUserType, UserLoginPayload } from './type'
import Api from '@/services/Api'

interface InitialState {
  currentUser: CurrentUserType
}

const initialState: InitialState = {
  currentUser: {
    id: null,
    fullName: '',
    avatar: '',
    phoneNumber: '',
    reviewRate: null,
    currentLocation: '',
    latitude: null,
    longitude: null,
    licensePlate: '',
  },
}

const api = Api.create()

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(login.fulfilled, (state, action) => {
      const { token, ...payloadWithoutToken }: any = action.payload
      state.currentUser = payloadWithoutToken
    })
  },
})

export const login = createAsyncThunk(
  'user/login',
  async (accountLogin: UserLoginPayload, thunkAPI) => {
    try {
      const res = await api.login(accountLogin)
      return res
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  },
)

export default userSlice.reducer
