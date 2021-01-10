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


const  Home = ({navigation}) => {
    let cartItems = useSelector(state => {
        return state.cartReducer.itemsCount
    })
        return(
            <Container>
                <StatusBar translucent={false} barStyle="light-content"/>
                <Header  lengthItems={cartItems} />
                <ScrollView>
                    <View style={{backgroundColor:"#B0E0E6",flex:1}}>
                        {/* <Heading text="Reproductive Health shop" />
                        <Bigdiv>
                            <View style={{flexDirection:"row"}}>
                                <Image resizeMode="contain" source={require("../../assets/mariecondoms.png")} 
                                    style={{height:150,width:180}}
                                />
                                <View>
                                    <Text style={{fontSize:22}}>Order with Us..</Text>
                                    <View>
                                        <Text style={{fontSize:15,color:"#FF0000",fontWeight:"bold"}}>Contraceptives</Text>
                                        <Text style={{fontSize:15,color:"#FF0000",fontWeight:"bold"}}>Family Plannings</Text>
                                        <Text style={{fontSize:15,color:"#FF0000",fontWeight:"bold"}}>Emergency pills</Text>
                                    </View>
                                    <View style={{marginVertical:5,marginRight:15}}>
                                        <HealthButton onPress={this.shopNow} />
                                    </View>
                                </View>
                            </View>
                        </Bigdiv> */}
                        {/* <Wallet /> */}
                        <Heading text="What do you Need?" />
                        <View style={{display:'flex',flexDirection:'row',flexWrap:"wrap",flex:1,margin:8}}>
                            <Card 
                                text="Book Nurse"
                                customIcon={
                                    <MaterialCommunityIcons name="mother-nurse" size={70} color="black" />
                                } 
                                onPress={() => navigation.navigate('Book Nurse')}
                            />
                            <Card 
                                text="Talk to Doctor"
                                customIcon={
                                    <Fontisto name="doctor" size={70} color="black" />
                                } 
                                onPress={() => console.log('replace with health tips')}
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
                            {/* <Card 
                                text="Parents Forum"
                                customIcon={
                                    <Octicons name="comment-discussion" size={70} color="black" />
                                } 
                            
                            />
                            <Card 
                                text="Health Blog"
                                customIcon={
                                    <FontAwesome name="newspaper-o" size={70} color="black" />
                                } 
                            
                            /> */}
                        </View>
                    </View>

                </ScrollView>
            </Container>
        )
    }
export default Home
