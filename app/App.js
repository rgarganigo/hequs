// AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import ChevalList from '../components/horses/ChevalList'; 
import AddHorse from '../components/horses/AddHorse'; 

const Stack = createStackNavigator(); 

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ChevalList" component={ChevalList} />
        <Stack.Screen name="AddHorse" component={AddHorse} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
