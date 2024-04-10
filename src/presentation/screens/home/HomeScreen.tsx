import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../../../config/app-theme'
import { userProfilestore } from '../../store/profile-store'
import { useCounterStore } from '../../store/counter-store'

const HomeScreen = () => {

  const name  = userProfilestore(state => state.name)
  const email = userProfilestore(state => state.email)
  const count =  useCounterStore(state => state.count)


  return (
      <View style={styles.container}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.title}>{email}</Text>

        <Text style={styles.title}>Counter: {count} </Text>

      </View>
  )
}

export default HomeScreen
