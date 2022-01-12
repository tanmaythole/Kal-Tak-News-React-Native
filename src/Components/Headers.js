import React, { useState } from 'react'
import { Image, StyleSheet, Text, View, Share } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons'
import SearchModal from './SearchModal';


export default function Headers({ navigation, isNewsItem, isSearchItem, data }) {
    const [modalVisible, setModalVisible] = useState(false);

    const handleShare = async () => {
        Share.share({
            title: 'Alert Title',
            message: `${data.title}\n\nRead More on ${data.url}\n\n-By Kal Tak News`
          }).then((res) => console.log(res))
            .catch((error) => console.log(error))
    }
    return (
        <SafeAreaView>
            <SearchModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
            <View style={styles.header}>
                {isNewsItem||isSearchItem?(
                    <Icon 
                        name="arrow-back"
                        size={30}
                        style={styles.leftIcon}
                        onPress={() => navigation.goBack()}
                    />
                ):(
                    <Icon 
                        name="menu"
                        size={30}
                        style={styles.leftIcon}
                        onPress={() => navigation.openDrawer()}
                    />
                )}

                {isSearchItem?<Text style={styles.screenTitle}>{data.title}</Text>:<Image 
                    style={styles.logo}
                    source={require('../../assets/logo.png')} 
                />}

                {isNewsItem?(
                    <Icon 
                        name="share"
                        size={30}
                        style={styles.rightIcon}
                        onPress={handleShare}
                    />
                ):(
                    isSearchItem?(<></>):
                    <Icon 
                        name="search"
                        size={30}
                        style={styles.rightIcon}
                        onPress={()=>setModalVisible(!modalVisible)}
                    />
                )}
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
    },
    screenTitle: {
        position: "absolute",
        left: 64,
        fontSize: 20,
        color: "#fff",
    }
})
