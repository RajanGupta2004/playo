import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { Marker } from "react-native-maps";

const StartScreen = () => {
  // Dummy user locations
  const users = [
    {
      id: 1,
      latitude: 37.78845,
      longitude: -122.4324,
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      message: "Hey!",
    },
    {
      id: 2,
      latitude: 37.78915,
      longitude: -122.4334,
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      message: "Let's play",
    },
    {
      id: 3,
      latitude: 37.78895,
      longitude: -122.4314,
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      message: "What up?",
    },
    {
      id: 4,
      latitude: 37.78785,
      longitude: -122.4344,
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      message: "At 8pm?",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Map with User Markers */}
      {/* <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.02,
          longitudeDelta: 0.01,
        }}
      >
        {users.map((user) => (
          <Marker key={user.id} coordinate={{ latitude: user.latitude, longitude: user.longitude }}>
            <View style={styles.profileContainer}>
              <Image source={{ uri: user.image }} style={styles.profileImage} />
              <Text style={styles.userMessage}>{user.message}</Text>
            </View>
          </Marker>
        ))}
      </MapView> */}

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <Text style={styles.heading}>Find Player in your neighbourhood</Text>
        <Text style={styles.subheading}>Just like you did as a kid!</Text>
        <Text style={styles.loginText}>Already have an account? <Text style={styles.loginLink}>Login</Text></Text>
        
        <Text style={styles.logo}>PLAYO</Text>

        {/* Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>READY, SET, GO</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  map: {
    width: "100%",
    height: "55%",
  },
  profileContainer: {
    alignItems: "center",
    backgroundColor: "white",
    padding: 5,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "white",
  },
  userMessage: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#333",
    marginTop: 5,
  },
  bottomSection: {
    alignItems: "center",
    paddingVertical: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    width: "70%",
  },
  subheading: {
    fontSize: 14,
    color: "gray",
    marginVertical: 5,
  },
  loginText: {
    fontSize: 14,
    color: "gray",
  },
  loginLink: {
    color: "#007bff",
    fontWeight: "bold",
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#00b894",
    marginVertical: 15,
  },
  button: {
    backgroundColor: "#00b894",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
