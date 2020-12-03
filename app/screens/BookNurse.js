import React, { useState,useEffect } from "react";
import {StatusBar,StyleSheet,View,ScrollView,Image} from 'react-native';
import Modal from '../components/Modal/Modal';
import { Entypo } from '@expo/vector-icons';
import DatePicker from '../components/DatePicker/DatePicker';


const BookNurse = () => {
    // useEffect(() => {
    //     renderCalendar();
    //   })
    // const renderCalendar = () => {
    //     return (
    //         <DatePicker />
    //     )
    // } 
    return(
        <>
            <StatusBar translucent={false} barStyle="light-content"/>
            <Modal customIcon={
                <Entypo name="location-pin" size={30} color="black" /> 
            } 
            />

        </>
    )
}

export default BookNurse;