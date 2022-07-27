import React from 'react'
import { StyleSheet, View } from 'react-native'
import globalStyles from '../styles/GlobalStyles';
import { WebView } from 'react-native-webview';

export default function NewsItem({ route }) {
    const {url} = route.params;
    return (
        <View style={globalStyles.container}>
            <WebView source={{uri: url}} style={styles.webview} />
        </View>
    )
}

const styles = StyleSheet.create({
    webview: {
        marginHorizontal: 10
    }
})
