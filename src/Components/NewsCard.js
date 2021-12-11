import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;


export default function NewsCard({ data }) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('NewsItem', {url: data.url})} >
            {/* {console.log(data.url)} */}
            <Image style={styles.img} source={{uri:data.urlToImage}} />
            <View style={styles.textPart}>
                <Text style={styles.publication}>{data.source?data.source.name:"KalTakNews"}</Text>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.authorInfo}>- By {data.author?data.author:"Unknown"} On {new Date(data.publishedAt).toLocaleString()}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        marginVertical: 5,
        // padding: 20,
        backgroundColor: "#fff",
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
        paddingVertical: 8,
        paddingHorizontal: 10,
        width: deviceWidth - 120
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: "#212529"
    },
    authorInfo: {
        fontSize: 12,
        color: "#6C757D"
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
        fontSize: 10
    }
})
