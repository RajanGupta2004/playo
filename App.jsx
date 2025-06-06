import React from 'react';

import StackNavigator from './navigation/StackNavigator';
import AuthProvider from './AuthContext';
const App = () => {
  return (
    <AuthProvider>
      <StackNavigator />
    </AuthProvider>
  );
};

export default App;
