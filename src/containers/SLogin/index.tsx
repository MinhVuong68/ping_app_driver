import React, { useState } from 'react'
import { Text, View } from 'react-native'

import { Button, Header, Input, InputPassword } from '@/components'
import { Layout } from '@/theme'
import styles from './styles/SLoginStyle'

const SLogin = () => {
  const [dataFormLogin, setDataFormLogin] = useState({
    phoneNumber: '',
    password: '',
  })

  return (
    <View style={Layout.full}>
      <Header
        title="Đăng nhập"
        subHeader="Vui lòng nhập số điện thoại và mật khẩu để đăng nhập"
      />
      <View style={styles.viewFormLogin}>
        <Input
          input={{ placeholder: 'Số điện thoại' }}
          onChangeText={text =>
            //console.log(text)
            setDataFormLogin(prevState => ({
              ...prevState,
              phoneNumber: text,
            }))
          }
          value={dataFormLogin.phoneNumber}
        />
        <InputPassword />
        <Button
          title="Đăng nhập"
          size="large"
          style={{ width: '100%', marginTop: 10 }}
        />
      </View>
    </View>
  )
}

export default SLogin
