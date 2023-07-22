import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer'
import { useSelector } from 'react-redux'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { Fonts, Images, Layout } from '@/theme'
import { Icon, ImageAvatar } from '@/components'
import { RootState, useAppDispatch } from '@/redux/store'
import { logout } from '@/redux/user/userSlice'
import { navigate } from '@/navigators/utils'

const CustomDrawer = (props: any) => {
  const dispatch = useAppDispatch()
  const currentUser = useSelector((state: RootState) => state.user.currentUser)
  
  const onLogout = () => {
    dispatch(
      logout({
        id: currentUser.id,
        driverStatus: 'OFFLINE',
        currentLocation: null,
        latitude: null,
        longitude: null,
      }),
    ).unwrap()
    navigate('SLogin')
  }
  return (
    <View style={Layout.full}>
      <View style={styles.viewProfile}>
        {!!currentUser.avatar && <ImageAvatar uri={currentUser.avatar} />}
        <Text style={Fonts.textRegularBold}>{currentUser.fullName}</Text>
        <View style={Layout.rowVCenter}>
          <Text>250 coins </Text>
          <Image source={Images.coin} style={{ width: 15, height: 15 }} />
        </View>
        <View style={Layout.rowVCenter}>
          <Text>Đánh giá: {currentUser.reviewRate} </Text>
          <Image source={Images.starFilled} style={{ width: 15, height: 15 }} />
        </View>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={styles.viewOptionsBottom}>
        <TouchableOpacity style={[Layout.rowVCenter]} onPress={onLogout}>
          <Icon type="MaterialCommunityIcons" name="logout" size={20} />
          <Text style={Fonts.textRegularBold}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  viewProfile: {
    minHeight: 150,
    justifyContent: 'center',
    padding: 10,
  },
  viewOptionsBottom: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopColor: '#ccc',
    borderTopWidth: 1,
  },
})

export default CustomDrawer
