import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'

import { SHaveBooking, SHome, SIntro, SLogin } from '@/containers'
import { navigationRef } from './utils'
import { Colors } from '@/theme'
import MainNavigator from './Main'
import SRoad from '@/containers/SOrderDelivering/SRoad'

const Stack = createStackNavigator()

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.white,
  },
}

const ApplicationNavigator = () => {
  return (
    <NavigationContainer theme={MyTheme} ref={navigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SIntro" component={SIntro} />
        <Stack.Screen name="SLogin" component={SLogin} />
        <Stack.Screen name="SMain" component={MainNavigator}/>
        <Stack.Screen name="SRoad" component={SRoad}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ApplicationNavigator
