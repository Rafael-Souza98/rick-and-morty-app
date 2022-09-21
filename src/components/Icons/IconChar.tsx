import React, { useState } from 'react';
import { View } from 'react-native';
import { Feather} from '@expo/vector-icons'
import { DataChar, useFetch } from '../../hooks/useFetch';

// import { Container } from './styles';

export const CharIcon = () => {

function charIcon(){
        return <Feather name='user' size={30} color='#000'/>
    };

return charIcon();
};
