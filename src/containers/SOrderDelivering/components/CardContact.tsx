import { Icon } from '@/components'
import { navigate } from '@/navigators/utils'
import { Colors, Fonts, Layout } from '@/theme'
import { callNumber } from '@/utils/call'
import React from 'react'
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native'

const WIDTH_SCREEN = Dimensions.get('window').width

type CardContactDeliverProps = {
  linkAvatar: string
  name: string
  phoneContact?: string
}

const CardContact = ({
  linkAvatar,
  name,
  phoneContact = '',
}: CardContactDeliverProps) => {
  return (
    <View style={styles.container}>
      <View style={Layout.row}>
        {linkAvatar && (
          <Image
            source={{
              uri: linkAvatar,
            }}
            style={styles.image}
          />
        )}
        <View style={[Layout.col, { marginLeft: 10 }]}>
          <Text style={Fonts.textRegularBold}>{name}</Text>
        </View>

        <View style={[Layout.full, Layout.rowEnd]}>
          <TouchableOpacity style={styles.wrapperIcon} onPress={() => {}}>
            <Icon
              type="MaterialCommunityIcons"
              name="chat-processing-outline"
              size={30}
              color={Colors.white}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.wrapperIcon}
            onPress={() => callNumber(phoneContact)}>
            <Icon
              type="MaterialCommunityIcons"
              name="phone"
              size={30}
              color={Colors.white}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    minHeight: 100,
    width: WIDTH_SCREEN * 0.9,
    justifyContent: 'center',
    marginBottom: 10,
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 10,
  },
  wrapperIcon: {
    width: 40,
    height: 40,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    marginHorizontal: 5,
  },
})

export default CardContact
