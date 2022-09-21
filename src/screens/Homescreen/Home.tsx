import { AppBar } from '@react-native-material/core';
import React, { useContext } from 'react';
import { FlatList, ListRenderItem, ListRenderItemInfo, ScrollView, Switch, View } from 'react-native';
import TopBar from '../../components/AppBar/TopBar';
import Cardchar, { IPropsChar } from '../../components/Cardchar/Cardchar';
import { useFetch } from '../../hooks/useFetch';
import { ThemeContext, ThemeType } from '../../theme/Theme';
import {  ContentCard, ContentScreen, ImageChar,  TextCard } from './styleHome';


const Home: React.FC = () => {
  
const {character} = useFetch();
const { toggleTheme, theme} = useContext(ThemeContext);
const isLightTheme = theme == ThemeType.dark;


    function renderItem({item}: ListRenderItemInfo<IPropsChar>){
        return <Cardchar {...item}/>
    };

    return (
        <View>
            <Switch value={isLightTheme} 
            onValueChange={toggleTheme}
            thumbColor='#FFF'
            />
             <FlatList
                keyExtractor={(item) => item.name}
                data={character}
                renderItem={renderItem}/>         
        </View>
    )
}

export default Home;