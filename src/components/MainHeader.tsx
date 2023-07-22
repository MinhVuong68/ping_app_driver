import React, { useEffect, useState } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Switch,
  Pressable,
  Linking,
} from 'react-native'
import Geolocation from 'react-native-geolocation-service'
import { useSelector } from 'react-redux'

import { Icon } from '@/components'
import { Colors, Fonts } from '@/theme'
import { getAddressFromLocation, locationPermisson } from '@/utils/map'
import { RootState, useAppDispatch } from '@/redux/store'
import { updateStatusAndLocation } from '@/redux/user/userSlice'

const MainHeader = ({ toggleDrawer }: any) => {
  const currentUser = useSelector((state: RootState) => state.user.currentUser)

  const dispatch = useAppDispatch()
  const [isEnabled, setIsEnabled] = useState(
    currentUser.driverStatus === 'OFFLINE' ? false : true,
  )

  useEffect(() => {
    setIsEnabled(currentUser.driverStatus === 'OFFLINE' ? false : true)
  }, [currentUser.driverStatus])

  const toggleSwitch = async () => {
    if (isEnabled) {
      dispatch(
        updateStatusAndLocation({
          id: currentUser.id,
          driverStatus: 'OFFLINE',
          currentLocation: null,
          latitude: null,
          longitude: null,
        }),
      ).unwrap()
      setIsEnabled(previousState => !previousState)
      Linking.openSettings()
      return
    }
    try {
      await locationPermisson()
      Geolocation.getCurrentPosition(
        async (position: any) => {
          const coordinate = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }
          const address = await getAddressFromLocation(coordinate)
          dispatch(
            updateStatusAndLocation({
              id: currentUser.id,
              driverStatus: 'ONLINE',
              currentLocation: address,
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            }),
          ).unwrap()
          setIsEnabled(previousState => !previousState)
        },
        (error: any) => console.log('Error getting location:', error),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
      )
    } catch (error) {}
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={toggleDrawer}>
        <Icon type="Entypo" name="menu" size={30} color={Colors.black} />
      </Pressable>
      <Text style={Fonts.textLargeBold}>
        {isEnabled ? 'Online' : 'Offline'}
      </Text>
      <Switch
        trackColor={{ false: '#767577', true: Colors.primary }}
        thumbColor={isEnabled ? Colors.primary : Colors.borderBottom}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
})

export default MainHeader
