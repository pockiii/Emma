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
import Users from '../contexts/Data.js';

function HomeScreen({ navigation }) {
  const [focusIndex, setFocusIndex] = useState(0);
  const [scrolling, setScrolling] = useState(false);

  const horizontalFlatListRef = useRef(null);
  const verticalFlatListRef = useRef(null);

  const scrollToIndex = (index) => {
    setFocusIndex(index);
    //Scrolling = true will disable function handleViewableItemsChanged to avoid unintended behaviour
    setScrolling(true);
    horizontalFlatListRef.current.scrollToIndex({ animated: true, index, viewPosition: 0.5 });
    verticalFlatListRef.current.scrollToIndex({ animated: true, index, viewPosition: 0.5 });
    setTimeout(() => {
      setScrolling(false);
    }, 500);
  };

  const horizontalData = Array.from({ length: 20 }, (_, index) => ({
    key: String(index),
    value: `Horizontal Item ${index}`,
  }));

  const verticalData = Array.from({ length: 20 }, (_, index) => ({
    key: String(index),
    value: `Vertical Item ${index}`,
  }));

  const handleViewableItemsChanged = ({ viewableItems }) => {
    if(scrolling) return;
    setFocusIndex(viewableItems[0].index);
    horizontalFlatListRef.current.scrollToIndex({ animated: true, index: viewableItems[0].index, viewPosition: 0.5 });
  };

  return (
    <SafeAreaView style={[styles.background, {flex: 1}]}>
      {/* Create top navigation bar */}
      <View style={{flexDirection: 'row', width: '100%', backgroundColor: 'white', height: Constants.NAVBAR_HEIGHT()}}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text style={[styles.semibold, {fontSize: 22, alignSelf: 'center', marginBottom: 2}]}>
            Contacts
          </Text>
        </View>
      </View>
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          ref={horizontalFlatListRef}
          data={Users}
          renderItem={({item, index}) => 
            <Pressable 
              key={item.uid}
              onPress={() => scrollToIndex(index)} 
            >
              <View style={{marginHorizontal: 20, marginBottom: 20, borderRadius: 100, borderWidth: 3, borderColor: index === focusIndex ? Constants.BLUE() : 'white'}}>
                <Image 
                  source={item.image}
                  style={{height: 60, width: 60, margin: 2, borderRadius: 100}}
                />
              </View>
            </Pressable>
          }
          keyExtractor={item => item.id}
        />
      </View>
      {/* Absolute positioned element to handle shadow opacity */}
      <View style={{ position: 'absolute', zIndex: -1, top: Constants.NAVBAR_HEIGHT() + 60 + 20 + 6, left: 0, right: 0, overflow: 'hidden', paddingBottom: 125 }}>
        <View style={{flexDirection: 'row', width: '100%', height: 1, backgroundColor: 'white', shadowColor: "#000", shadowOffset: {width: 0, height: 6, }, shadowOpacity: 0.37, shadowRadius: 7.49, elevation: 12, opacity: 0.6 }}/> 
      </View>
      <FlatList
        ref={verticalFlatListRef}
        data={Users}
        renderItem={({item, index}) => 
          <Pressable 
            key={item.uid}
            onPress={() => scrollToIndex(index)} 
            style={{width: '100%', marginVertical: 10, justifyContent: 'center', alignItems: 'center'}}
          >
            <Text onPress={() => navigation.navigate('Profile', {data: item})} style={[styles.bold, {fontSize: 22}]}>
              {item.name_first}
              <Text style={[styles.regular, {fontSize: 22}]}>
                {' ' + item.name_last}
              </Text>
            </Text>
            <View style={{backgroundColor: Constants.LIGHTBLUE(), marginVertical: 10, paddingHorizontal: 20, paddingVertical: 6, borderRadius: 100}}>
              <Text style={[styles.bold, {fontSize: 12, color: '#4B75DC'}]}>
                {item.title}
              </Text>
            </View>
            <View
              style={{width: '84%', marginHortizontal: '8%'}}
            >
              <Text style={[styles.regular, {fontSize: 14}]}>
                {item.description}
              </Text>
            </View>
          </Pressable>
        }
        onViewableItemsChanged={handleViewableItemsChanged}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 100,
        }}
      />
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

export default HomeScreen;