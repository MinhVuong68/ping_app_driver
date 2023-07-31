import React, { useState, useEffect } from 'react'
import { Text, TextInput, View, TouchableOpacity, FlatList } from 'react-native'
import firestore from '@react-native-firebase/firestore'
import uuid from 'react-native-uuid'

import { Layout } from '../../../theme'
import { Header, Icon } from '../../../components'
import styles from './styles/SChatStyle'
import Color from '@/theme/Colors'
import ChatContent from './components/ChatContent'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'

const SChat = ({ route }: any) => {
  const currentUser = useSelector((state: RootState) => state.user.currentUser)

  const [dataChat, setDataChat] = useState<any>([])
  const [inputChat, setInputChat] = useState('')
  

  useEffect(() => {
    const subscriber = firestore()
    .collection('orders')
    .where('orderId', '==', route.params.orderId)
    .onSnapshot(documentSnapshot  => {
      const data = documentSnapshot.docs[0].data() 
      setDataChat(data.chat)      
    })
    return () => subscriber()
  },[])
  const onSend = async () => {
    try {
      const ordersRef = firestore().collection('orders')
      const querySnapshot = await ordersRef
        .where('orderId', '==', route.params.orderId)
        .get()
      if (querySnapshot.docs.length === 1) {
        const orderRef = querySnapshot.docs[0].ref
        const orderData = querySnapshot.docs[0].data()
        const currentChatArray = orderData.chat || []
        currentChatArray.push({
          id: uuid.v4(),
          chat: inputChat,
          userId: currentUser.id,
        })
        await orderRef.set({ chat: currentChatArray }, { merge: true })
        setInputChat('')
        console.log('Data added to chat array in order successfully!')
      } else {
        console.log(
          'Order with driverId = currentUser.id not found or multiple orders found.',
        )
      }
    } catch (error) {
      console.error('Error adding data to chat array in order:', error)
    }
  }

  return (
    <View style={Layout.full}>
      <Header
        title={`Nhắn tin với khách hàng ${route.params.customerName}`}
      />
      <View style={styles.viewChat}>
        <FlatList
        //inverted
          data={dataChat}
          renderItem={({ item }) => (
            <ChatContent userId={item.userId} chat={item.chat} />
          )}
          inverted contentContainerStyle={{ flexDirection: 'column-reverse' }}
          
          //keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          placeholder="Nội dung..."
          value={inputChat}
          onChangeText={text => setInputChat(text)}
        />
        <TouchableOpacity style={styles.btnSend} onPress={onSend}>
          <Icon
            type="FontAwesome"
            name="send"
            color={Color.primary}
            size={30}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SChat
