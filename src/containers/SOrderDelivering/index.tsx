import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

import { Colors, Fonts, Layout } from '@/theme'
import CardContact from './components/CardContact'
import { Button, Icon } from '@/components'
import ItemInfo from './components/ItemInfo'
import ItemPayment from './components/ItemPayMent'
import { navigate } from '@/navigators/utils'
import { Linking } from 'react-native'

const SOrderDelivering = () => {
  const onPickUpLoacation = () => {
    Linking.openURL(
      `https://www.google.com/maps/dir/?api=1&destination=${10.598267482869568},${106.6599029693129}`,
    )
  }

  const onDeliveryLocation = () => {
    Linking.openURL(
      `https://www.google.com/maps/dir/?api=1&destination=${10.823},${106.68672}`,
    )
  }

  return (
    <View style={Layout.full}>
      <View style={styles.contents}>
        <Text>22-07-2023 | 10:26:32</Text>
        <Text style={[Fonts.textLargeBold, { marginTop: 10 }]}>#1564</Text>
        <CardContact
          linkAvatar="https://firebasestorage.googleapis.com/v0/b/ping-5ccd1.appspot.com/o/images%2Fmira3.jfif?alt=media&token=c1676b9c-ddf7-448e-a9ec-8005f7c48e89"
          name="Nguyễn Minh Vương"
          phoneContact="0899306681"
        />
        <View style={styles.viewLocation}>
          <View style={Layout.rowVCenter}>
            <Icon
              type="FontAwesome"
              name="dot-circle-o"
              color="green"
              size={22}
            />
            <Pressable
              style={[Layout.col, { marginLeft: 10 }]}
              onPress={onPickUpLoacation}>
              <Text>Nhận hàng:</Text>
              <Text style={Fonts.textRegular}>
                155 Lý Thái Tổ, Quận 1 TP.HCM
              </Text>
            </Pressable>
          </View>
          <Icon type="Entypo" name="dots-three-vertical" size={22} />
          <View style={Layout.rowVCenter}>
            <Icon
              type="Entypo"
              name="location-pin"
              color={Colors.primary}
              size={22}
            />
            <Pressable
              style={[Layout.col, { marginLeft: 10 }]}
              onPress={onDeliveryLocation}>
              <Text>Giao hàng:</Text>
              <Text style={[Fonts.textRegular, Layout.rowVCenter]}>
                145 Tân Sơn Nhì, Quận Tân Phú, TP. HCM
              </Text>
            </Pressable>
          </View>
        </View>
        <ItemInfo
          icon={{ type: 'FontAwesome', name: 'truck', color: Colors.primary }}
          text="Xe tải 1500 Kg"
        />

        <ItemInfo
          icon={{
            type: 'MaterialIcons',
            name: 'published-with-changes',
            color: Colors.primary,
          }}
          text="Quay lại điểm nhận hàng"
        />

        <ItemInfo
          icon={{
            type: 'MaterialCommunityIcons',
            name: 'note-edit-outline',
            color: Colors.primary,
          }}
          text="Đến gọi số 0899305567"
        />

        <ItemPayment price={150000} discountMoney={0} totalPrice={150000} />
        <View style={Layout.colVCenter}>
          <Button
            title="Kết thúc chuyến"
            onPress={() => {}}
            style={{ marginTop: 15 }}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contents: {
    padding: 10,
  },
  viewLocation: {
    paddingVertical: 10,
    borderBottomColor: Colors.borderBottom,
    borderBottomWidth: 1,
  },
})

export default SOrderDelivering
