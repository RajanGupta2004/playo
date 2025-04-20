import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Pressable,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import {SafeAreaView} from 'react-native-safe-area-context';

const TagVenuScreen = () => {
  const [venues, setVenues] = useState([]);
  const navigation = useNavigation();
  const [tagVenue, setTagVenue] = useState('');

  useEffect(() => {
    const fetchVenues = async () => {
      try {
        const response = await axios.get(
          'http://192.168.98.29:8000/api/v1/venues',
        );
        setVenues(response?.data?.data || []);
      } catch (error) {
        console.error('Failed to fetch venues:', error);
      }
    };

    fetchVenues();
  }, []);

  useEffect(() => {
    if (tagVenue) {
      navigation.goBack({tagVenue});
    }
  }, [tagVenue, navigation]);

  console.log('venues', venues);
  return (
    <SafeAreaView>
      <View style={{}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#294461',
            gap: 10,
            padding: 10,
          }}>
          <Ionicons name="arrow-back" size={24} color="white" />

          <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>
            Tag Venue
          </Text>
        </View>

        <FlatList
          data={venues}
          keyExtractor={item => item._id}
          renderItem={({item}) => {
            return (
              <Pressable
                onPress={() => setTagVenue(item)}
                style={{
                  padding: 10,
                  marginVertical: 10,
                  borderColor: '#e0e0e0',
                  borderWidth: 1,
                  marginHorizontal: 10,
                }}>
                <View
                  style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
                  <Image
                    style={{
                      width: 90,
                      height: 90,
                      resizeMode: 'cover',
                      borderRadius: 4,
                    }}
                    source={{uri: item?.image}}
                  />

                  <View style={{flex: 1}}>
                    <Text
                      numberOfLines={1}
                      ellipsizeMode="tail"
                      style={{
                        fontSize: 15,
                        fontWeight: '500',
                      }}>
                      {item?.name}
                    </Text>
                    <Text numberOfLines={2} ellipsizeMode="tail">
                      {item?.address}
                    </Text>
                    <Text style={{marginTop: 8, fontWeight: '500'}}>
                      4.4 (122 ratings)
                    </Text>
                  </View>

                  <Ionicons
                    name="shield-checkmark-sharp"
                    size={24}
                    color="green"
                    style={{marginLeft: 5}}
                  />
                </View>
                <View>
                  <Text style={{textAlign: 'center', color: 'gray'}}>
                    BOOKABLE
                  </Text>
                </View>
              </Pressable>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default TagVenuScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  venueCard: {
    backgroundColor: '#f2f2f2',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  venueName: {
    fontSize: 18,
    fontWeight: '600',
  },
  venueLocation: {
    fontSize: 14,
    color: '#666',
  },
});
