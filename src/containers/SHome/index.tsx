import React from 'react'
import { Text, View } from 'react-native'
import { useSelector } from 'react-redux';

import { RootState } from '@/redux/store';
const Home = () => {

  const currentUser = useSelector((state: RootState) => state.user.currentUser)
  console.log(currentUser);
  
  return (
    <View>
      <Text>SHome</Text>
    </View>
  )
}

export default Home
