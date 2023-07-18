import React, { useState } from 'react'
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  TextInputProps,
} from 'react-native'

import { Colors } from '@/theme'
import { Icon } from '@/components'

type InputProps = TextInputProps & {
  value?: string
  onChangeText?: (t:string) => any
  input?: TextInputProps
}

const Input = ({ value='', input,onChangeText }: InputProps) => {

  const [textInputValue,setTextInputValue] = useState(value)

  const handleCleanInput = () => {
    setTextInputValue('')
  }
  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} onChangeText={onChangeText} value={textInputValue} {...input} />
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
