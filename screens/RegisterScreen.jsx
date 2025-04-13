import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  getRegistrationProgress,
  saveRegistrationProgress,
} from '../registrationUtils';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');

  const navigation = useNavigation();

  const Next = () => {
    if (email !== '') {
      saveRegistrationProgress('Register', {email});
    }
    navigation.navigate('Password');
  };

  useEffect(() => {
    getRegistrationProgress('Register').then(progressData => {
      console.log('progressData', progressData);
      if (progressData) {
        setEmail(progressData.email);
      }
    });
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>You're almost there</Text>

      <View>
        <Text style={styles.label}>Enter Email</Text>
        <TextInput
          value={email}
          style={styles.input}
          onChangeText={setEmail}
          placeholder="Enter your email..."
        />

        <Pressable style={styles.button} onPress={Next}>
          <Text style={styles.buttonText}>Next</Text>
        </Pressable>

        <View style={styles.centeredText}>
          <Text style={styles.agreementText}>
            I agree to receive updates over WhatsApp
          </Text>

          <Text style={styles.termsText}>
            By signing up, you agree to the Terms of Service and Privacy Policy
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    padding: 13,
    marginVertical: 19,
  },
  heading: {
    fontSize: 18,
    fontWeight: '400',
  },
  label: {
    fontSize: 18,
    marginVertical: 10,
    color: 'gray',
  },
  input: {
    padding: 15,
    borderColor: '#D0D0D0',
    borderWidth: 1,
    borderRadius: 10,
  },
  button: {
    padding: 15,
    backgroundColor: '#E0E0E0',
    borderRadius: 8,
    marginVertical: 15,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
  },
  centeredText: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  agreementText: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 15,
  },
  termsText: {
    fontSize: 15,
    color: 'gray',
    textAlign: 'center',
    marginTop: 20,
  },
});
