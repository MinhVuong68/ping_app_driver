import React, { useState } from 'react'
import {
  Pressable,
  StyleSheet,
  TextInput,
  View,
  TextInputProps,
} from 'react-native'

import { Colors } from '@/theme'
import { Icon } from '@/components'

type InputProps = TextInputProps & {
  value?: string
  onChangeValue?: (t: string) => any
  input?: TextInputProps
}

const Input = ({ value = '', input, onChangeValue = () => {} }: InputProps) => {
  const [textInputValue, setTextInputValue] = useState(value)

  const handleChangeText = (text: string) => {
    setTextInputValue(text)
    onChangeValue(text)
  }

  const handleCleanInput = () => {
    setTextInputValue('')
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        {...input}
        onChangeText={handleChangeText}
        value={textInputValue}
        underlineColorAndroid="transparent"
        autoCorrect={false}
        autoCapitalize={'none'}
      />
      <Pressable onPress={handleCleanInput}>
        <Icon type="AntDesign" name="closecircle" size={20} color="#ccc" />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: Colors.borderIpt,
    paddingHorizontal: 10,
    marginVertical: 4,
    marginBottom: 5,
  },
  textInput: {
    fontSize: 16,
    width: '90%',
  },
})

export default Input
