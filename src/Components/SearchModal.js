import React, { useState } from 'react'
import { Keyboard, Modal, StyleSheet, Text, TextInput, View } from 'react-native'
import globalStyles from '../styles/GlobalStyles'
import {MaterialIcons} from '@expo/vector-icons';

export default function SearchModal({modalVisible, setModalVisible}) {
    const [searchInput, setSearchInput] = useState("");

    const SearchQuery = () => {
        console.log(searchInput)
    }

    return (
        <Modal animationType="slide" visible={modalVisible} onRequestClose={() => { setModalVisible(!modalVisible) }} >
            <View style={globalStyles.container}>
                <View style={styles.searchContainer}>
                    <MaterialIcons
                        name='arrow-back'
                        size={30}
                        style={styles.leftIcon}
                        onPress={() => setModalVisible(!modalVisible)}
                    />
                    <TextInput
                        placeholder='Search...'
                        placeholderTextColor="#a1a1a1"
                        style={styles.searchBox}
                        keyboardType='default'
                        returnKeyType='search'
                        onSubmitEditing={SearchQuery}
                        value={searchInput}
                        onChangeText={(e) => setSearchInput(e)}
                    />
                    <MaterialIcons
                        name='search'
                        size={30}
                        style={[styles.rightIcon, searchInput.length<2?{ transform: [{ scale: 0 }] }:""]}
                        onPress={() => setModalVisible(!modalVisible)}
                    />
                </View>

                <View style={styles.container}>
                    <Text style={styles.topicTitle}>Recent Searches</Text>

                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    searchContainer: {
        margin: 10,
        height: 52,
        borderRadius: 5,
        backgroundColor: "#474747",
        flexDirection: "row",
        justifyContent:"center",
        alignItems: "center",
    },
    leftIcon: {
        color: "#fff",
        position: "absolute",
        left: 10
    },
    rightIcon: {
        color: "#fff",
        position: "absolute",
        right: 10,
    },
    searchBox: {
        fontSize: 20,
        width: "75%",
        color: "#fff",
    },
    container: {
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    topicTitle: {
        color: "#7a7a7a",
        fontSize: 14,
        textTransform: "uppercase"
    }
})
