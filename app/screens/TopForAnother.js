import React, {Component} from 'react'
import {MaterialCommunityIcons,AntDesign,Fontisto} from '@expo/vector-icons'
import {Flag} from 'react-native-svg-flagkit'
import {View,Text,TextInput,StatusBar,TouchableOpacity} from 'react-native';
import LoginTextInput from '../components/LoginTextInput/LoginTextInput';
// import PhoneInput from "react-native-phone-number-input";
import Separator from '../components/Wallet/Separator';

class TopForAnother extends Component{
    render(){
        return (
            <>
                <StatusBar translucent={false} barStyle="light-content"/>
                <View style={{marginHorizontal:30,marginTop:30}}>
                    <View style={{flexDirection:"row",alignItems:"center",alignSelf:"center"}}>
                        <MaterialCommunityIcons name="cellphone-android" size={100} color="#20B2AA" 
                            style={{alignItems:"center"}}
                        />
                        <Fontisto name="share-a" size={30} color="black" />
                        <MaterialCommunityIcons name="cellphone-android" size={100} color="#20B2AA" 
                             style={{alignItems:"center"}}
                        />
                    </View>
                    <Separator />
                    <View>
                        <Text style={{fontSize:22,textAlign:"center",marginTop:15}}>
                            Share money instantly from your PregCare wallet to your Friend's PregCare
                            Wallet.
                        </Text>
                    </View>
                    <TouchableOpacity style={{borderRadius:18,backgroundColor:"#20B2AA",
                    width:200,height:40,alignItems:"center",alignSelf:"center",marginTop:40,
                }}>
                    <Text style={{fontSize:22,fontWeight:"bold"}}>Start Sharing</Text>
                </TouchableOpacity>
                </View>
            
            </>
        )
        
    }
    // const [value, onChangeAmount] = useState('E.g 10,000');
}

export default TopForAnother;
 