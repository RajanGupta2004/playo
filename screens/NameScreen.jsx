import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  getRegistrationProgress,
  saveRegistrationProgress,
} from '../registrationUtils';

const NameScreen = () => {
  const [firstName, setFirstName] = useState('');

  const [lastName, setLastName] = useState('');

  const navigation = useNavigation();

  const saveName = () => {
    if (firstName.trim() !== '') {
      saveRegistrationProgress('NameScreen', {firstName, lastName});
    }
    navigation.navigate('Image');
  };

  useEffect(() => {
    getRegistrationProgress('NameScreen').then(progressData => {
      setFirstName(progressData.firstName || '');
      setFirstName(progressData.lastName || '');
    });
  }, []);

  return (
    <>
      <ScrollView style={{flex: 1}}>
        <View style={{padding: 12}}>
          <Ionicons name="arrow-back" size={24} color="black" style={{}} />
          <View style={{}}>
            <Text style={{fontSize: 18, fontWeight: 600}}>
              Complete Your Profile
            </Text>
            <Text style={{marginVertical: 10, color: 'gray'}}>
              What would you like your mates to call you? ❤️
            </Text>
          </View>

          <View
            style={{
              marginVertical: 25,
              flexDirection: 'column',
              gap: 20,
            }}>
            <View>
              <Text style={{color: 'gray', marginVertical: 5}}>
                First Name *
              </Text>
              <TextInput
                onChangeText={setFirstName}
                style={{borderWidth: 1, borderRadius: 5, borderColor: 'gray'}}
                placeholder="Enter first Name...."
              />
            </View>
            <View>
              <Text style={{color: 'gray', marginVertical: 5}}>Last Name</Text>
              <TextInput
                onChangeText={setLastName}
                style={{borderWidth: 1, borderRadius: 5, borderColor: 'gray'}}
                placeholder="Enter Last Name...."
              />
            </View>
          </View>
        </View>
      </ScrollView>

      <Pressable
        onPress={() => saveName()}
        style={{
          backgroundColor: 'green',
          marginVertical: 10,
          padding: 10,
          marginHorizontal: 7,
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontSize: 19, fontWeight: 'bold'}}>
          Next
        </Text>
      </Pressable>
    </>
  );
};

export default NameScreen;

const styles = StyleSheet.create({});
