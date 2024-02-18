/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useRef, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  View,
  Pressable,
  FlatList,
} from 'react-native';

import HomeScreen from './pages/HomeScreen.jsx';
import ProfileScreen from './pages/ProfileScreen.jsx';
import Constants from './styles/variables.jsx';

function BottomBar({ navigation }) {
  return(
    <View style={{flex: 1, position: 'absolute', zIndex: 10, elevation: (Platform.OS === 'android') ? 50 : 0, bottom: 0, left: 0, right: 0, width: '100%'}}>
      <View style={{backgroundColor: Constants.BLUE(), width: '90%', marginVertical: 20, marginHorizontal: '5%', borderRadius: 100, justifyContent: 'center', flexDirection: 'row'}}>
        <Image source={require('./assets/home.png')} style={{width: 24, height: 24, margin: 16}}/>
        <Image source={require('./assets/grid.png')} style={{width: 24, height: 24, margin: 16}}/>
        <Image source={require('./assets/wallet.png')} style={{width: 24, height: 24, margin: 16}}/>
      </View>
    </View>
  )
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <View style={{flex: 1}}>
      <BottomBar/>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ animation: 'none' }}>
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white'
  },
  bold: {
    fontWeight: "700",
    color: "black"
  },
  semibold: {
    fontWeight: "500",
    color: "black"
  },
  regular: {
    fontWeight: "400",
    color: "black"
  }
});

export default App;
