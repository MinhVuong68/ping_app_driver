import React from 'react'
import Icon, { IconProps } from '@/components/Icon'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'

interface ResultCardProps {
  icon: string
  title: string
  result: string | number
  color?: string
  loading?: boolean
}

const ResultCard = ({
  icon,
  title,
  result,
  color,
  loading,
}: ResultCardProps) => {
  const styles = StyleSheet.create({
    container: {
      width: '48%',
      height: 100,
      backgroundColor: color,
      borderRadius: 10,
      flexDirection: 'row',
      padding: 10,
      //justifyContent: 'center',
      alignItems: 'center',
    },
    result: {
      marginLeft: 10,
    },
    txtResult: {
      fontSize: 16,
      color: '#fff',
    },
  })
  return (
    <View style={styles.container}>
      <Icon type="FontAwesome5" name={icon} size={30} color="#000" />
      <View style={styles.result}>
        <Text style={styles.txtResult}>{title}</Text>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <Text style={styles.txtResult}>{result}</Text>
        )}
      </View>
    </View>
  )
}

export default ResultCard
