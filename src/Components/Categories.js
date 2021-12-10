import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export default function Categories() {
    const categories = [
        ['business', 'Business'],
        ['entertainment', 'Entertainment'],
        ['health','Health'],
        ['science','Science'],
        ['sports','Sports'],
        ['technology','Technology']
    ];
    const [selectedCat, setSelectedCat] = useState(null);

    const handleCatPress = (index) => {
        if(selectedCat===index){
            setSelectedCat(null);
        } else {
            setSelectedCat(index)
        }
    }

    return (
        <View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {categories.map((category, index) => (
                    <TouchableOpacity 
                        key={index} 
                        style={[selectedCat===index?styles.selected:"", styles.category]} 
                        onPress={() => handleCatPress(index)}
                    >
                        <Text style={selectedCat===index?{color:"#333"}:{color:"#fff"}}>{category[1]}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    category: {
        margin: 10,
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
