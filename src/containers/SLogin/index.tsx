import React, { useState } from 'react'
import { View, Alert } from 'react-native'

import { Layout } from '@/theme'
import styles from './styles/SLoginStyle'
import { useAppDispatch } from '@/redux/store'
import { login } from '@/redux/user/userSlice'
import { navigate } from '@/navigators/utils'
import { Button, Header, Input, InputPassword, Loading } from '@/components'

const SLogin = () => {
  const dispatch = useAppDispatch()
  const [loading, setLoading] = useState(false)
  const [dataFormLogin, setDataFormLogin] = useState({
    phoneNumber: '0797004412',
    password: '$King0608',
  })

  const onLogin = async () => {
    try {
      setLoading(true)
      await dispatch(login(dataFormLogin)).unwrap()
      navigate('SMain')
    } catch (error) {
      Alert.alert('Thông báo', 'Tên đăng nhập hoặc mật khẩu không chính xác!')
      setLoading(false)
    }
  }

  return (
    <View style={Layout.full}>
      <Loading isLoading={loading} backBtn={setLoading} />
      <Header
        title="Đăng nhập"
        subHeader="Vui lòng nhập số điện thoại và mật khẩu để đăng nhập"
      />
      <View style={styles.viewFormLogin}>
        <Input
          input={{ placeholder: 'Số điện thoại', keyboardType: 'numeric' }}
          value={dataFormLogin.phoneNumber}
          onChangeValue={(text: string) =>
            setDataFormLogin(prevState => ({
              ...prevState,
              phoneNumber: text,
            }))
          }
        />
        <InputPassword
          input={{ placeholder: 'Mật khẩu' }}
          value={dataFormLogin.phoneNumber}
          onChangeValue={(text: string) =>
            setDataFormLogin(prevState => ({
              ...prevState,
              password: text,
            }))
          }
        />
        <Button
          title="Đăng nhập"
          size="large"
          style={{ width: '100%', marginTop: 10 }}
          onPress={onLogin}
        />
      </View>
    </View>
  )
}

export default SLogin
