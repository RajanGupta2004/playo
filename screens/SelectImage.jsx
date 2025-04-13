import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const SelectImage = () => {
  const [image, setImage] = useState('');
  const navigation = useNavigation();

  const images = [
    {
      id: '1',
      image: 'https://cdn-icons-png.flaticon.com/128/16683/16683469.png',
    },
    {
      id: '2',
      image: 'https://cdn-icons-png.flaticon.com/128/16683/16683439.png',
    },
    {id: '3', image: 'https://cdn-icons-png.flaticon.com/128/4202/4202835.png'},
    {id: '4', image: 'https://cdn-icons-png.flaticon.com/128/3079/3079652.png'},
  ];

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            contentContainerStyle={{flexGrow: 1}}
            keyboardShouldPersistTaps="handled">
            <View style={{marginHorizontal: 10, marginVertical: 5}}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </View>

            <View style={{padding: 10}}>
              <Text style={{fontSize: 18, fontWeight: '600'}}>
                Complete Your Profile
              </Text>
              <Text style={{marginVertical: 10, color: 'gray'}}>
                What would you like your mates to call you? ❤️
              </Text>
            </View>

            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                padding: 3,
              }}>
              <Image
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 100,
                  borderColor: 'green',
                  borderWidth: 2,
                }}
                source={{uri: image || images[0].image}}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginVertical: 10,
              }}>
              {images.map(item => (
                <Pressable
                  key={item.id}
                  onPress={() => setImage(item.image)}
                  style={{margin: 10}}>
                  <Image
                    style={{
                      width: 70,
                      height: 70,
                      borderRadius: 100,
                      borderColor:
                        image === item.image ? 'green' : 'transparent',
                      borderWidth: 2,
                    }}
                    source={{uri: item.image}}
                  />
                </Pressable>
              ))}
            </View>

            <Text
              style={{
                textAlign: 'center',
                fontSize: 18,
                marginVertical: 10,
                color: 'gray',
              }}>
              OR
            </Text>

            <View style={{marginHorizontal: 10}}>
              <Text style={{fontSize: 18, color: 'gray'}}>
                Enter image link...
              </Text>
              <TextInput
                style={{
                  borderWidth: 1,
                  borderColor: 'gray',
                  borderRadius: 4,
                  padding: 10,
                }}
                placeholder="Enter Image URL..."
                onChangeText={setImage}
                value={image}
              />
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>

        <Pressable
          onPress={() => navigation.navigate('PreFinal')}
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
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SelectImage;
