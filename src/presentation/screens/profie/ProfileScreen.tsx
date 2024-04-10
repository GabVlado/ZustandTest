import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { styles } from '../../../config/app-theme'
import { userProfilestore } from '../../store/profile-store'

const ProfileScreen = () => {

  const name  = userProfilestore(state => state.name)
  const email = userProfilestore(state => state.email)
  const changeProfile = userProfilestore(state => state.changeProfile)


  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.title}>{email}</Text>

      <Pressable
        style={styles.primaryButton}
        onPress={ () => userProfilestore.setState({name: 'Gabriel Vlad'}) }
      >
        <Text> Cambiar nombre </Text>
      </Pressable>

      <Pressable
        style={styles.primaryButton}
        onPress={ () => userProfilestore.setState({email: 'gavlad@google.com'}) }
      >
        <Text> Cambiar email </Text>
      </Pressable>

      <Pressable
        style={styles.primaryButton}
        onPress={ () => changeProfile('Jhon Doee', 'johndo@google.com') }
      >
        <Text> Regresar a Jhon </Text>
      </Pressable>
    </View>
  )
}

export default ProfileScreen

