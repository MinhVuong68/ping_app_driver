import React from 'react'
import { StyleSheet, View } from 'react-native'
import Modal from 'react-native-modal'
import CalendarPicker from 'react-native-calendar-picker'
import moment from 'moment'

interface ModalCalendarPickerProps {
  isVisible: boolean
  setVisible: (b: boolean) => any
  setValue: (v:string) => any
}

const ModalCalendarPicker = ({
  isVisible,
  setVisible,
  setValue,
}: ModalCalendarPickerProps) => {

  const handleDateChange = (date:any) => {
    setVisible(false);
    setValue(moment(date).format('DD-MM-YYYY'))
  };
  return (
    <Modal
      isVisible={isVisible}
      style={{ alignItems: 'center' }}
      onBackButtonPress={() => setVisible(false)}>
      <View style={styles.container}>
        <CalendarPicker
          previousTitle="Trước"
          nextTitle="Sau"
          onDateChange={handleDateChange}
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
