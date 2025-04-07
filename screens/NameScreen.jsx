import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react'

const NameScreen = () => {
  return (
    <ScrollView style={{ flex: 1 }}>

      <View >
        <Ionicons name="arrow-back" size={24} color="black" style={{marginHorizontal: 10}} />
        <View style={{ marginHorizontal: 10, marginVertical: 15 }}>
          <Text style={{ fontSize: 18, fontWeight: 600 }}>Complete Your Profile</Text>
          <Text style={{ marginTop: 10, color: 'gray' }}>
            What would you like your mates to call you? ❤️
          </Text>
        </View>
      </View>

    </ScrollView>
  )
}

export default NameScreen

const styles = StyleSheet.create({})