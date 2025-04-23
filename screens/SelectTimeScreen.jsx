import {View, Text, Pressable, Button} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const SelectTimeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'select suitable date',
    });
  }, []);
  const times = [
    {
      id: '0',
      type: 'morning',
      timings: '12 am - 9 am',
      icon: <Ionicons name="md-partly-sunny-outline" size={24} color="black" />,
    },
    {
      id: '1',
      type: 'Day',
      timings: '9 am - 4 pm',
      icon: <Feather name="sun" size={24} color="black" />,
    },
    {
      id: '2',
      type: 'evening',
      timings: '4pm - 9 pm',
      icon: <Feather name="sunset" size={24} color="black" />,
    },
    {
      id: '3',
      type: 'night',
      timings: '9pm am - 11 pm',
      icon: <Ionicons name="cloudy-night-outline" size={24} color="black" />,
    },
  ];
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [isStartTimePickerVisible, setStartTimePickerVisibility] =
    useState(false);
  const [isEndTimePickerVisible, setEndTimePickerVisibility] = useState(false);

  const showStartTimePicker = () => setStartTimePickerVisibility(true);
  const hideStartTimePicker = () => setStartTimePickerVisibility(false);
  const showEndTimePicker = () => setEndTimePickerVisibility(true);
  const hideEndTimePicker = () => setEndTimePickerVisibility(false);

  const handleConfirmStartTime = time => {
    setStartTime(time);
    hideStartTimePicker();
  };

  const handleConfirmEndTime = time => {
    setEndTime(time);
    hideEndTimePicker();
    if (startTime) {
      const formattedStartTime = formatTime(startTime);
      const formattedEndTime = formatTime(time);
      const timeInterval = `${formattedStartTime} - ${formattedEndTime}`;
      console.log('timeInterval', timeInterval);
      navigation.navigate('Create', {timeInterval});
    }
  };

  const formatTime = time => {
    if (!time) return 'Select Time';
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  };

  return (
    <>
      <SafeAreaView>
        <Pressable
          style={{
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
            flexWrap: 'wrap',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
          {times.map(item => (
            <Pressable
              key={item.id}
              style={{
                padding: 10,
                borderRadius: 5,
                width: 150,
                height: 120,
                alignItems: 'center',
                justifyContent: 'center',
                margin: 10,
                backgroundColor: 'white',
                shadowColor: '#171717',
                shadowOffset: {width: -2, height: 2},
                elevation: 3,
              }}>
              {item.icon}
              <Text>{item.type}</Text>
              <Text>{item.timings}</Text>
            </Pressable>
          ))}
        </Pressable>

        <View style={{marginTop: 30, paddingHorizontal: 20}}>
          {/* Start Time */}
          <View style={{marginBottom: 20}}>
            <Text style={{fontSize: 16, fontWeight: '600', marginBottom: 8}}>
              Start Time
            </Text>
            <Button
              title={formatTime(startTime)}
              onPress={showStartTimePicker}
            />
            {startTime && (
              <Text style={{marginTop: 8, fontSize: 14, color: '#333'}}>
                Selected: {startTime.toLocaleTimeString()}
              </Text>
            )}
            <DateTimePickerModal
              isVisible={isStartTimePickerVisible}
              mode="time"
              onConfirm={handleConfirmStartTime}
              onCancel={hideStartTimePicker}
              is24Hour={false}
            />
          </View>

          {/* End Time */}
          <View>
            <Text style={{fontSize: 16, fontWeight: '600', marginBottom: 8}}>
              End Time
            </Text>
            <Button title="Select End Time" onPress={showEndTimePicker} />
            {endTime && (
              <Text style={{marginTop: 8, fontSize: 14, color: '#333'}}>
                Selected: {endTime.toLocaleTimeString()}
              </Text>
            )}
            <DateTimePickerModal
              isVisible={isEndTimePickerVisible}
              mode="time"
              onConfirm={handleConfirmEndTime}
              onCancel={hideEndTimePicker}
              is24Hour={false}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default SelectTimeScreen;
