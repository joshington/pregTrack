import React, {Component} from 'react'
import {MaterialCommunityIcons,AntDesign} from '@expo/vector-icons'
import {Flag} from 'react-native-svg-flagkit'
import {View,Text,TextInput,StatusBar,TouchableOpacity} from 'react-native';
import LoginTextInput from '../components/LoginTextInput/LoginTextInput';
// import PhoneInput from "react-native-phone-number-input";


class TopUpAmount extends Component{
    topFlutter = () => {
        this.props.navigation.navigate("TopUpFlutter")
    }
    render(){
        return (
            <>
            <StatusBar translucent={false} barStyle="light-content"/>
            <View style={{marginHorizontal:30,marginTop:30}}>
                <Text style={{fontSize:20}}>ENTER AMOUNT</Text>
                <View style={{flexDirection:"row",marginTop:40,alignItems:"flex-end"}}>
                    <Text style={{textAlign:"right",fontSize:20,marginRight:50}}>UGX:</Text>
                    <TextInput 
                        editable={true}
                        // value={value}
                        // onChangeText={text => onChangeAmount(text)}
                        placeholder="E.g 10,000"
                        placeholderTextColor="#000"
                        underlineColorAndroid="#000"
                        width={150}
                        height={35}
                        textAlign="center"
                        keyboardType="numeric"
                        autoFocus={true}
                    />
                </View>
                <Text style={{fontSize:15,textAlign:"right"}}>Min 1000 & Max 1,000,000</Text>
                <Text style={{textAlign:"center",marginVertical:40,fontSize:15}}>MOBILE MONEY NUMBER</Text>
                <View style={{flexDirection:"row"}}>
                    <Flag id={'UG'} size={0.2}  />
                    <Text style={{fontSize:20,marginHorizontal:20}}>+256773943826</Text>
                    <AntDesign name="edit" size={24} color="#20B2AA" />
                </View>
                <TouchableOpacity style={{borderRadius:18,backgroundColor:"#20B2AA",
                    width:200,height:40,alignItems:"center",alignSelf:"center",marginTop:40,
                }} onPress={this.topFlutter}>
                    <Text style={{fontSize:22,fontWeight:"bold"}}>Confirm Top Up</Text>
                </TouchableOpacity>
            </View>
            
            </>
        )
        
    }
    // const [value, onChangeAmount] = useState('E.g 10,000');
}

export default TopUpAmount;
 