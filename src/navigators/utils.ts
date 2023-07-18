import { createNavigationContainerRef } from '@react-navigation/native'
type RootStackParamList = {
  SIntro: undefined
  SLogin: undefined
}

export const navigationRef = createNavigationContainerRef<RootStackParamList>()
export function navigate(name: keyof RootStackParamList, params?: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params)
  }
}
