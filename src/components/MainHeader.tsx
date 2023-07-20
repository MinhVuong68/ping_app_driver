import React from 'react'
import { Text, View, StyleSheet, Switch, Pressable } from 'react-native'

import { Icon } from '@/components'
import { Colors, Fonts } from '@/theme'

const MainHeader = ({ toggleDrawer }: any) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={toggleDrawer}>
        <Icon type="Entypo" name="menu" size={30} color={Colors.black} />
      </Pressable>
      <Text style={Fonts.textLargeBold}>Online</Text>
      <Switch
        trackColor={{ false: '#767577', true: Colors.primary }}
        // thumbColor={
        //   isEnabled ? generalColor.border : generalColor.border
        // }
        ios_backgroundColor="#3e3e3e"
        //onValueChange={toggleSwitch}
        //value={isEnabled}
        //style={styles.switch}
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
