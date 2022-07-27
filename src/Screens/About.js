import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import globalStyles from '../styles/GlobalStyles'

export default function About() {
    return (
        <View style={globalStyles.container}>
            <View style={styles.about}>
                <Image style={styles.img} source={require('../../assets/Photo.png')} />
                <Text style={styles.tagline}>Designed & Developed by</Text>
                <Text style={styles.name}>Tanmay Thole</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    about: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center'
    },
    img: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginVertical: 40
    },
    name: {
        color: '#fff',
        fontSize: 30,
        fontWeight: '500'
    },
    tagline: {
        color: '#f3f3f3',
        fontStyle: 'italic'
    }
})
