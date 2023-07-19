import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'

import { SHome, SIntro, SLogin } from '@/containers'
import { navigationRef } from './utils'
import { Colors } from '@/theme'

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
        <Stack.Screen name="SHome" component={SHome} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ApplicationNavigator
