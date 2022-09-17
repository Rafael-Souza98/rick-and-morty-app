import React from 'react';
import { View, Text, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useFetch } from '../../hooks/useFetch';



export default function Episodes() {

  const {  episodes  } = useFetch();

    return (
      <View>
          {episodes?.map(ep => {
            return(
              <View key={ep.id}>
                <Text>{ep.name} - {ep.episode}</Text>
                <Text>{ep.air_date}</Text>
               </View>   
            )
          })}
      </View>
    );
  }


