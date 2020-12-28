import React, {useState,useRef} from 'react'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {View,Text,TextInput,StatusBar,TouchableOpacity} from 'react-native';
import LoginTextInput from '../components/LoginTextInput/LoginTextInput';
// import PhoneInput from "react-native-phone-number-input";


const Register = (props) => {
    const [value, onChangeText] = useState('Enter username');
    const [valuephone, setValue] = useState("Enter phone number");
    // const phoneInput = useRef<PhoneInput>(null);
    return (
        <>
            <StatusBar translucent={false} barStyle="light-content"/>
            <View style={{paddingTop:60}}>
                <View style={{alignItems:"center"}}>
                    <MaterialCommunityIcons name="mother-nurse" size={120} color="#20B2AA" />
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:40}}>
                    <Text style={{fontSize:20}}>Username</Text>
                    <TextInput 
                        editable={true}
                        // value={value}
                        // onChangeText={text => onChangeAmount(text)}
                        placeholder="Enter your username"
                        placeholderTextColor="#000"
                        underlineColorAndroid="#000"
                        width={150}
                        height={35}
                        textAlign="center"
                        keyboardType="default"
                        autoFocus={true}
                    />
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:20}}>
                    <Text style={{fontSize:20}}>Phone No.</Text>
                    <TextInput 
                        editable={true}
                        // value={value}
                        // onChangeText={text => onChangeAmount(text)}
                        placeholder="E.g +256706626855"
                        placeholderTextColor="#000"
                        underlineColorAndroid="#000"
                        width={150}
                        height={35}
                        textAlign="center"
                        keyboardType="phone-pad"
                        autoFocus={true}
                    />
                </View>
                <View>
                    <TouchableOpacity style={{alignItems:"flex-end",marginVertical:20,marginRight:25}}>
                        <Text style={{fontSize:15,color:"red",fontWeight:"bold"}}>SEND OTP</Text>
                    </TouchableOpacity>
                    <Text style={{fontSize:15,marginTop:90,textAlign:"center"}}>Press SEND OTP for phone number verification</Text>
                </View>
            </View>
        </>
    )
}

export default Register;
