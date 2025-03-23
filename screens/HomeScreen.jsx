import { View, Text, Pressable, Image, ScrollView, ImageBackground } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from "react-native-vector-icons/AntDesign"

const data = [
    {
        id: '10',
        image:
            'https://playov2.gumlet.io/v3_homescreen/marketing_journey/Tennis%20Spotlight.png',
        text: 'Learn Tennis',
        description: 'Know more',
    },
    {
        id: '11',
        image:
            'https://playov2.gumlet.io/v3_homescreen/marketing_journey/playo_spotlight_08.png',
        text: 'Up Your Game',
        description: 'Find a coach',
    },
    {
        id: '12',
        image:
            'https://playov2.gumlet.io/v3_homescreen/marketing_journey/playo_spotlight_03.png',
        text: 'Hacks to win',
        description: 'Yes, Please!',
    },
    {
        id: '13',
        image:
            'https://playov2.gumlet.io/v3_homescreen/marketing_journey/playo_spotlight_02.png',
        text: 'Spotify Playolist',
        description: 'Show more',
    },
];


const HomeScreen = () => {

    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: "",
            headerLeft: () => (
                <View>
                    <Text style={{ marginLeft: 15, color: "black" }}>Rajan Gupta</Text>
                </View>
            ),
            headerRight: () => (
                <View style={{ flexDirection: "row", alignItems: "center", gap: 16, backgroundColor: "white" }}>
                    <Ionicons name="chatbox-outline" size={24} color="black" />
                    <Ionicons name="notifications-outline" size={24} color="black" />
                    <Pressable>
                        <Image style={{ width: 30, height: 30, borderRadius: 16, marginRight: 15 }} source={{ uri: "https://lh3.google.com/u/0/ogw/AF2bZyjeymsrzQ9aFm58n5K4591mcBLmypdHC9E11CdC7CdXdg=s64-c-mo" }} />
                    </Pressable>

                </View>
            )
        })

    }, [])
    return (
        <ScrollView style={{ flex: 1, backgroundColor: "#f8f8f8" }}>
            <View style={{ backgroundColor: "white", padding: 10, margin: 10, borderRadius: 10, flexDirection: 'row', gap: 16 }}>
                <View>
                    <Image style={{ width: 40, height: 40, borderRadius: 16 }} source={{
                        uri: "https://cdn-icons-png.flaticon.com/128/785/785116.png"
                    }} />

                </View>

                <View>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
                        <Text style={{ fontSize: 14, color: "gray" }}>Set your weekely goal..</Text>
                        <Image style={{ width: 20, height: 20, borderRadius: 16 }} source={{ uri: "https://cdn-icons-png.flaticon.com/128/785/785116.png" }} />
                    </View>
                    <Text style={{ fontSize: 15, color: "gray" }}>KEEP YOURSELF FIT...</Text>
                </View>
            </View>


            <View style={{ backgroundColor: "white", marginVertical: 6, marginHorizontal: 10, paddingVertical: 7, paddingHorizontal: 8, borderRadius: 10 }}>
                <View style={{ backgroundColor: "#E0E0E0", width: 150, borderRadius: 5, padding: 5 }}>
                    <Text style={{ color: "#484848", fontSize: 13 }}>GEAR UP YOUR GAME</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 4, marginHorizontal: 5 }}>
                    <Text style={{ fontSize: 17 }}>Badminton Activity</Text>
                    <Pressable style={{
                        padding: 8,
                        backgroundColor: 'white',
                        borderRadius: 7,
                        elevation: 5, // Shadow for Android
                        width: 80,
                    }}>
                        <Text style={{ textAlign: 'center' }}>VIEW</Text>
                    </Pressable>
                </View>

                <Text style={{ fontSize: 16, color: "gray" }}>You have no game Today...</Text>

                <Pressable style={{ marginLeft: "auto", marginRight: "auto", marginTop: 10, marginBottom: 5 }}>
                    <Text style={{ fontSize: 16, fontWeight: 600, textDecorationLine: "underline" }}>View My Clander</Text>
                </Pressable>
            </View>


            <View style={{ padding: 10, flexDirection: "row", gap: 5, justifyContent: "space-between" }}>
                <Pressable>
                    <View>
                        <Image style={{
                            width: 160,
                            height: 100,
                            alignItems: "center",
                            borderRadius: 10,
                        }} source={{ uri: 'https://images.pexels.com/photos/262524/pexels-photo-262524.jpeg?auto=compress&cs=tinysrgb&w=800' }} />
                    </View>

                    <Pressable style={{ width: 160, backgroundColor: "white", borderRadius: 8 }}>
                        <View style={{ padding: 10 }}>
                            <Text style={{ fontSize: 15, fontWeight: '500' }}>Play</Text>
                            <Text style={{ fontSize: 15, color: 'gray', marginTop: 7 }}>
                                Find Players and join their activities
                            </Text>
                        </View>
                    </Pressable>
                </Pressable>

                <Pressable>
                    <View>
                        <Image style={{
                            width: 160,
                            height: 100,
                            borderRadius: 10,
                        }} source={{ uri: 'https://images.pexels.com/photos/3660204/pexels-photo-3660204.jpeg?auto=compress&cs=tinysrgb&w=800' }} />
                    </View>

                    <Pressable style={{ width: 160, backgroundColor: "white", borderRadius: 8 }}>
                        <View style={{ padding: 10 }}>
                            <Text style={{ fontSize: 15, fontWeight: '500' }}>Book</Text>
                            <Text style={{ fontSize: 15, color: 'gray', marginTop: 4 }}>
                                Book your slots in venues nearby
                            </Text>
                        </View>
                    </Pressable>
                </Pressable>
            </View>


            <View style={{ padding: 13, gap: 10 }}>
                <View style={{ flexDirection: "row", gap: 10, backgroundColor: "white", padding: 8, borderRadius: 8 }}>
                    <View style={{ backgroundColor: "green", padding: 10, borderRadius: 100 }}>
                        <AntDesign size={24} name="addusergroup" color="white" />
                    </View>
                    <View>
                        <Text style={{ fontWeight: "800", fontSize: 16 }}>Groups</Text>
                        <Text style={{ color: "gray" }}> Connect,Compete and Discuss</Text>
                    </View>
                </View>

                <View style={{ flexDirection: "row", gap: 10, backgroundColor: "white", padding: 8, borderRadius: 8 }}>
                    <View style={{ backgroundColor: "yellow", padding: 10, borderRadius: 100 }}>
                        <Ionicons name="tennisball-outline" size={24} color="black" />
                    </View>
                    <View>
                        <Text style={{ fontWeight: "800", fontSize: 16 }}>Game Time Activites</Text>
                        <Text style={{ color: "gray" }}>355 Playo hosted games</Text>
                    </View>
                </View>

            </View>

            <View style={{ padding: 13 }}>
                <View style={{ backgroundColor: "white", padding: 10, borderRadius: 8 }}>
                    <Text style={{ color: "gray", fontWeight: "800" }}>Spotlight</Text>
                    <ScrollView horizontal>
                        {
                            data.map((item) =>
                                <ImageBackground
                                    imageStyle={{ borderRadius: 10 }}
                                    style={{
                                        width: 220,
                                        height: 280,
                                        resizeMode: 'contain',
                                        marginRight: 10,
                                        borderRadius: 10,
                                        marginVertical: 15,
                                    }} key={item.id} source={{ uri: item.image }}>

                                </ImageBackground>
                            )
                        }

                    </ScrollView>

                </View>
            </View>

            <View style={{marginBottom:10}}>
                <View style={{ marginLeft: "auto", marginRight: "auto" }}>
                    <Image style={{ width: 120, height: 70, resizeMode: "contain" }} source={{ uri: "https://playo-website.gumlet.io/playo-website-v2/logos-icons/new-logo-playo.png?q=50" }} />
                </View>

                <Text style={{ color: 'gray', textAlign: 'center' }}>
                    Your Sports community app
                </Text>

            </View>
        </ScrollView>
    )
}

export default HomeScreen