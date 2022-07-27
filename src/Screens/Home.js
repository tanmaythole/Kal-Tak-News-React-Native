import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Categories from '../Components/Categories';
import globalStyles from '../styles/GlobalStyles';
import News from '../Components/News';

export default function Home() {
    const [selectedCat, setSelectedCat] = useState(null);
    const [isCatChanged, setIsCatChanged] = useState(false);

    const handleChangedCat = (cat) => {
        setSelectedCat(cat);
        setIsCatChanged(!isCatChanged);
    }

    return (
        <View style={globalStyles.container}>
            <Categories selectedCat={selectedCat} setSelectedCat={handleChangedCat} />
            <News category={selectedCat} isCatChanged={isCatChanged} setIsCatChanged={setIsCatChanged} />
        </View>
    )
}

const styles = StyleSheet.create({})
