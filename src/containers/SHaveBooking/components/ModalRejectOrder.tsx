import React, { useMemo, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Modal from 'react-native-modal'

import { Colors } from '@/theme'
import { RadioButtonProps, RadioGroup } from 'react-native-radio-buttons-group'
import { Button, Icon } from '@/components'

interface ModalRejectOrderProps {
  isVisible: boolean
  setVisible: (b: boolean) => any
  setValue: (v: string) => any
  handleReject?: () => any
}
const ModalRejectOrder = ({
  isVisible,
  setVisible,
  setValue,
  handleReject,
}: ModalRejectOrderProps) => {
  const radioButtons: RadioButtonProps[] = useMemo(
    () => [
      {
        id: '1', // acts as primary key, should be unique and non-empty string
        label: 'Phương tiện giao hàng bị hỏng',
        value: 'Phương tiện giao hàng bị hỏng',
      },
      {
        id: '2',
        label: 'Không đủ thời gian',
        value: 'Không đủ thời gian',
      },
    ],
    [],
  )
  const [selectedId, setSelectedId] = useState<string | undefined>(
    radioButtons[0]['id'],
  )
  const onPressRadioButton = (id: string) => {
    setSelectedId(id)
    const result = radioButtons.find(item => item.id === id)
    result?.value && setValue(result?.value)
  }

  return (
    <Modal
      animationIn="fadeInDown"
      animationOut="fadeOut"
      isVisible={isVisible}
      onBackButtonPress={() => setVisible(false)}
      style={{ marginLeft: -1, marginRight: -1, marginBottom: -1 }}>
      <View style={styles.container}>
        <View style={styles.headerCancel}>
          <Text style={styles.titleCancel}>Lí do hủy</Text>
          <TouchableOpacity onPress={() => setVisible(false)}>
            <Icon type="AntDesign" name="close" color="#ccc" />
          </TouchableOpacity>
        </View>
        <View style={styles.reasons}>
          <View>
            <RadioGroup
              radioButtons={radioButtons}
              onPress={onPressRadioButton}
              selectedId={selectedId}
              containerStyle={{ alignItems: 'flex-start' }}
            />
            <Button
              title="Xác nhận"
              style={{ width: '100%' }}
              onPress={handleReject}
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 4,
    borderWidth: 1,
    backgroundColor: Colors.white,
    position: 'absolute',
    left: 0,
    bottom: 0,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },

  headerCancel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    marginHorizontal: 15,
  },
  titleCancel: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  iconClose: {
    position: 'absolute',
    right: 0,
    top: 0,
    padding: 10,
  },
  reasons: {
    padding: 10,
  },
  reason: {
    paddingVertical: 10,
    width: '100%',
  },
})

export default ModalRejectOrder
