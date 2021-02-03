import React, { Component } from "react";
import PropTypes from 'prop-types';
import {StatusBar,StyleSheet,View,ScrollView,Image,Text,TouchableOpacity,TouchableHighlight} from 'react-native';
import  Container  from '../components/Container/Container';
import Header from '../components/Header/Header';
import Heading from '../components/Heading/Heading';
import Bigdiv from '../components/Bigdiv/Bigdiv';
import Card from '../components/ListCard/Card';
import { Octicons,MaterialCommunityIcons,Fontisto,FontAwesome,AntDesign,Entypo,MaterialIcons} from '@expo/vector-icons';
// import { Octicons } from '@expo/vector-icons';
import CardContainer from '../components/ListCard/CardContainer';
// import Wallet from '../components/Wallet/Wallet';
import HealthButton from '../components/Buttons/HealthButton'
import {connect} from 'react-redux';
import {useSelector} from 'react-redux';
import BigDiv from '../components/Bigdiv/Bigdiv'


const  Home = ({navigation}) => {
    let cartItems = useSelector(state => {
        return state.cartReducer.itemsCount
    })
        return(
            <Container>
                <StatusBar translucent={false} barStyle="light-content"/>
                <Header  lengthItems={cartItems} />
                <ScrollView style={{backgroundColor:"#B0E0E6",flex:1,display:"flex"}}>
                        <Heading text="What do you Need?" />
                        <View style={{display:'flex',flexDirection:'row',flexWrap:"wrap",flex:1}}>
                            <Card 
                                text="Book Nurse"
                                customIcon={
                                    <MaterialCommunityIcons name="mother-nurse" size={70} color="black" />
                                } 
                                onPress={() => navigation.navigate('Book Nurse')}
                            />
                            <Card 
                                text="Mama kits"
                                // customIcon={
                                //     <Fontisto name="shopping-basket" size={70} color="black" />
                                // } 
                                customIcon = {
                                    <Image resizeMode="contain" style={{width:85,height:85}}
                                        source={require("../../assets/mamakit.png")} 
                                    />
                                }
                                onPress={() => navigation.navigate('Mamakits')}

                            />
                            <Card 
                                text="Mobile Ultrascan"
                                customIcon={
                                    <Image resizeMode="contain" 
                                        style={{width:70,height:70}}
                                        source={require("../../assets/ultrasound.png")} 
                                    />
                                } 
                                onPress={() => navigation.navigate('Utra Scan')}
                            />
                            <Card 
                                text="Health Blog"
                                customIcon={
                                    <FontAwesome name="newspaper-o" size={70} color="black" />
                                } 
                                onPress={() => navigation.navigate('Healthtips')}
                            />  
                        </View>
                        <BigDiv>
                            <View>
                                <Text style={{fontSize:22,color:'#00008B',fontWeight:"bold",marginLeft:20,marginTop:10}}>PregCare</Text>
                                <Text style={{fontSize:22,color:'#000',fontWeight:"bold",textAlign:"center",marginVertical:10}}>Your Health is our concern</Text>    
                                <View  style={{height:StyleSheet.hairlineWidth,width:300,backgroundColor:"#000"}} />
                                <View style={{flexDirection:"row"}}>
                                    <Image resizeMode="contain" style={{width:120,height:120}}
                                        source={require("../../assets/mamakit.png")} 
                                    />
                                    <View>
                                        <Text style={{fontSize:20,color:"#00008B",fontWeight:"bold"}}>Cheap</Text>
                                        <Text style={{fontSize:20,color:"#00008B",fontWeight:"bold"}}>Portable and</Text>
                                        <Text style={{fontSize:20,color:"#00008B",fontWeight:"bold"}}>Well Packaged</Text>                                        
                                        <TouchableOpacity style={{backgroundColor:"blue",height:35,
                                            borderRadius:15,width:120,marginTop:10
                                        }}>
                                            <Text style={{fontSize:20,textAlign:"center"}}>See More</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </BigDiv>
                </ScrollView>
            </Container>
        )
    }
export default Home
