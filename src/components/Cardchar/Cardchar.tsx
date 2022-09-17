import React from 'react';
import { ScrollView, View, Image, ImageProps } from 'react-native';
import { ContentCard, ContentScreen, ImageChar, TextCard } from '../../screens/Homescreen/styleHome';

// import { Container } from './styles';
export interface IPropsChar{
    name: string;
    image: ImageProps["source"];
    status: string;
    species: string;
}

const Cardchar = ({image, name, status, species}: IPropsChar)  => {


  return (
        <ContentScreen>
            <ContentCard>
             <ImageChar source={{uri: image}}/>
             <View>
              <TextCard>{name}</TextCard>
              <TextCard>{status} - {species}</TextCard>
             </View>
            </ContentCard>
        </ContentScreen>
  )
}

export default Cardchar;