import React from "react";
import {View, Text,TouchableHighlight} from 'react-native';
import PropTypes from "prop-types";
import Separator from './Separator';
import { AntDesign,Entypo,MaterialIcons} from '@expo/vector-icons';

const Wallet = () => {
    return (
        <View style={{borderRadius:10,marginLeft:8,marginRight:8,}}>
            <View style={{flexDirection:"row",marginTop:20,borderRadius:10,
                height:40,alignItems:'center',backgroundColor:"#ffffff",justifyContent:'space-around'}}>
                <Text style={{fontSize:20,fontWeight:'bold'}}>Wallet</Text>
                <Text style={{fontSize:20,color:'#FF0000',fontWeight:'bold'}}>
                    Balance: <Text style={{color:"#000000"}}>UGX: 10000</Text>
                </Text>
            </View>
            {/* <Separator /> */}
            <View style={{flexDirection:"row",flex:1,justifyContent:"space-between",borderRadius:5,
                backgroundColor:'#20B2AA',height:90}}>
                <TouchableHighlight style={{justifyContent:"center",marginLeft:8}}>
                    <View>
                        <AntDesign name="pluscircleo" size={30} color="black" style={{alignItems:"center"}} />
                        <Text>Topup</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={{justifyContent:"center"}}>
                    <View>
                        <Entypo name="share" size={30} color="black"  style={{alignItems:"center"}}/>
                        <Text>Share money</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={{justifyContent:"center"}}>
                    <View>
                        <MaterialIcons name="loop" size={30} color="black" style={{alignItems:"center"}} />
                        <Text>Transaction</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={{justifyContent:"center",marginRight:8}}>
                    <View>
                        <MaterialIcons name="more-horiz" size={30} color="black" style={{alignItems:"center"}}  />
                        <Text>More</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </View>
    )
}

export default Wallet; 