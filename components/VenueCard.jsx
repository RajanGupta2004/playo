import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import AntDesign from "react-native-vector-icons/AntDesign"
import { useNavigation } from '@react-navigation/native'

const VenueCard = ({ item }) => {

    const navigation = useNavigation()
    return (
        <View style={{ marginTop: 10 , backgroundColor:"white" , borderRadius:8 , shadowColor:"gray" }}>
            <Pressable
            onPress={()=>navigation.navigate("Venue" , {
                name:item.name,
                image:item.newImage,
                sportsAvailable:item.sportsAvailable,
                rating:item.rating,
                address:item.address,
                location:item.location,
                bookings:item.bookings
            })}
            >
                <View >
                    <Image style={{ width: "100%", height: 200, borderTopLeftRadius: 10, borderTopRightRadius: 9 }} source={{ uri: item.image }} />
                </View>

                <View style={{ padding: 10}}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", }}>
                        <View>
                            <Text>{item?.name.length > 40 ? item?.name.subString(0, 40) + "..." : item?.name}</Text>
                        </View>

                        <View style={{ flexDirection: "row", alignItems: "center", paddingVertical: 4, paddingHorizontal: 6, backgroundColor: "green", borderRadius: 6, gap: 7 }}>
                            <AntDesign name="star" size={20} color="white" />
                            <Text style={{ fontSize: 18, color: "white" }}>4</Text>

                        </View>
                    </View>
                    <Text style={{color:"gray"}}>{item.address}</Text>

                    <View style={{height:0.4 , marginVertical:8 , borderColor:"gray" , borderWidth:0.3}}/>

                    <View style={{flexDirection:"row" , alignItems:"center" , justifyContent:"space-between"}}>
                        <Text>Up to 10% Off</Text>
                        <Text>INR 250 Onwards</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}

export default VenueCard