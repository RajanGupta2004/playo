import {View, Text, Pressable} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {getRegistrationProgress} from '../registrationUtils';
import {AuthContext} from '../AuthContext';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const PreFinalScreen = () => {
  const [userData, setUserData] = useState();
  const {token, setToken} = useContext(AuthContext);
  const navigation = useNavigation();

  const getAllScreenData = async () => {
    try {
      const screens = ['Register', 'Password', 'NameScreen', 'Image'];

      let userData = {};
      for (const screenName of screens) {
        const screenData = await getRegistrationProgress(screenName);
        // console.log('screenData', screenData);

        if (screenData) {
          userData = {...userData, ...screenData};
        }
      }

      setUserData(userData);
    } catch (error) {
      console.log('Error to get All Screen Data', error);
    }
  };

  console.log('userData', userData);
  const clearAllScreenData = () => {
    try {
      const screens = ['Register', 'Password', 'NameScreen', 'Image'];

      for (const screenName of screens) {
        const key = `registration_progress_${screenName}`;
        AsyncStorage.removeItem(key);
        console.log('All screen data cleared!');
      }
    } catch (error) {
      console.log('Error', error);
    }
  };

  const registerUser = async () => {
    try {
      const response = await axios.post(
        'http://192.168.171.29:8000/api/v1/register',
        userData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      console.log('response', response.data);

      const token = response.data?.data?.token;
      console.log('token', token);
      setToken(token);
      AsyncStorage.setItem('token', token);

      clearAllScreenData();
    } catch (error) {
      console.log('Error in Register', error.message);
    }
  };
  useEffect(() => {
    if (token) {
      navigation.replace('MainStack', {screen: 'Main'});
    }
  }, [token]);

  console.log('Token', token);

  useEffect(() => {
    getAllScreenData();
  }, []);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{marginTop: 20}}>
        <Text
          style={{
            fontSize: 32,
            fontWeight: 'bold',
            fontFamily: 'GeezaPro-Bold',
            marginLeft: 20,
          }}>
          All set to register
        </Text>

        <Text
          style={{
            fontSize: 32,
            fontWeight: 'bold',
            fontFamily: 'GeezaPro-Bold',
            marginLeft: 20,
            marginTop: 10,
          }}>
          Setting up your profile for you
        </Text>
      </View>
      <Pressable
        onPress={registerUser}
        style={{
          backgroundColor: '#03C03C',
          padding: 15,
          marginTop: 'auto',
          marginBottom: 20,
        }}>
        <Text
          style={{
            textAlign: 'center',
            color: 'white',
            fontWeight: '600',
            fontSize: 15,
          }}>
          Finish Registering
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default PreFinalScreen;
