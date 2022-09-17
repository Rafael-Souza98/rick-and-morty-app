import React from 'react';
import { FlatList, ListRenderItem, ListRenderItemInfo, ScrollView, View } from 'react-native';
import Cardchar, { IPropsChar } from '../../components/Cardchar/Cardchar';
import { useFetch } from '../../hooks/useFetch';
import {  ContentCard, ContentScreen, ImageChar,  TextCard } from './styleHome';


const Home: React.FC = () => {
  
const {character} = useFetch();

    function renderItem({item}: ListRenderItemInfo<IPropsChar>){
        return <Cardchar {...item}/>
    };

    return (
        <View>
                <FlatList
                keyExtractor={(item) => item.name}
                data={character}
                renderItem={renderItem}/>         
        </View>
    )
}

export default Home;