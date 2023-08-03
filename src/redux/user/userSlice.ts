import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  CurrentUserType,
  OrderStatusUpdatePayLoad,
  OrdersFilterByDatePayLoad,
  UserLocationPayLoad,
  UserLoginPayload,
} from './type'
import Api from '@/services/Api'

interface InitialState {
  currentUser: CurrentUserType
  isOrderPending: boolean
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
    driverStatus: '',
  },
  isOrderPending: false,
}

const api = Api.create()

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setOrderPending(state, action) {
      state.isOrderPending = action.payload
    },
  },
  extraReducers: builder => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        const { token, ...payloadWithoutToken }: any = action.payload
        state.currentUser = payloadWithoutToken
      })
      .addCase(updateStatusAndLocation.fulfilled, (state, action) => {
        state.currentUser = { ...state.currentUser, ...action.payload }
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.currentUser = { ...initialState.currentUser, ...action.payload }
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

export const logout = createAsyncThunk(
  'user/logout',
  async (userLocation: UserLocationPayLoad, thunkAPI) => {
    try {
      const res = await api.updateStatusOnlineAndLocation(userLocation)
      return res
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  },
)

export const updateStatusAndLocation = createAsyncThunk(
  'user/updateStatusOnlineAndLocation',
  async (userLocation: UserLocationPayLoad, thunkAPI) => {
    try {
      const res = await api.updateStatusOnlineAndLocation(userLocation)
      return res
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  },
)

export const updateOrderStatus = createAsyncThunk(
  'user/updateOrderStatus',
  async (orderStatusUpdate: OrderStatusUpdatePayLoad, thunkAPI) => {
    try {
      const res = await api.updateOrderStatus(orderStatusUpdate)
      return res
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  },
)

export const getOrdersByOrderStatusAndDriverId = createAsyncThunk(
  'user/getOrdersByOrderStatusAndDriverId',
  async (
    payload: { orderStatus: string; driverId: number | null },
    thunkAPI,
  ) => {
    try {
      const res = await api.getOrdersByOrderStatusAndDriverId(payload)
      return res
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  },
)

export const getOrdersCompletedByDriverIdAndDate = createAsyncThunk(
  'user/getOrdersCompletedByDriverIdAndDate',
  async (payload: OrdersFilterByDatePayLoad, thunkAPI) => {
    try {
      const res = await api.getOrdersCompletedByDriverIdAndDate(payload)
      return res
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  },
)

export const { setOrderPending } = userSlice.actions

export default userSlice.reducer
