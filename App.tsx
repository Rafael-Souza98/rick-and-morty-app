
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import { ThemeProvider } from './src/theme/Theme';
import TabNavigate from './src/routes/Router';




export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <TabNavigate/>
      </NavigationContainer>
    </ThemeProvider>
  )
  
};


