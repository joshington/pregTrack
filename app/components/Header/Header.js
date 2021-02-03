import React from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons,MaterialIcons,FontAwesome } from '@expo/vector-icons';
import styles from "./styles";

const Header = ({lengthItems}) => (
    <>
        <View style={{height:60,backgroundColor:'#20B2AA',paddingTop:20}}>
            <View style={{flexDirection:'row',justifyContent:'space-around'}} >
                <Text style={{fontSize:22,color:'#00008B',fontWeight:"bold"}}>PregCare</Text>
                <View>
                    <View style={{position:'absolute', height:35,width:35,borderRadius:15,
                        backgroundColor:'rgba(95,300,200,0.8)',alignItems:'center',justifyContent:'center',
                        zIndex:3000,left:25,bottom:10
                    }}>
                        <Text style={{fontSize:25,color:'black',fontWeight:"bold"}}>{lengthItems}</Text>
                    </View>
                    <Text><FontAwesome name="shopping-basket" size={30} color="white" /></Text>
                </View>
                <MaterialIcons name="notifications" size={30} color="white" />
            </View>
        </View>
    </>
)
Header.propTypes = {
    lengthItems:PropTypes.any
}
export default Header;