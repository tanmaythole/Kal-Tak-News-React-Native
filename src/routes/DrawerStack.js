import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './HomeStack';
import Headers from '../Components/Headers';
import About from '../Screens/About';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
                    headerShown: false,
                    drawerIcon: ({color}) => {
                        return <Ionicons
                            name='home-outline'
                            size={22}
                            color={color}
                        />
                    }
                }}
            />
            <Drawer.Screen 
                name="About"
                component={About}
                options={({ navigation }) => {
                        return {
                            title: "About",
                            header: () => <Headers navigation={navigation} />,
                            drawerIcon: ({color}) => {
                                return <Ionicons
                                    name='information-circle-outline'
                                    size={22}
                                    color={color}
                                />
                            }
                        }
                    }
                }
            />
        </Drawer.Navigator>
    )
}
