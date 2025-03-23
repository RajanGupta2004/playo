import { View, Text, Pressable, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const PlayScreens = () => {

    const [options, setOptions] = useState("My Sport");
    const [sports, setSports] = useState("Badminton")
    return (
        <SafeAreaView>
            <View style={{ padding: 10, backgroundColor: "#223536", color: "white" }}>

                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                        <Text style={{ fontWeight: "500", color: "white", fontSize: 16 }}>Rajan Gupta</Text>
                        <MaterialIcons color="white" size={24} name="keyboard-arrow-down" />
                    </View>

                    <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
                        <Ionicons name="chatbox-outline" size={24} color="white" />
                        <Ionicons name="notifications-outline" size={24} color="white" />
                        <Pressable>
                            <Image
                                style={{ width: 30, height: 30, borderRadius: 16, marginRight: 10 }}
                                source={{ uri: "https://lh3.google.com/u/0/ogw/AF2bZyjeymsrzQ9aFm58n5K4591mcBLmypdHC9E11CdC7CdXdg=s64-c-mo" }}
                            />
                        </Pressable>
                    </View>
                </View>

                {/* Options Section */}
                <View style={{ flexDirection: "row", alignItems: "center", gap: 14, marginVertical: 8 }}>
                    {["Clander", "My Sport", "Other Sport"].map((item) => (
                        <Pressable key={item} onPress={() => setOptions(item)}>
                            <Text style={{
                                fontSize: 17,
                                fontWeight: "500",
                                color: options === item ? "#12e04c" : "white"
                            }}>
                                {item}
                            </Text>
                        </Pressable>
                    ))}
                </View>

                {/* Sports Selection */}
                <View style={{ marginVertical: 7 }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {["Badminton", "Running", "Climbing", "Jumping"].map((sport) => (
                            <Pressable
                                key={sport}
                                onPress={() => setSports(sport)}
                                style={{
                                    paddingVertical: 8,
                                    paddingHorizontal: 12,
                                    borderWidth: sports === sport ? 0 : 1,
                                    borderColor: "white",
                                    backgroundColor: sports === sport ? "#12e04c" : "transparent",
                                    borderRadius: 8,
                                    marginRight: 10
                                }}
                            >
                                <Text style={{
                                    color: sports === sport ? "black" : "white",
                                    fontWeight: "500"
                                }}>{sport}</Text>
                            </Pressable>
                        ))}
                    </ScrollView>
                </View>

            </View>

            <View style={{padding:10 , backgroundColor:"white" , flexDirection:"row" , alignItems:"center" , justifyContent:"space-between"}}>
                <Pressable>
                    <Text style={{fontWeight:700 , fontSize:16}}>Create Game</Text>
                </Pressable>

                <View style={{flexDirection:"row" , gap:10 , alignItems:"center"}}>
                    <Pressable>
                        <Text style={{fontWeight:500 , fontSize:16}}>Filter</Text>
                    </Pressable>
                    <Pressable>
                        <Text style={{fontWeight:500 , fontSize:16}}>Sort</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default PlayScreens;
