import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const PreFinalScreen = () => {
  return (
    <SafeAreaView style={{flex:1 , backgroundColor:"white"}}>
     <View style={{marginTop:20}}>
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
        style={{backgroundColor: '#03C03C', padding: 15, marginTop: 'auto' , marginBottom:20}}>
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
  )
}

export default PreFinalScreen