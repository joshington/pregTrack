import React, { Component } from "react";
import PropTypes from 'prop-types';
import {StatusBar,StyleSheet,View,ScrollView,Image,Text,TouchableOpacity} from 'react-native';
import { Ionicons,FontAwesome5,MaterialIcons} from '@expo/vector-icons';
import Separator from '../components/Wallet/Separator';




const MyAccount = ()  => {
    // static propTypes = {
    //     navigation: PropTypes.object,
    // };
    // aboutLoad = () => this.props.navigation.navigate("About");
    
    // getHelp = () => this.props.navigation.navigate("Help");
    
    // loadComs = () => this.props.navigation.navigate("Communications");
    // render(){
        return(
            <>
                <View style={{margin:15}}>
                <TouchableOpacity style={{
                    borderRadius:10,shadowColor:'rgba(0,0,0, .4',shadowOpacity:1,shadowRadius:1,
                    elevation:2,height:90
                    }}>
                        <View style={{flexDirection:"row",marginHorizontal:10,justifyContent:"space-between",
                            alignItems:"center"
                        }}>
                            <Ionicons name="ios-contact" size={70} color="#20B2AA" />
                            <View>
                                <Text style={{fontSize:23}}>Joseph Bbosa</Text>
                                <Text style={{fontSize:20}}>0706626855</Text>
                            </View>
                            <Text style={{fontSize:30}}> > </Text>
                        </View>
                </TouchableOpacity>
                        <View style={{margin:15,marginHorizontal:10,shadowColor:'rgba(0,0,0, .4',shadowOpacity:1,shadowRadius:1,
                            elevation:2,borderRadius:10,height:200}}
                        >
                            <TouchableOpacity style={{margin:10}} onPress={this.loadComs}>
                                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                                    <FontAwesome5 name="envelope" size={40} color="#20B2AA" />
                                    <Text style={{fontSize:23}}>Comunications</Text>
                                    <Text style={{fontSize:30}}> > </Text>
                                </View>
                            </TouchableOpacity>
                            <Separator />
                            <TouchableOpacity style={{margin:10,justifyContent:"space-between"}}
                                onPress={this.getHelp}
                            >
                                <View style={{flexDirection:"row"}}>
                                    <MaterialIcons name="help" size={40} color="#20B2AA" />
                                    <Text style={{fontSize:23,marginLeft:15}}>Help</Text>
                                    <Text style={{fontSize:30}}> > </Text>
                                </View>
                            </TouchableOpacity>
                            <Separator />
                            <TouchableOpacity onPress={this.aboutLoad} style={{margin:10}}>
                                <View style={{flexDirection:"row"}}>
                                    <Ionicons name="md-information-circle-outline" size={40} color="#20B2AA" />
                                    <Text style={{fontSize:23,marginLeft:15}}>About</Text>
                                    <Text style={{fontSize:25}}> > </Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                    <View style={{margin:15,alignItems:"center"}}>
                        <Text style={{fontSize:25}}>PregCare</Text>
                        <Text style={{fontSize:15,color:"#20B2AA"}}>Version 1.0</Text>
                    </View>
                    <Separator />
                    <TouchableOpacity style={{marginBottom:20,alignItems:"center"}}>
                        <Text style={{fontSize:20,color:"#20B2AA"}}>Logout</Text>
                    </TouchableOpacity>
                    <Separator />


                </View>

            </>
        )
}

export default MyAccount;