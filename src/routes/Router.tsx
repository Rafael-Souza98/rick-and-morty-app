
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from 'react';
import Episodes from '../screens/Episodes/Episodes';
import Home from '../screens/Homescreen/Home';


const Drawer = createDrawerNavigator();


function AppRoute(){
      return (
          <Drawer.Navigator>
                <Drawer.Screen name='Characters' component={Home} />
                <Drawer.Screen name='Episodes' component={Episodes} />
          </Drawer.Navigator>
      )
};

const Stack = createNativeStackNavigator();

export default function AppStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen name='Drawer' component={AppRoute}/>           
        </Stack.Navigator>
    )
  }




