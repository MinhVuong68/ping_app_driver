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
  onChangeValue?: (t: string) => any
  input?: TextInputProps
}

const InputPassword = ({
  value = '',
  input,
  onChangeValue = () => {},
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(true)
  const [textInputValue, setTextInputValue] = useState(value)

  const handleShowPassword = () => {
    setShowPassword(prev => !prev)
  }

  const handleChangeText = (text: string) => {
    setTextInputValue(text)
    onChangeValue(text)
  }

  return (
    <View style={[styles.container]}>
      <TextInput
        {...input}
        secureTextEntry={showPassword}
        onChangeText={handleChangeText}
        value={textInputValue}
        underlineColorAndroid="transparent"
        autoCorrect={false}
        autoCapitalize={'none'}
      />
      <Pressable onPress={handleShowPassword}>
        {showPassword ? (
          <Icon type="Entypo" name="eye" size={22} color="#ccc" />
        ) : (
          <Icon type="Entypo" name="eye-with-line" size={22} color="#ccc" />
        )}
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
  },
  textInput: {
    fontSize: 16,
    width: '90%',
  },
})

export default InputPassword
