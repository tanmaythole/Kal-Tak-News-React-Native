import React from 'react'
import { Image, StyleSheet, Text, View, Share } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import {MaterialIcons} from '@expo/vector-icons';


export default function Headers({ navigation, isNewsItem, data }) {
    const handleShare = async () => {
        Share.share({
            title: 'Alert Title',
            message: `${data.title}\n\nRead More on ${data.url}\n\n-By Kal Tak News`
          }).then((res) => console.log(res))
            .catch((error) => console.log(error))
    }
    return (
        <SafeAreaView>
            <View style={styles.header}>
                {isNewsItem?(
                    <MaterialIcons 
                        name="arrow-back"
                        size={30}
                        style={styles.leftIcon}
                        onPress={() => navigation.goBack()}
                    />
                ):(
                    <MaterialIcons 
                        name="menu"
                        size={30}
                        style={styles.leftIcon}
                        onPress={() => navigation.openDrawer()}
                    />
                )}

                <Image 
                    style={styles.logo}
                    source={require('../../assets/logo.png')} 
                />

                {isNewsItem?(
                    <MaterialIcons 
                        name="share"
                        size={30}
                        style={styles.rightIcon}
                        onPress={handleShare}
                    />
                ):(<></>)}
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
    leftIcon: {
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
    },
    rightIcon: {
        color: "#fff",
        position: "absolute",
        right: 16
    }
})
