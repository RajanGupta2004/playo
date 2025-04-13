import AsyncStorage from '@react-native-async-storage/async-storage';
import {createContext, useEffect, useState} from 'react';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [token, setToken] = useState('');
  const [userId, setUserId] = useState('');
  const [upcommingGames, setupcommingGames] = useState('');

  const isLoggedIn = async () => {
    try {
      const userToken = await AsyncStorage.getItem('token');
      setToken(userToken);
    } catch (error) {
      console.log('Error inLoggedIn', error);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      const token = await AsyncStorage.getItem('token');
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.userId;
      setUserId(userId);
    };

    fetchUser();
  }, []);

  useEffect(() => {
    isLoggedIn();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        userId,
        setUserId,
        upcommingGames,
        setupcommingGames,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
