/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import 'react-native-gesture-handler'
import ApplicationNavigator from '@/navigators/Application'
import React from 'react'
import { Provider } from 'react-redux'

import store from '@/redux/store'

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <ApplicationNavigator />
    </Provider>
  )
}

export default App
