import React, { useEffect } from 'react'
import { View, Text, Pressable } from 'react-native'
import { styles } from '../../config/app-theme'
import { useCounterStore } from '../store/counter-store'
import { useNavigation } from '@react-navigation/native'

const SettingsScreen = () => {

    const count =  useCounterStore(state => state.count)
    const incrementBy = useCounterStore(state => state.incrementBy)

    // const navigation = useNavigation();

    // useEffect(() => {
    //     navigation.setOptions({
    //         title: 'Settings'
    //     })
    // }, []);


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Counter: {count} </Text>

            <Pressable
                style={styles.primaryButton}
                onPress={() => incrementBy(1)}
            >
                <Text> +1 </Text>
            </Pressable>

            <Pressable
                style={styles.primaryButton}
                onPress={() => incrementBy(-1)}
            >
                <Text> -1 </Text>
            </Pressable>


        </View>
    )
}

export default SettingsScreen
