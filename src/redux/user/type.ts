export type CurrentUserType = {
  id: number | null
  fullName: string
  avatar: string
  phoneNumber: string
  reviewRate: number | null
  currentLocation: string
  latitude: number | null
  longitude: number | null
  licensePlate: string
  driverStatus: string
}

export interface UserLoginPayload {
  phoneNumber: string
  password: string
}

export interface UserLocationPayLoad {
  id: number | null,
  driverStatus: 'ONLINE' | 'OFFLINE'
  currentLocation: string | null,
  latitude: number | null
  longitude: number | null
}


export interface OrderStatusUpdatePayLoad {
  driverId: number | null,
  orderId: number | null,
  orderStatus: string,
  reasonDenied?: string,
}

export interface OrdersFilterByDatePayLoad {
  driverId: number | null,
  date: string
}