import React, { useState } from 'react';
import { View } from 'react-native';
import { Ionicons} from '@expo/vector-icons'
import { DataChar, useFetch } from '../../hooks/useFetch';

// import { Container } from './styles';

export const EpIcon = () => {

function epIcon(){
        return <Ionicons name='book' size={30} color='#000'/>
    };

return epIcon();
};
