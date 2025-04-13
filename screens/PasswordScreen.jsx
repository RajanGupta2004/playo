import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {saveRegistrationProgress} from '../registrationUtils';

const PasswordScreen = () => {
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleNext = () => {
    if (password.trim !== '') {
      saveRegistrationProgress('Password', {password});
    }
    navigation.navigate('NameScreen');
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{marginTop: 90, marginHorizontal: 20}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 22,
              borderWidth: 2,
              borderColor: 'green',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AntDesign name="lock1" size={26} color="green" />
          </View>
          <Image
            style={{width: 100, height: 40}}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/10613/10613685.png',
            }}
          />
        </View>

        <View>
          <Text style={{fontSize: 22, fontWeight: '600', marginTop: 10}}>
            Please chooose the password
          </Text>
          <TextInput
            autoFocus={true}
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
            style={{
              borderBottomWidth: 1,
              borderBottomColor: 'black',
              color: 'black',
              marginTop: 15,
            }}
            placeholderTextColor="gray"
            placeholder="Enter your  Password...."
          />
          <Text style={{color: 'gray', fontSize: 15, marginTop: 7}}>
            Note: Your details will be safe with us
          </Text>
        </View>

        <TouchableOpacity
          onPress={handleNext}
          activeOpacity={0.8}
          style={{marginTop: 30, marginLeft: 'auto'}}>
          <MaterialCommunityIcons
            style={{alignSelf: 'center', marginTop: 20}}
            name="arrow-right-circle"
            size={45}
            color="green"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PasswordScreen;

const styles = StyleSheet.create({});
