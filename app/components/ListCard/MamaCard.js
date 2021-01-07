import React from "react";
import PropTypes from "prop-types";
import {View, Text, TouchableHighlight,TouchableOpacity} from "react-native";
import styles from "./styles";


const MamaCard = ({onPress, customIcon=null, name,price}) => {
    return(
        <View style={{marginVertical:20}}>
            <TouchableOpacity onPress={onPress} style={{...styles.touchable,backgroundColor:"#ffffff",
                width:130,height:120,borderRadius:10,marginTop:10,marginBottom:25,marginHorizontal:10,
            }}>
                <View style={{alignItems:'center'}}>
                    {customIcon}
                    <Text style={{fontSize:15,marginLeft:5,marginVertical:4,alignItems:"center",fontWeight:"bold"}}>{name}</Text>
                    <Text style={{fontSize:22,marginLeft:5,marginBottom:20,alignItems:"center",fontWeight:"bold",color:"#6495ed"}}>UGX {price}</Text>
                </View>
            </TouchableOpacity>
            {/* <View style={{width:1,height:160,backgroundColor:"#000",marginHorizontal:5}} /> */}
        </View>
    )
}
MamaCard.propTypes={
    name:PropTypes.string,
    customIcon:PropTypes.element,
    price:PropTypes.number,
}

export default MamaCard;