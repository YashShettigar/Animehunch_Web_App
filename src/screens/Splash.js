import React, { useEffect } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { ActivityIndicator } from "react-native-paper";

export default ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Home')
        }, 3000)
    }, [])

    return (
        <View style={styles.splash}>
            <View>
                <Image 
                    style={styles.logo}
                    source={require('../resources/animehunch-logo.png')}
                />
                <ActivityIndicator 
                    animating={true}
                    color='#191919'
                    size={40}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    splash: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20
    }
})