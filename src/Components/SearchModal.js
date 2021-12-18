import React, { useState, useEffect } from 'react'
import { Keyboard, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import globalStyles from '../styles/GlobalStyles'
import {MaterialIcons} from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function SearchModal({modalVisible, setModalVisible}) {
    const asyncStorageKey = "@recentSearches-kal-tal-news";

    const [searchInput, setSearchInput] = useState("");
    const [recentResults, setRecentResults] = useState([]);

    const SearchQuery = async () => {
        const newResults = [...recentResults, searchInput]
        AsyncStorage.setItem(asyncStorageKey, JSON.stringify(newResults)).then(() => {
            setRecentResults(newResults);
        }).catch((err) => {
            console.log(err);
        });
    }

    const getSearches = async () => {
        AsyncStorage.getItem(asyncStorageKey).then((val) => {
            if(val!==null){
                setRecentResults(JSON.parse(val));
            }
        }).catch((err) => {
            console.log(err);
        });
    }
    useEffect(() => {
        getSearches()
    }, [modalVisible])

    const handleClear = async (index) => {
        const newResults = recentResults.filter((item, ind) => { return ind!==index })
        AsyncStorage.setItem(asyncStorageKey, JSON.stringify(newResults)).then(() => {
            setRecentResults(newResults);
        })
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
                    {recentResults.map((e, index) => {
                        return (
                            <View style={styles.item} key={index}>
                                <Text style={{color: "#fff"}}>{e}</Text>
                                <MaterialIcons
                                    name='clear'
                                    size={12}
                                    style={styles.clearIcon}
                                    onPress={() => handleClear(index)}
                                />
                            </View>
                        )
                    })}
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
    },
    item: {
        backgroundColor: "#5c5c5c",
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    clearIcon: {
        color:"#e0e0e0"
    }
})
