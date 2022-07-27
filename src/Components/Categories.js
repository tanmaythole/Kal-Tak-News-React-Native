import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export default function Categories({ selectedCat, setSelectedCat }) {
    const categories = [
        ['business', 'Business'],
        ['entertainment', 'Entertainment'],
        ['health','Health'],
        ['science','Science'],
        ['sports','Sports'],
        ['technology','Technology']
    ];

    const handleCatPress = async (index) => {
        if(selectedCat===categories[index][0]){
            setSelectedCat(null);
        } else {
            await setSelectedCat(categories[index][0]);
        }
    }

    return (
        <View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {categories.map((category, index) => (
                    <TouchableOpacity 
                        key={index} 
                        style={[selectedCat===categories[index][0]?styles.selected:"", styles.category]} 
                        onPress={() => handleCatPress(index)}
                    >
                        <Text style={selectedCat===categories[index][0]?{color:"#333"}:{color:"#fff"}}>{category[1]}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    category: {
        marginTop: 10,
        marginBottom: 5,
        marginHorizontal: 5,
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#fff",
    },
    selected: {
        backgroundColor:"#fff"
    }
})
