import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import globalStyles from '../styles/GlobalStyles';
import { WebView } from 'react-native-webview';

export default function NewsItem({ route }) {
    const {url} = route.params;
    return (
        <View style={globalStyles.container}>
            <WebView source={{uri: url}} />
        </View>
    )
}

const styles = StyleSheet.create({})
