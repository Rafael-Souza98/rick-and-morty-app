
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Episodes from '../screens/Episodes/Episodes';
import Home from '../screens/Homescreen/Home';

import { CharIcon} from '../components/Icons/IconChar'
import { EpIcon } from '../components/Icons/IconEp';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


export default function TabNavigate(){
    
    return(
        <Tab.Navigator screenOptions={{}}>
            <Tab.Screen name='Characters' component={Home} options={{tabBarIcon: () => { return <CharIcon/> },
        tabBarLabel:'Characters', }}/>
            <Tab.Screen name='Episodes' component={Episodes} options={{tabBarIcon: () => { return <EpIcon/>}, 
        tabBarLabel: 'Episodes'}} />
        </Tab.Navigator>
)
}




