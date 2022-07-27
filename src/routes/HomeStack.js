import React from 'react'
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Headers from '../Components/Headers';
import Home from '../Screens/Home';
import NewsItem from '../Screens/NewsItem';
import SearchResults from '../Screens/SearchResults';


const Stack = createNativeStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Home"
                component={Home}
                options={({route, navigation}) => {
                    return {
                        title: "Home",
                        header: () => <Headers navigation={navigation} />
                    }
                }}
            />

            <Stack.Screen 
                name="NewsItem"
                component={NewsItem}
                options={({route, navigation}) => {
                    return {
                        title: "NewsItem",
                        header: () => <Headers navigation={navigation} data={route.params} isNewsItem={true} />
                    }
                }}
            />

        <Stack.Screen 
                name="SearchResults"
                component={SearchResults}
                options={({route, navigation}) => {
                    return {
                        title: "SearchResults",
                        header: () => <Headers navigation={navigation} data={route.params} isSearchItem={true} />,
                        // query: route.params.query
                    }
                }}
            />
        </Stack.Navigator>
    )
}
