import React, { Component } from "react";
import {StatusBar,StyleSheet,View,ScrollView,Image} from 'react-native';
import ModalUltra from '../components/Modal/ModalUltra';
import { Entypo } from '@expo/vector-icons';
import FillIcon from '../components/FillIcon/FillIcon';

const UltraScan = () => {
    return(
        <View style={{alignItems:"center"}}>
            <StatusBar translucent={false} />
            <ModalUltra 
                customIcon={
                    <Entypo name="location-pin" size={40} color="black" />
                }
            />
        </View>
    )
}

export default UltraScan;