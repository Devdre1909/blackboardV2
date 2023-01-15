import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import {View} from 'react-native';
import AuthStack from './AuthStack';
import TabStack from './TabStack';

const Routes = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: '',
  });

  return (
    <NavigationContainer>
      {user ? <TabStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
