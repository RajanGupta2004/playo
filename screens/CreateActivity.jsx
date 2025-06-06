import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation, useRoute} from '@react-navigation/native';
import Modal from 'react-native-modal';
import moment from 'moment';
const CreateActivity = () => {
  const [sports, setSports] = useState('');
  const [area, setArea] = useState('');
  const [date, setDate] = useState('');
  const [timeInterval, setTimeInterval] = useState('');
  const [selected, setSelected] = useState('Private only');
  const [noOfPlayers, setnoOfPlayers] = useState(0);
  const navigation = useNavigation();
  const [tagVenue, setTagVenue] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const route = useRoute();

  console.log('route', route);

  const generateDate = () => {
    let dates = [];

    for (let i = 0; i < 10; i++) {
      const date = moment().add(i, 'days');
      let displayDate;
      if (i == 0) {
        displayDate = 'Today';
      } else if (i == 1) {
        displayDate = 'Tomarrow';
      } else if (i == 2) {
        displayDate = 'Day after ';
      } else {
        displayDate = date.format('Do MMMM');
      }

      dates.push({
        id: i.toString(),
        displayDate,
        dayOfWeek: date.format('dddd'),
        actualDate: date.format('Do MMMM'),
      });
    }

    return dates;
  };

  const dates = generateDate();

  const selectDate = date => {
    setModalVisible(false);
    setDate(date.actualDate);
  };

  console.log('prepared Date ', dates);

  useEffect(() => {
    if (route.params?.timeInterval) {
      setTimeInterval(route?.params?.timeInterval);
    }
  }, [route.params]);

  useEffect(() => {
    if (route.params?.taggedVenue) {
      setTagVenue(route?.params?.taggedVenue);
    }
  }, [route.params]);
  return (
    <>
      <SafeAreaView style={{backgroundColor: 'white'}}>
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
              marginBottom: 20,
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
            <Text
              style={{borderColor: '#E0E0E0', borderWidth: 0.7, height: 1}}
            />

            <Pressable
              onPress={() => navigation.navigate('TagVenue')}
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
                  value={area ? area : tagVenue}
                  placeholder="Location ot venue name"
                  placeholderTextColor="gray"
                  onChangeText={setArea}
                />
              </View>
              <AntDesign name="arrowright" size={24} color="gray" />
            </Pressable>
            <Text
              style={{borderColor: '#E0E0E0', borderWidth: 0.7, height: 1}}
            />

            <Pressable
              onPress={() => setModalVisible(!modalVisible)}
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

            <Text
              style={{borderColor: '#E0E0E0', borderWidth: 0.7, height: 1}}
            />

            <Pressable
              onPress={() => navigation.navigate('Time')}
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

            <Text
              style={{borderColor: '#E0E0E0', borderWidth: 0.7, height: 1}}
            />

            <View style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
              <Feather name="activity" size={24} color="black" />
              <View>
                <Text style={{marginVertical: 10, fontWeight: '500'}}>
                  Activity access
                </Text>
                <Pressable style={{flexDirection: 'row', gap: 20}}>
                  <Pressable
                    onPress={() => setSelected('Public')}
                    style={
                      selected.includes('Public')
                        ? {
                            backgroundColor: '#07bc0c',
                            color: 'white',
                            width: 150,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 5,
                            flexDirection: 'row',
                            padding: 8,
                            gap: 5,
                          }
                        : {
                            backgroundColor: 'white',
                            color: 'black',
                            width: 150,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 5,
                            flexDirection: 'row',
                            borderWidth: 1,
                            padding: 8,
                            gap: 5,
                          }
                    }>
                    <Ionicons
                      name="earth"
                      size={24}
                      color={selected.includes('Public') ? 'white' : 'black'}
                    />
                    <Text
                      style={
                        selected.includes('Public')
                          ? {color: 'white', fontWeight: '500'}
                          : {color: 'black', fontWeight: '500'}
                      }>
                      Public
                    </Text>
                  </Pressable>

                  <Pressable
                    onPress={() => setSelected('Private only')}
                    style={
                      selected.includes('Private only')
                        ? {
                            backgroundColor: '#07bc0c',
                            color: 'white',
                            width: 150,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 5,
                            flexDirection: 'row',
                            padding: 8,
                            gap: 5,
                          }
                        : {
                            backgroundColor: 'white',
                            borderWidth: 1,
                            width: 150,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderWidth: 1,
                            borderRadius: 5,
                            flexDirection: 'row',
                            padding: 8,
                            gap: 5,
                          }
                    }>
                    <AntDesign
                      name="lock1"
                      size={24}
                      color={
                        selected.includes('Private only') ? 'white' : 'black'
                      }
                    />
                    <Text
                      style={
                        selected.includes('Private only')
                          ? {color: 'white', fontWeight: '500'}
                          : {color: 'black', fontWeight: '500'}
                      }>
                      Private Only
                    </Text>
                  </Pressable>
                </Pressable>
              </View>
            </View>

            <Text
              style={{
                borderColor: '#E0E0E0',
                borderWidth: 0.9,
                height: 1,
                marginTop: 7,
              }}
            />

            <Text style={{fontSize: 18, fontWeight: '500', marginTop: 7}}>
              Total Player
            </Text>

            <View
              style={{
                padding: 10,
                backgroundColor: '#F0F0F0',
                marginTop: 10,
                borderRadius: 6,
              }}>
              <View>
                <TextInput
                  onChangeText={setnoOfPlayers}
                  value={setnoOfPlayers}
                  style={{
                    padding: 10,
                    backgroundColor: 'white',
                    borderRadius: 5,
                  }}
                  placeholder="no of player (including you )"
                />
              </View>
            </View>

            <Text
              style={{
                borderColor: '#E0E0E0',
                borderWidth: 0.9,
                height: 1,
                marginTop: 7,
              }}
            />

            <Text style={{fontSize: 17, fontWeight: '500', marginTop: 7}}>
              Add Instructions
            </Text>

            <View
              style={{
                padding: 10,
                backgroundColor: '#F0F0F0',
                marginTop: 10,
                borderRadius: 6,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 10,
                  marginVertical: 10,
                }}>
                <Ionicons name="bag-check" size={24} color="red" />
                <Text style={{flex: 1, fontStyle: 15, fontWeight: '500'}}>
                  Bring your own equipment
                </Text>
                <FontAwesome name="check-square" size={24} color="green" />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 10,
                  marginVertical: 10,
                }}>
                <MaterialCommunityIcons
                  name="directions-fork"
                  size={24}
                  color="#FEBE10"
                />

                <Text style={{flex: 1, fontStyle: 15, fontWeight: '500'}}>
                  Cost Shared
                </Text>
                <FontAwesome name="check-square" size={24} color="green" />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 10,
                  marginVertical: 10,
                }}>
                <FontAwesome5 name="syringe" size={24} color="green" />

                <Text style={{flex: 1, fontStyle: 15, fontWeight: '500'}}>
                  Covid Vaccinated players preferred
                </Text>
                <FontAwesome name="check-square" size={24} color="green" />
              </View>

              <View
                style={{
                  marginVertical: 10,
                  borderRadius: 4,
                }}>
                <TextInput
                  style={{
                    padding: 10,
                    borderWidth: 1,
                    borderRadius: 8,
                    backgroundColor: 'white',
                  }}
                  placeholder="Add Additional instructions...."
                />
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                marginVertical: 10,
              }}>
              <AntDesign name="setting" size={24} color="black" />
              <Text style={{flex: 1, fontSize: 15, fontWeight: '500'}}>
                Advanced setting
              </Text>
              <AntDesign name="arrowright" size={24} color="gray" />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>

      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}
        swipeDirection="down"
        onSwipeComplete={() => setModalVisible(false)}
        style={{justifyContent: 'flex-end', margin: 0}}>
        <View style={{height: 400, backgroundColor: 'white', padding: 20}}>
          <Text style={{textAlign: 'center', fontSize: 16, fontWeight: 'bold'}}>
            Choose date/ time to rehost
          </Text>
          <View
            style={{
              flexDirection: 'row',
              gap: 15,
              flexWrap: 'wrap',
              marginTop: 20,
            }}>
            {dates?.map((item, index) => (
              <Pressable
                onPress={() => selectDate(item)}
                key={index}
                style={{
                  borderWidth: 0.2,
                  padding: 10,
                  width: '30%',
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'gray',
                }}>
                <Text>{item.displayDate}</Text>
                <Text style={{color: 'gray'}}>{item.dayOfWeek}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      </Modal>
    </>
  );
};

export default CreateActivity;

const styles = StyleSheet.create({});
