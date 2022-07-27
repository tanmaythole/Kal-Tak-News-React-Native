import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import DrawerStack from './routes/DrawerStack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

export default function Main() {
    return (
        <SafeAreaProvider>
          <StatusBar backgroundColor='#000' animated={true} />
          <NavigationContainer>
            <DrawerStack />
          </NavigationContainer>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({})
