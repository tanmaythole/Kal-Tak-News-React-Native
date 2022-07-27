import React, { useEffect, useState } from 'react'
import { ActivityIndicator, StyleSheet, View, FlatList } from 'react-native'
import {BACKEND_URL} from '@env';
import NewsCard from './NewsCard';
import axios from 'axios';

export default function News({ category, isCatChanged, setIsCatChanged, query }) {
    const [isLoading, setLoading] = useState(true);
    const [articles, setArticles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [noOfPages, setNoOfPages] = useState(0);
    const [totalResults, setTotalResults] = useState(0);
    let pageSize = 20;

    const updateNews = async () => {
        let url;
        if(category==="search"){
            url = `${BACKEND_URL}/search/${query}?page=${currentPage}&pageSize=${pageSize}`
        } else if(category===null){
            url = `${BACKEND_URL}/category/general?page=${currentPage}&pageSize=${pageSize}`
        } else {
            url = `${BACKEND_URL}/category/${category}?page=${currentPage}&pageSize=${pageSize}`
        }

        try {
            const data = await axios
            .get(url)
            .then(async (res) => {
                setTotalResults(res.data.totalResults);
                setNoOfPages(Math.ceil(res.data.totalResults/pageSize));
                if(isCatChanged){
                    setArticles(res.data.articles);
                    setIsCatChanged(!isCatChanged);
                } else {
                    setArticles([...articles, ...res.data.articles]);
                }
            });
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
    }

    const loadMore = () => {
        setCurrentPage(currentPage + 1);
    }

    useEffect(() => {
        updateNews()
    }, [currentPage, category])

    useEffect(() => {
        setArticles([]);
        setCurrentPage(1)
    }, [category])
    

    return (
        <View style={styles.newsContainer}>
            {isLoading ? <ActivityIndicator size="large" color="red" /> : (
                <FlatList 
                    data={articles}
                    renderItem={({item, index}) => (
                        <NewsCard key={index} data={item} />
                    )}
                    keyExtractor={item => item.url}
                    ListFooterComponent={totalResults!==articles.length?<ActivityIndicator size="large" color="red" />:""}
                    onEndReached={currentPage<noOfPages?loadMore:""}
                    onEndReachedThreshold={0}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    newsContainer: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        flex: 1
    }
})
