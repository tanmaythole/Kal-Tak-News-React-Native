import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './HomeStack';
import Headers from '../Components/Headers';
import About from '../Screens/About';

const Drawer = createDrawerNavigator();

export default function DrawerStack() {
    return (
        <Drawer.Navigator 
            screenOptions={{
                drawerStyle: {
                    backgroundColor: '#333',
                    color: "#fff"
                },
                drawerActiveTintColor: "#fff",
                drawerInactiveTintColor: "#a1a1a1",
            }}
        >
            <Drawer.Screen 
                name="HomeStack"
                component={HomeStack}
                options={{
                    title: "Home",
                    headerShown: false
                }}
            />
            <Drawer.Screen 
                name="About"
                component={About}
                options={({ navigation }) => {
                    return {
                        title: "About",
                        header: () => <Headers navigation={navigation} />
                    }
                }}
            />
        </Drawer.Navigator>
    )
}
