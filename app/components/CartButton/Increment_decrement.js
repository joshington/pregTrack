import React from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableHighlight } from "react-native";
import color from "color";



const Increment = (props) => {
    return (
        <View>
            <View style={{flexDirection:"row",marginLeft:10,borderWidth:1,borderStyle:"solid",
                borderColor:"#6495ed"
            }}>
                <TouchableHighlight style={{backgroundColor:"#6495ed",height:50,width:35}}>
                    <Text style={{color:"#ffffff",fontSize:25,textAlign:"center"}}>-</Text>
                </TouchableHighlight>
                <Text style={{color:"#000000",fontSize:25,textAlign:"center",marginHorizontal:5}}>3</Text>
                <TouchableHighlight style={{backgroundColor:"#6495ed",height:50,width:40}}>
                    <Text style={{color:"#ffffff",fontSize:25,textAlign:"center"}}>+</Text>
                </TouchableHighlight>
            </View>
        </View>
    );
};

Increment.propTypes = {
    onPress: PropTypes.func,
    buttonText: PropTypes.string,
};
export default Increment;
