import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import {MaterialIcons} from '@expo/vector-icons';


export default function Headers({ navigation, isNewsItem }) {
    return (
        <SafeAreaView>
            <View style={styles.header}>
                {isNewsItem?(
                    <MaterialIcons 
                        name="arrow-back"
                        size={35}
                        style={styles.MenuIcon}
                        onPress={() => navigation.goBack()}
                    />
                ):(
                    <MaterialIcons 
                        name="menu"
                        size={35}
                        style={styles.MenuIcon}
                        onPress={() => navigation.openDrawer()}
                    />
                )}

                <Image 
                    style={styles.logo}
                    source={require('../../assets/logo.png')} 
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 60,
        backgroundColor: "#212529",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    MenuIcon: {
        color: "#fff",
        position: "absolute",
        left: 16
    },
    title: {
        color: "#fff"
    },
    logo: {
        width: 130,
        height: 35
    }
})
