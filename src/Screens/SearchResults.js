import React from 'react'
import { StyleSheet, View } from 'react-native'
import News from '../Components/News'
import globalStyles from '../styles/GlobalStyles'
// import { useNavigation } from '@react-navigation/native';


export default function SearchResults({route, navigation}) {
    return (
        <View style={globalStyles.container}>
            <News category="search" query={route.params.query} />
        </View>
    )
}

const styles = StyleSheet.create({})
