import React from 'react'
import { StyleSheet, View } from 'react-native'
import Modal from 'react-native-modal'
import CalendarPicker from 'react-native-calendar-picker'

interface ModalCalendarPickerProps {
  isVisible: boolean
  setVisible: (b: boolean) => any
}

const ModalCalendarPicker = ({
  isVisible,
  setVisible,
}: ModalCalendarPickerProps) => {
  return (
    <Modal
      isVisible={isVisible}
      style={{ alignItems: 'center' }}
      onBackButtonPress={() => setVisible(false)}>
      <View style={styles.container}>
        <CalendarPicker
          previousTitle="Trước"
          nextTitle="Sau"

          //onDateChange={handleDateChange}
        />
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '110%',
  },
})

export default ModalCalendarPicker
