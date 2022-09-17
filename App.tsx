
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import AppStack from './src/routes/Router';



export default function App() {
  return (
    <NavigationContainer>
      <AppStack/>
    </NavigationContainer>
  )
  
};


