import React,{useState,useEffect} from "react";
import {StatusBar,StyleSheet,View,ScrollView,Image,Text,Dimensions,TouchableOpacity,TextInput} from 'react-native';
import RadioButton from '../components/RadioButton/RadioButton';


const Orders = () => {
    const [myContact, setContact] = useState("Enter Contact here");
    const [location, setLocation] = useState("Enter delivery address here");
    const [deliverMthd, setMethod] = useState([
        {id:1,value:true,name:"Delivery(Delivery fee UGX 7000 as minimum)", selected:true},
        {id:2,value:false,name:"Shop Pickup(Nyanama Zzana)", selected:false},
    ])
    
    const onRadioBtnClick = (item) => {
        let updatedState = deliverMthd.map((isLikedItem) => {
            isLikedItem.id === item.id  ? {...isLikedItem,selected:true}:{...isLikedItem,selected:false}
        });
        setMethod(updatedState);
    }
    return(
        <>
            <ScrollView>
                <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#20B2AA" translucent={true} /> 
                <View style={{marginTop:30}}>
                    {/* <View style={{flexDirection:"row",justifyContent:'space-around'}}>
                        <Text style={{fontSize:20,fontWeight:"bold"}}>X</Text>
                        <Text style={{fontSize:20}}>Order Summary</Text>
                    </View> */}
                    <View style={{flexDirection:"row",justifyContent:'space-around'}}>
                        <Text style={{fontSize:20,fontWeight:"bold"}}>Subtotal</Text>
                        <Text style={{fontSize:20}}>UGX 100,000</Text>
                    </View>
                    <View style={{flexDirection:"row",justifyContent:'space-around'}}>
                        <Text style={{fontSize:20,fontWeight:"bold"}}>Delivery fee</Text>
                        <Text style={{fontSize:20}}>UGX 7000</Text>
                    </View>
                    <View style={{height:StyleSheet.hairlineWidth,width:400,backgroundColor:"#000",marginTop:10}} />
                </View>
                <View style={{flexDirection:"row",justifyContent:'space-around',marginTop:10}}>
                    <Text style={{fontSize:20,fontWeight:"bold"}}>Total</Text>
                    <Text style={{fontSize:20}}>UGX 107000</Text>
                </View>
                <View style={{
                    borderRadius:10,shadowColor:'rgba(0,0,0, .4',shadowOpacity:1,shadowRadius:1,
                    elevation:2,height:120,width:Dimensions.get('window').width*0.9,marginLeft:20
                    }}>
                        <View style={{flexDirection:"row",marginHorizontal:20,justifyContent:"space-between",
                            alignItems:"center",marginTop:8
                        }}>
                            {/* <Ionicons name="ios-contact" size={70} color="#20B2AA" /> */}
                            <Text style={{fontSize:20}}>My Contact</Text>
                            <Text style={{fontSize:20}}>Save</Text>
                        </View>
                        <View style={{height:StyleSheet.hairlineWidth,width:285,backgroundColor:"#000",marginTop:10}} />
                    <TextInput style={{height:40, fontSize:20,color:"#20B2AA"}}
                        editable
                        numberOfLines={1}
                        value={myContact}
                        onChangeText={text =>setContact(text)}
                        keyboardType="numeric"
                        autoFocus={true}
                        blurOnSubmit={true}
                    />
                </View>
                <View style={{
                    borderRadius:10,shadowColor:'rgba(0,0,0, .4',shadowOpacity:1,shadowRadius:1,
                    elevation:2,height:120,width:Dimensions.get('window').width*0.9,marginLeft:20,
                    marginTop:20
                }}>
                        <View style={{flexDirection:"row",marginHorizontal:20,justifyContent:"space-between",
                            alignItems:"center",marginTop:8
                        }}>
                            {/* <Ionicons name="ios-contact" size={70} color="#20B2AA" /> */}
                            <Text style={{fontSize:20}}>Delivery Address</Text>
                            <Text style={{fontSize:20}}>Save</Text>
                        </View>
                        <View style={{height:StyleSheet.hairlineWidth,width:285,backgroundColor:"#000",marginTop:10}} />
                    <TextInput style={{height:40, fontSize:20,color:"#20B2AA"}}
                        editable
                        numberOfLines={1}
                        value={location}
                        onChangeText={text =>setLocation(text)}
                        autoFocus={true}
                        blurOnSubmit={true}
                    />
                </View>
                {/* <View style={{
                    borderRadius:10,shadowColor:'rgba(0,0,0, .4',shadowOpacity:1,shadowRadius:1,
                    elevation:2,height:170,width:Dimensions.get('window').width*0.9,marginLeft:20,
                    marginVertical:20
                }}>
                        <View style={{flexDirection:"row",marginHorizontal:20,justifyContent:"space-between",
                            alignItems:"center",marginTop:8
                        }}>
                            {/* <Ionicons name="ios-contact" size={70} color="#20B2AA" /> */}
                            {/* <Text style={{fontSize:20}}>Delivery method</Text>
                        </View>
                        <View style={{height:StyleSheet.hairlineWidth,width:285,backgroundColor:"#000",marginTop:10}} />
                        {deliverMthd.map((item) => (
                            <RadioButton 
                                onPress={() => onRadioBtnClick(item)}
                                selected={item.selected}
                                key={item.id}
                            >
                                {item.name}
                            </RadioButton>
                        ))}
                </View> */} 
                <TouchableOpacity style={{borderRadius:20,backgroundColor:"#20B2AA",
                    marginVertical:10,height:50,width:Dimensions.get("window").width*0.7,
                    alignSelf:"center",justifyContent:"center"
                }}>
                   <Text style={{fontSize:25,textAlign:"center",color:"#fff"}}>Confirm Order</Text>
                </TouchableOpacity>
            </ScrollView>

        </>
    )
}

const styles = {
    radioButtonContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft:10,marginTop:10
    },
    radioButton: {
        height: 20,
        width: 20,
        backgroundColor: "#F8F8F8",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#E6E6E6",
        alignItems: "center",
        justifyContent: "center"
    },
    radioButtonIcon: {
        height: 14,
        width: 14,
        borderRadius: 7,
        backgroundColor: "#98CFB6"
    },
    radioButtonText: {
        fontSize: 20,
        marginLeft: 16
    }  
}
export default Orders;