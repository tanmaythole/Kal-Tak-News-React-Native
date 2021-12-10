import React, { useEffect, useState } from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import {BACKEND_URL} from '@env';
import NewsCard from './NewsCard';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';

export default function News({category}) {
    const [isLoading, setLoading] = useState(true);
    const [articles, setArticles] = useState([]);

    const updateNews = async () => {
        let url;
        if(category===null){
            url = `${BACKEND_URL}/category/general?page=1&pageSize=20`
        } else {
            url = `${BACKEND_URL}/category/${category}?page=1&pageSize=20`
        }

        try {
            const data = await axios
            .get(url)
            .then((res) => {
                setArticles(res.data.articles);
            });
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        updateNews()
    }, [category])

    return (
        <View style={styles.newsContainer}>
            {isLoading ? <ActivityIndicator size="large" color="red" /> : (
                <ScrollView>
                {articles.map((e) => {
                    return <NewsCard key={e.url} data={e} />
                })}
                </ScrollView>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    newsContainer: {
        paddingVertical: 10,
        paddingHorizontal: 10
    }
})
