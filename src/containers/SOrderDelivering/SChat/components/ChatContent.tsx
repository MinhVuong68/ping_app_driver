import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import { Colors } from '@/theme'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'

interface ChatContentProps {
  userId: number
  chat: string
}

const ChatContent = ({ userId, chat }: ChatContentProps) => {
  const currentUser = useSelector((state: RootState) => state.user.currentUser)
  const [customStyle, setCustomStyle] = useState({})
  useEffect(() => {
    switch (currentUser.id) {
      case userId:
        setCustomStyle({
          backgroundColor: Colors.primary,
          alignSelf: 'flex-end',
        })
    }
  }, [currentUser.id, userId])

  return (
    <View style={[styles.container, customStyle]}>
      <Text style={styles.text}>{chat}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#ccc',
    minHeight: 40,
    padding: 10,
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginBottom: 10,
  },
  text: {
    color: '#fff',
  },
})

export default ChatContent
