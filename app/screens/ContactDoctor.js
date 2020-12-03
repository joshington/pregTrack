import React, { useState,useEffect } from "react";
import {StatusBar,Text,StyleSheet,View,ScrollView,Image,Dimensions,TouchableHighlight,
    TouchableOpacity,
} from 'react-native';
import { Ionicons,Feather,FontAwesome5 } from '@expo/vector-icons';
import Separator from '../components/Wallet/Separator';

const ContactDoctor = () => {
    return(
        <View>
            <StatusBar translucent={false} />
            <View style={{flexDirection:"row",justifyContent:"space-around",margin:15,
                alignItems:"center"
            }}>
                <View style={{width:Dimensions.get('window').width/2}}>
                    <Text style={{fontSize:20,fontWeight:"bold"}}>Hello  Josh,</Text>
                    <Text style={{fontSize:16}}>Reach out to our team of professional doctors</Text>
                </View>
                <View>
                    <Ionicons name="ios-contact" size={70} color="blue" />
                </View>
            </View>
            <View style={{flexDirection:"row"}}>
                <TouchableOpacity>
                    <View style={{height:120,width:Dimensions.get('window').width/2,backgroundColor:"#B0E0E6",
                        alignItems:"center"
                    }}>
                        <Feather name="phone-call" size={30} color="black" style={{marginTop:20}} />
                        <Text style={{fontSize:20}}>Ask The Doctor</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{borderWidth:0.5}}>
                    <View style={{height:120,width:Dimensions.get('window').width/2,backgroundColor:"#ffffff",
                        alignItems:"center"
                    }}>
                        <FontAwesome5 name="notes-medical" size={30} color="black" style={{marginTop:20}} />
                        <Text style={{fontSize:20}}>Health Diary</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View  style={{width:Dimensions.get('window').width, height:StyleSheet.hairlineWidth,
                backgroundColor:"#000000",marginTop:30
            }} />
            <View style={{height:150,marginTop:5}}>
                <Text style={{fontSize:18}}>Health Tips</Text>
                <View  style={{flexDirection:"row",width:'100%'}}>
                    <ScrollView 
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <TouchableOpacity>
                            <View style={{backgroundColor:"#B0E0E6",height:160}}>
                                <Image resizeMode="contain" source={require("./images/nutrition.png")} />
                                <Text style={{marginLeft:15,fontSize:20}}>Marital Nutrition</Text>
                                <Text style={{marginLeft:15,fontSize:15,color:"#0000FF"}}>Posted: 3 days ago</Text>
                                {/* <View style={{width:1,height:160,backgroundColor:"#000"}} /> */}
                            </View>
                        </TouchableOpacity>
                        <View style={{width:1,height:160,backgroundColor:"#000",marginHorizontal:5}} />
                        <TouchableOpacity>
                            <View style={{backgroundColor:"#B0E0E6",height:160}}>
                                <Image resizeMode="contain" source={require("./images/train.png")} />
                                <Text style={{marginLeft:15,fontSize:20}}>Physical Exercise</Text>
                                <Text style={{marginLeft:15,fontSize:15,color:"#0000FF"}}>Posted: today</Text>
                                {/* <View style={{width:1,height:160,backgroundColor:"#000"}} /> */}
                            </View>
                        </TouchableOpacity>
                        <View style={{width:1,height:160,backgroundColor:"#000",marginHorizontal:5}} />
                        <TouchableOpacity>
                            <View style={{backgroundColor:"#B0E0E6",height:160}}>
                                <Image resizeMode="contain" source={require("./images/sleep.png")} />
                                <Text style={{marginLeft:15,fontSize:20}}>Rest</Text>
                                <Text style={{marginLeft:15,fontSize:15,color:"#0000FF"}}>Posted: today</Text>
                                {/* <View style={{width:1,height:160,backgroundColor:"#000"}} /> */}
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
        </View>  
        
    )
}
export default ContactDoctor