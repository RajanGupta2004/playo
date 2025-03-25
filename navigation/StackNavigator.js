


import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from "react-native-vector-icons/AntDesign"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import PlayScreens from '../screens/PlayScreens';
import BookScreen from '../screens/BookScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import VenueScreenInfo from '../screens/VenueScreenInfo';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='HOME' component={HomeScreen} options={{
        // headerShown: false,
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name={focused ? 'home' : 'home-outline'}
            size={24}
            color={focused ? 'green' : 'gray'}
          />
        ),
      }} />

      <Tab.Screen name='PLAY' component={PlayScreens} options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          focused ? <AntDesign name="addusergroup" size={24} color={focused ? 'green' : 'gray'} /> :
            <AntDesign
              name="addusergroup"
              size={24}
              color={focused ? 'green' : 'gray'}
            />
        ),
      }} />


      <Tab.Screen name='BOOK' component={BookScreen} options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          focused ? <SimpleLineIcons name="book-open" size={24} color={focused ? 'green' : 'gray'} /> :
            <SimpleLineIcons
              name="book-open"
              size={24}
              color={focused ? 'green' : 'gray'}
            />
        ),
      }} />


      <Tab.Screen name='PROFILE' component={ProfileScreen} options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name={focused ? 'person-outline' : 'person-outline'}
            size={24}
            color={focused ? 'green' : 'gray'}
          />
        ),
      }} />
    </Tab.Navigator>
  )
}


const AuthStack = () => {
  return (
    <Stack.Navigator>

    </Stack.Navigator>
  )
}


const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Main' component={BottomTabs} options={{ headerShown: false }} />
      <Stack.Screen name='Venue' component={VenueScreenInfo} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  )
}

export default StackNavigator