import { createNavigationContainerRef } from '@react-navigation/native'
type RootStackParamList = {
  SIntro: undefined
  SLogin: undefined
  SHome: undefined
  SMain: undefined
  SOrderDelivering: undefined
  SStatistical: undefined
  SDeliveryHistory: undefined
  SRoad: undefined
  SHaveBooking: undefined
  SChat: undefined
}

export const navigationRef = createNavigationContainerRef<RootStackParamList>()
export function navigate(name: keyof RootStackParamList, params?: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params)
  }
}
