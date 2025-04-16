import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';

const CreateActivity = () => {
  const [sports, setSports] = useState('');
  const [area, setArea] = useState('');
  const [date, setDate] = useState('');
  const [timeInterval, setTimeInterval] = useState('');
  return (
    <SafeAreaView>
      <View style={{marginHorizontal: 10, marginVertical: 5}}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </View>
      <ScrollView>
        <Text style={{fontSize: 24, fontWeight: 'bold', padding: 10}}>
          Create Activity
        </Text>

        <View
          style={{
            padding: 10,
          }}>
          <Pressable
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 20,
              marginTop: 10,
              marginVertical: 5,
            }}>
            <MaterialCommunityIcons name="whistle" size={24} color="gray" />
            <View style={{flex: 1}}>
              <Text style={{fontSize: 17, fontWeight: '700'}}>Sports</Text>
              <TextInput
                placeholder="eg. badminton/cricket"
                placeholderTextColor="gray"
                onChangeText={setSports}
              />
            </View>
            <AntDesign name="arrowright" size={24} color="gray" />
          </Pressable>
          <Text style={{borderColor: '#E0E0E0', borderWidth: 0.7, height: 1}} />

          <Pressable
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 20,
              marginTop: 10,
              marginVertical: 5,
            }}>
            <Entypo name="location" size={24} color="gray" />
            <View style={{flex: 1}}>
              <Text style={{fontSize: 17, fontWeight: '700'}}>Area</Text>
              <TextInput
                placeholder="Location ot venue name"
                placeholderTextColor="gray"
                onChangeText={setArea}
              />
            </View>
            <AntDesign name="arrowright" size={24} color="gray" />
          </Pressable>
          <Text style={{borderColor: '#E0E0E0', borderWidth: 0.7, height: 1}} />
          <Pressable
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 20,
              marginTop: 10,
              marginVertical: 5,
            }}>
            <Feather name="calendar" size={24} color="gray" />
            <View style={{flex: 1}}>
              <Text style={{fontSize: 17, fontWeight: '700'}}>Date</Text>
              <TextInput
                editable={false}
                placeholderTextColor="gray"
                placeholder={date ? date : 'pick up a day'}
              />
            </View>
            <AntDesign name="arrowright" size={24} color="gray" />
          </Pressable>
          <Text style={{borderColor: '#E0E0E0', borderWidth: 0.7, height: 1}} />
          <Pressable
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 20,
              marginTop: 10,
              marginVertical: 5,
            }}>
            <AntDesign name="clockcircleo" size={24} color="gray" />
            <View style={{flex: 1}}>
              <Text style={{fontSize: 17, fontWeight: '700'}}>Time</Text>
              <TextInput
                placeholderTextColor="gray"
                placeholder={
                  timeInterval ? timeInterval : 'pick up a exact day'
                }
              />
            </View>
            <AntDesign name="arrowright" size={24} color="gray" />
          </Pressable>
          <Text style={{borderColor: '#E0E0E0', borderWidth: 0.7, height: 1}} />

          <View style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
            <Feather name="activity" size={24} color="black" />
            <View>
              <Text style={{marginVertical: 10, fontWeight: '500'}}>
                Activity access
              </Text>
              <Pressable style={{flexDirection: 'row', gap: 20}}>
                <Pressable
                  style={{
                    backgroundColor: '#07bc0c',
                    color: 'white',
                    width: 150,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 5,
                    flexDirection: 'row',
                    padding: 8,
                    gap: 5,
                  }}>
                  <Ionicons name="earth" size={24} color="white" />
                  <Text style={{color: 'white', fontWeight: '500'}}>
                    Public
                  </Text>
                </Pressable>

                <Pressable
                  style={{
                    backgroundColor: '#07bc0c',
                    color: 'white',
                    width: 150,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 5,
                    flexDirection: 'row',
                    padding: 8,
                    gap: 5,
                  }}>
                  <AntDesign name="lock1" size={24} color="white" />
                  <Text style={{color: 'white', fontWeight: '500'}}>
                    Private Only
                  </Text>
                </Pressable>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateActivity;

const styles = StyleSheet.create({});
