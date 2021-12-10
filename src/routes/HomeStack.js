import React from 'react'
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Headers from '../Components/Headers';
import Home from '../Screens/Home';

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
        </Stack.Navigator>
    )
}
