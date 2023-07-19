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
}

export interface UserLoginPayload {
  phoneNumber: string
  password: string
}
