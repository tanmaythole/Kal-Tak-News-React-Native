import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Categories from '../Components/Categories';
import globalStyles from '../styles/GlobalStyles';
import News from '../Components/News';

export default function Home() {
    const [selectedCat, setSelectedCat] = useState(null);

    return (
        <View style={globalStyles.container}>
            <Categories selectedCat={selectedCat} setSelectedCat={setSelectedCat} />
            <News category={selectedCat} />
        </View>
    )
}

const styles = StyleSheet.create({})
