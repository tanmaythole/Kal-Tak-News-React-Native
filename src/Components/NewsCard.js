import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;


export default function NewsCard({ data }) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('NewsItem', {url: data.url, title:data.title})} >
            <Image style={styles.img} source={{uri:data.urlToImage}} />
            <View style={styles.textPart}>
                <Text style={styles.publication}>{data.source?data.source.name:"KalTakNews"}</Text>
                <Text style={styles.title} numberOfLines={3}>{data.title}</Text>
                <Text style={styles.authorInfo}>- By {data.author?data.author:"Unknown"} On {new Date(data.publishedAt).toLocaleString()}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        marginVertical: 5,
        backgroundColor: "#4f4f4f",
        borderRadius: 10,
        flexDirection: "row",
    },
    img: {
        backgroundColor: "#333",
        width: 100,
        minHeight: 120,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    textPart: {
        paddingVertical: 15,
        paddingHorizontal: 10,
        width: deviceWidth - 120
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: "#fff"
    },
    authorInfo: {
        fontSize: 12,
        color: "#8c8c8c",
        bottom: 10,
        position: "absolute",
        left: 10
    },
    publication: {
        position: "absolute",
        top: 0,
        right: 0,
        backgroundColor: "red",
        paddingVertical: 2,
        paddingHorizontal: 7,
        borderRadius: 10,
        elevation: 5,
        color: "#fff",
        fontWeight: "bold",
        fontSize: 9
    }
})
