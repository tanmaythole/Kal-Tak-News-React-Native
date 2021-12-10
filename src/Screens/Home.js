import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Categories from '../Components/Categories';
import globalStyles from '../styles/GlobalStyles';

export default function Home() {
    return (
        <View style={globalStyles.container}>
            <Categories />
        </View>
    )
}

const styles = StyleSheet.create({})
