import React, { useRef, useEffect, useState } from 'react';
import type { PropsWithChildre } from 'react';
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

import Constants from '../styles/variables.jsx';

function ProfileScreen({ route, navigation }) {
  const { data } = route.params;
  return (
    <SafeAreaView style={[styles.background, {flex: 1}]}>
      {/* Create top navigation bar */}
      <View style={{flexDirection: 'row', width: '100%', backgroundColor: 'white', height: Constants.NAVBAR_HEIGHT()}}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={require('../assets/arrow.png')} style={{width: 24, height: 24, margin: (Constants.NAVBAR_HEIGHT() - 24) / 2, transform: [{rotate: '90deg'}]}}/>
        </Pressable>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text style={[styles.semibold, {fontSize: 22, alignSelf: 'center', marginBottom: 2}]}>
            {data.name_first + ' ' + data.name_last}
          </Text>
        </View>
        <View style={{width: 24, height: 24, margin: (Constants.NAVBAR_HEIGHT() - 24) / 2}}/>
        {/* Absolute positioned element to handle shadow opacity */}
        <View style={{ position: 'absolute', zIndex: -1, top: Constants.NAVBAR_HEIGHT(), left: 0, right: 0, overflow: 'hidden', paddingBottom: 125 }}>
          <View style={{flexDirection: 'row', width: '100%', height: 1, backgroundColor: 'white', shadowColor: "#000", shadowOffset: {width: 0, height: 6, }, shadowOpacity: 0.37, shadowRadius: 7.49, elevation: 12, opacity: 0.6 }}/> 
        </View>
      </View>

      {/* Render contents of page */}
      <ScrollView>
        <View 
          style={{width: '100%', marginVertical: 10, justifyContent: 'center', alignItems: 'center'}}
        >
          <Image 
            source={data.image}
            style={{height: 80, width: 80, marginBottom: 10, marginTop: 20, borderRadius: 100}}
          />
          <View style={{backgroundColor: Constants.LIGHTBLUE(), marginVertical: 10, paddingHorizontal: 20, paddingVertical: 6, borderRadius: 100}}>
            <Text style={[styles.bold, {fontSize: 14, color: '#4B75DC'}]}>
              {data.title}
            </Text>
          </View>
          <View style={{flexDirection: 'row', margin: 10}}>
            <View style={{height: 44, width: 120, borderRadius: 100, backgroundColor: Constants.LIGHTBLUE()}}/>
            <View style={{height: 44, width: 50, borderRadius: 100, marginHorizontal: 10, backgroundColor: Constants.LIGHTBLUE()}}/>
            <View style={{height: 44, width: 50, borderRadius: 100, backgroundColor: Constants.LIGHTBLUE()}}/>
          </View>
          <View
            style={{width: '84%', marginHortizontal: '8%', marginVertical: 10}}
          >
            <Text style={[styles.regular, {fontSize: 14}]}>
              {data.description}
            </Text>
            <View style={{height: 160, width: '100%', borderRadius: 20, marginVertical: 20, backgroundColor: Constants.LIGHTBLUE()}}/>
            <View style={{height: 140, width: '100%', borderRadius: 20, marginVertical: 0, backgroundColor: Constants.LIGHTBLUE()}}/>
            <View style={{height: 130, width: '100%', borderRadius: 20, marginVertical: 20, backgroundColor: Constants.LIGHTBLUE()}}/>
            <View style={{height: 190, width: '100%', borderRadius: 20, marginVertical: 0, backgroundColor: Constants.LIGHTBLUE()}}/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
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

export default ProfileScreen;