import { View, Text, Image, TextInput, Pressable, FlatList } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import VenueCard from '../components/VenueCard';



const BookScreen = () => {
    const data = [

        {
            id: '1',
            image:
                'https://playo.gumlet.io/PANCHAJANYABADMINTONFITNESSACADEMY/panchajanyabadmintonfitnessacademy1597334767773.jpeg?mode=crop&crop=smart&h=200&width=450&q=40&format=webp',
            name: 'Panchajanya Badminton & Fitness Academy',
            address: 'Kittur Rani Chennamma Stadium',
            location:
                'Gate 01, Kittur Rani Chennamma Stadium, Sports Complex, Jayanagar, Jayanagar East, Byrasandra, Jayanagar, Bengaluru, Karnataka - 560011',
            rating: 4.0,
            newImage:
                'https://images.pexels.com/photos/3660204/pexels-photo-3660204.jpeg?auto=compress&cs=tinysrgb&w=800',
            timings: '5 AM - 10 PM',
            sportsAvailable: [
                {
                    id: '10',
                    name: 'Badminton',
                    icon: 'badminton',
                    price: 500,
                    courts: [
                        {
                            id: '10',
                            name: 'Standard synthetic court 1',
                        },
                        {
                            id: '11',
                            name: 'Standard synthetic court 2',
                        },
                        {
                            id: '12',
                            name: 'Standard synthetic court 3',
                        },
                    ],
                },
                {
                    id: '11',
                    name: 'Cricket',
                    icon: 'cricket',
                    price: 1100,
                    courts: [
                        {
                            id: '10',
                            name: 'Full Pitch 1',
                        },
                        {
                            id: '11',
                            name: 'Full Pitch 2',
                        },
                    ],
                },
                {
                    id: '12',
                    name: 'Tennis',
                    icon: 'tennis',
                    price: 900,
                    courts: [
                        {
                            id: '10',
                            name: 'Court 1',
                        },
                        {
                            id: '11',
                            name: 'Court 2',
                        },
                    ],
                },
            ],
        },
        {
            id: '2',
            name: 'Sportexx',
            image:
                'https://playo.gumlet.io/SPORTEXX20220319100016960702/sportexx1647683524186.jpg?mode=crop&crop=smart&h=200&width=450&q=40&format=webp',
            address: 'Hebbal Kempapura',
            location: '#43/2, 3rd Cross, Sonnappa Layout, Bhuvaneshwari Nagar',
            rating: 4.1,
            newImage:
                'https://images.pexels.com/photos/3660204/pexels-photo-3660204.jpeg?auto=compress&cs=tinysrgb&w=800',
            timings: '5.30 AM - 9:00 PM',
            sportsAvailable: [
                {
                    id: '10',
                    name: 'Badminton',
                    icon: 'badminton',
                    price: 500,
                    courts: [
                        {
                            id: '10',
                            name: 'Standard synthetic court 1',
                        },
                        {
                            id: '11',
                            name: 'Standard synthetic court 2',
                        },
                        {
                            id: '12',
                            name: 'Standard synthetic court 3',
                        },
                    ],
                },
                {
                    id: '11',
                    name: 'Cricket',
                    icon: 'cricket',
                    price: 1100,
                    courts: [
                        {
                            id: '10',
                            name: 'Full Pitch 1',
                        },
                        {
                            id: '11',
                            name: 'Full Pitch 2',
                        },
                    ],
                },
            ],
        },
    ];
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#f5f5f5", padding: 12 }}>
            {/* Header */}
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                {/* Left Section */}
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ fontWeight: "500", color: "black", fontSize: 16, marginRight: 5 }}>Rajan Gupta</Text>
                    <MaterialIcons color="black" size={24} name="keyboard-arrow-down" />
                </View>

                {/* Right Section */}
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Ionicons name="chatbox-outline" size={24} color="black" style={{ marginRight: 16 }} />
                    <Ionicons name="notifications-outline" size={24} color="black" style={{ marginRight: 16 }} />
                    <Image
                        style={{ width: 30, height: 30, borderRadius: 15 }}
                        source={{ uri: "https://lh3.google.com/u/0/ogw/AF2bZyjeymsrzQ9aFm58n5K4591mcBLmypdHC9E11CdC7CdXdg=s64-c-mo" }}
                    />
                </View>
            </View>

            {/* Search Box */}
            <View style={{
                // margin: 12,
                paddingHorizontal: 8,
                paddingVertical: 4,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: 'space-between',
                backgroundColor: "#E8E8E8",
                borderRadius: 30,
                marginTop: 9
            }}>
                <TextInput
                    placeholder='Search for venue'
                    placeholderTextColor="gray"
                />
                <Ionicons name="search" size={24} color="gray" />
            </View>

            <View style={{ flexDirection: "row", alignItems: "center", gap: 10, marginVertical: 10 }}>
                {["Sports & Availabilty", "Favorites", "Offers"].map((item) => (
                    <Pressable key={item} >
                        <Text style={{
                            // fontSize: 17,
                            borderWidth: 0.6,
                            paddingHorizontal: 8,
                            paddingVertical: 7,
                            borderRadius: 7,
                            color: "gray"
                        }}>
                            {item}
                        </Text>
                    </Pressable>
                ))}
            </View>

            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <VenueCard item={item}

                />}
                contentContainerStyle={{ paddingBottom: 20 }}
                showsVerticalScrollIndicator={false}
            />


        </SafeAreaView>
    );
}

export default BookScreen;
