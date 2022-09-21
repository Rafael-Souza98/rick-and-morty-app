import React from 'react';
import { ScrollView, View, Image, ImageProps, Switch } from 'react-native';
import { ContentCard, ContentScreen, ImageChar, TextCard } from '../../screens/Homescreen/styleHome';
import { AppBar} from '@react-native-material/core'

// import { Container } from './styles';
export interface IPropsChar{
    name: string;
    image: ImageProps["source"];
    status: string;
    species: string;
}

const Cardchar = ({image, name, status, species}: IPropsChar)  => {


  return (
    <View> 
          <ContentScreen>
            <ContentCard>
             <ImageChar source={{uri: image}}/>
             <View>
              <TextCard>{name}</TextCard>
              <TextCard>{status} - {species}</TextCard>
             </View>
            </ContentCard>
        </ContentScreen>
    </View>
  )
}

export default Cardchar;