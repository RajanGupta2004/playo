import { View, Text, ScrollView, Image, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRoute } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Amenities from '../components/Ameneties';

const VenueScreenInfo = () => {
    const route = useRoute()
    console.log("route", route.params)
    return (
        <SafeAreaView>
            <ScrollView style={{ backgroundColor: "#E0E0E0"  }}  >
                <View style={{flex:1}}  >
                    <View>
                        <Image style={{ width: "100%", height: 200, resizeMode: "cover" }} source={{ uri: "https://playo.gumlet.io/PANCHAJANYABADMINTONFITNESSACADEMY/panchajanyabadmintonfitnessacademy1597334767773.jpeg?mode=crop&crop=smart&h=200&width=450&q=40&format=webp" }} />
                    </View>

                    <View style={{ paddingHorizontal: 10 }}>
                        <Text style={{ fontSize: 16, fontWeight: "500", marginTop: 6 }}>{route?.params.name}</Text>
                        <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
                            <Ionicons name="time-outline" size={24} color="gray" />
                            <Text>6:00 am to 11:00 am</Text>
                        </View>

                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10, marginVertical: 5 }}>
                            <Ionicons name="location" size={24} color="gray" />
                            <Text>{route.params.address}</Text>
                        </View>
                    </View>

                    <View style={{ padding: 10 }}>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                            <View style={{ flexDirection: "row", alignItems: "center", gap: 5, justifyContent: "center" }}>
                                {
                                    [0, 0, 0, 0, 0].map((_, i) => (
                                        <Ionicons
                                            key={i}
                                            size={20}
                                            name={i < route.params.rating ? "star" : "star-o"}
                                            style={{
                                                color: "darkYello",
                                            }}
                                        />
                                    ))
                                }

                                <Text>{route.params.rating}(9 ratings)</Text>
                            </View>
                            <Text>100 Total Activity</Text>
                        </View>

                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 7 }}>
                            <Pressable style={{
                                paddingVertical: 10,
                                paddingHorizontal: 5,
                                borderRadius: 6,
                                borderWidth: 1,
                                width: 150,
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <Text style={{

                                }}>Rate Venue</Text>
                            </Pressable>

                            <Pressable style={{
                                paddingVertical: 10,
                                paddingHorizontal: 5,
                                borderRadius: 6,
                                borderWidth: 1,
                                width: 150,
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <Text style={{

                                }}>I Upcomming</Text>
                            </Pressable>
                        </View>

                        <View>
                            <Text style={{ marginVertical: 6, fontWeight: "500" }}>Sports Available</Text>
                            <ScrollView horizontal>
                                {
                                    route.params.sportsAvailable.map((item, i) => (
                                        <View key={i} style={{ borderWidth: 1, width: 150, padding: 15, justifyContent: "center", alignItems: "center", borderRadius: 6, borderColor: "#686868", marginHorizontal: 10 }}>
                                            <MaterialCommunityIcons name={item.icon} size={24} color="gray" />
                                            <Text style={{ fontSize: 16, fontWeight: "500" }}>{item.name}</Text>
                                        </View>

                                    ))
                                }

                            </ScrollView>
                        </View>
                    </View>

                    <Amenities />

                    <View style={{padding:10}}>
                        <View style={{backgroundColor:"green" ,padding:10 , borderRadius:6  , alignItems:"center" , justifyContent:"center"}}>
                            <Text style={{color:"white" , fontWeight:"500"}}>Book Now</Text>

                        </View>
                    </View>


                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default VenueScreenInfo