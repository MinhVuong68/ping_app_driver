import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

import { Colors } from '@/theme'
import { Icon } from '@/components'

const InputPassword = () => {
  const [showPassword, setShowPassword] = useState(true)
  const handleShowPassword = () => {
    setShowPassword(prev => !prev)
  }
  return (
    <View style={[styles.container]}>
      <TextInput secureTextEntry={showPassword}/>
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
