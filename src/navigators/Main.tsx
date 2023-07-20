import React from 'react'
import { StyleSheet } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import {
  SDeliveryHistory,
  SHome,
  SOrderDelivering,
  SStatistical,
} from '@/containers'
import { CustomDrawer, Icon, MainHeader } from '@/components'
import { Colors } from '@/theme'

const Drawer = createDrawerNavigator()

const itemMainDrawer = [
  {
    name: 'SHome',
    compoponent: SHome,
    drawerLabel: 'Trang chủ',
    iconName: 'home',
  },
  {
    name: 'SOrderDelivering',
    compoponent: SOrderDelivering,
    drawerLabel: 'Đơn hàng đang giao',
    iconName: 'truck',
  },
  {
    name: 'SStatistical',
    compoponent: SStatistical,
    drawerLabel: 'Thống kê',
    iconName: 'bar-chart',
  },
  {
    name: 'SDeliveryHistory',
    compoponent: SDeliveryHistory,
    drawerLabel: 'Lịch sử chuyến đi',
    iconName: 'history',
  },
]

const MainNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="SHome"
      screenOptions={({ navigation }) => ({
        header: props => <MainHeader toggleDrawer={navigation.toggleDrawer} />,
      })}
      drawerContent={props => <CustomDrawer {...props}/>}
      >
      {itemMainDrawer.map((item, index) => {
        return (
          <Drawer.Screen
            key={index}
            name={item.name}
            component={item.compoponent}
            options={{
              drawerLabel: `${item.drawerLabel}`,
              drawerIcon: () => (
                <Icon type="FontAwesome" name={item.iconName} size={20} />
              ),
              drawerLabelStyle: styles.drawerLabel,
            }}
          />
        )
      })}
    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({
  drawerLabel: {
    color: Colors.black,
    marginLeft: -20,
  },
})

export default MainNavigator
