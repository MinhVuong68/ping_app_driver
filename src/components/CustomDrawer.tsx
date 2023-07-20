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
import { RootState } from '@/redux/store'

const CustomDrawer = (props: any) => {
  const currentUser = useSelector((state: RootState) => state.user.currentUser)
  return (
    <View style={Layout.full}>
      <View style={styles.viewProfile}>
        <ImageAvatar uri={currentUser.avatar} />
        <Text style={Fonts.textRegularBold}>{currentUser.fullName}</Text>
        <View style={Layout.rowVCenter}>
          <Text>250 coins </Text>
          <Image source={Images.coin} style={{ width: 15, height: 15 }} />
        </View>
        <View style={Layout.rowVCenter}>
          <Text>Đánh giá: 4.5 </Text>
          <Image source={Images.starFilled} style={{ width: 15, height: 15 }} />
        </View>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={styles.viewOptionsBottom}>
        <TouchableOpacity style={[Layout.rowVCenter]}>
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
