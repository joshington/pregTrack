/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from "react";
import { StyleSheet, Text, View,Button,TouchableOpacity} from 'react-native';
// import { createStackNavigator } from "react-navigation-stack";
// import { createAppContainer } from "react-navigation"; //remember its different
// import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import {NavigationContainer,DefaultTheme,DarkTheme, useTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


import { Entypo,Ionicons,FontAwesome } from '@expo/vector-icons';

import Home from '../screens/Home';
import BookNurse from '../screens/BookNurse';
import  UltraScan from '../screens/UltraScan';
import MamaKitShop from '../screens/MamaKitShop';
import MyAccount from '../screens/MyAccount';
import Orders from '../screens/Orders';
import  ContactDoctor from '../screens/ContactDoctor';
// eslint-disable-next-line no-unused-vars
import ProductDetails from '../screens/ProductDetails';
// import MyAccount from '../screens/MyAccount';
import About from '../screens/About';
import Help from '../screens/Help';
import Communications from '../screens/Communications';
import Register from '../screens/Register';
import Terms_Conditions from '../screens/Terms_conditions';
import TopUpAmount from '../screens/TopUpAmount';
import TopUpFlutter from '../screens/TopUpflutter';
import {useSelector} from 'react-redux';
import CartScreen from '../screens/CartScreen';



const Stack = createStackNavigator()
const Tabs  = createBottomTabNavigator()


const RootHome = () => {
    return (
    <Tabs.Navigator>
        <Tabs.Screen name="PregCare" component={HomeScreenStack} />
        <Tabs.Screen  name="MyAccount" component={MyAccountStack} />
        <Tabs.Screen name="Orders" component={Orders} />
    </Tabs.Navigator>

    )
}

const MyAccountStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="MyAccount" component={MyAccount} />
            <Stack.Screen name="About" component={About} />
            <Stack.Screen name="Help" component={Help} />
            <Stack.Screen name="Communications" component={Communications} />
        </Stack.Navigator>
    )
}

// const CartStack = () => {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen name="CartScreen" component={CartScreen} />
//         </Stack.Navigator>
//     )
// }
const MamaKitStack = ({navigation}) => {
    let cartItems = useSelector(state => {
        return state.cartReducer.itemsCount
    })
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="MamaKitshop" 
                component={MamaKitShop} 
                options={{headerRight:() => (
                    <TouchableOpacity style={{marginRight:15}}
                        onPress={navigation.navigate('CartScreen')}
                    >
                        <View>
                            <View style={{position:'absolute', height:30,width:35,borderRadius:15,
                                backgroundColor:'rgba(95,300,200,0.8)',alignItems:'center',justifyContent:'center',
                                zIndex:3000,left:10,bottom:10
                            }}>
                                <Text style={{fontSize:25,color:'black',fontWeight:"bold"}}>
                                    {cartItems}
                                </Text>
                            </View>
                            <FontAwesome name="shopping-basket" size={24} color="#000" />
                        </View>
                    </TouchableOpacity>
                )}}
            />
            <Stack.Screen 
                name="ProductDetails" 
                component={ProductDetails} 
                options={{headerRight:() => (
                    <TouchableOpacity style={{marginRight:15}}
                        onPress={navigation.navigate('CartScreen')}
                    >
                        <View>
                            <View style={{position:'absolute', height:30,width:35,borderRadius:15,
                                backgroundColor:'rgba(95,300,200,0.8)',alignItems:'center',justifyContent:'center',
                                zIndex:3000,left:10,bottom:10
                            }}>
                                <Text style={{fontSize:25,color:'black',fontWeight:"bold"}}>
                                    {cartItems}
                                </Text>
                            </View>
                            <FontAwesome name="shopping-basket" size={24} color="#000" />
                        </View>
                    </TouchableOpacity>
                )}}
            />
        </Stack.Navigator>
    )
}
function HomeScreenStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen options={{headerShown:false}} name="Home" component={Home} />
            <Stack.Screen name="MamaKitshop" component={MamaKitStack} />
            <Stack.Screen name="Book Nurse" component={BookNurse} />
            <Stack.Screen name="Utra Scan" component={UltraScan} />
        </Stack.Navigator>
    )
}

const Navigator = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator headerMode="none">
                <Stack.Screen name="rootHome" component={RootHome} />
                <Stack.Screen  name="Home" component={HomeScreenStack} />
                <Stack.Screen  name="Mamakits" component={MamaKitStack} />
                <Stack.Screen  name="CartScreen" component={CartScreen} />
                <Stack.Screen  name="My Account" component={MyAccountStack} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


// const MamaKitStack = createStackNavigator(
//     {
//         MamaKitShop: {
//             screen: MamaKitShop,
//             navigationOptions: {
//                 headerTitle: "Mama kits",
//                 headerTintColor:'#fff',
//                 headerStyle:{backgroundColor:"#20B2AA"},
//                 headerRight: () => (
//                 //     <Button 
//                 //         onPress={() => alert('This is a button!')}
//                 //         title={<Ionicons name="md-cart" size={30} color="white" />}
//                 //         color="#fff"
//                 //   />
//                     <TouchableOpacity style={{marginRight:15}}>
//                         <FontAwesome name="shopping-basket" size={24} color="white" />
//                     </TouchableOpacity>
//                 )
//                 //tabBarVisible:false,
//             },
//         },
//         ProductDetail:{
//             screen:ProductDetail,
//             navigationOptions:{
//                 headerTitle: "Description",
//                 headerTintColor:'#fff',
//                 headerStyle:{backgroundColor:"#20B2AA"},
//                 headerRight: () => (
//                 //     <Button 
//                 //         onPress={() => alert('This is a button!')}
//                 //         title={<Ionicons name="md-cart" size={30} color="white" />}
//                 //         color="#fff"
//                 //   />
//                     <TouchableOpacity style={{marginRight:15}}>
//                         <Ionicons name="md-cart" size={30} color="white" />
//                     </TouchableOpacity>
//                 )
//             }
//         }
//     }
// )

// const AboutStack = createStackNavigator({
//     About:{
//         screen:About,
//         navigationOptions:{
//             headerTitle:"About us",
//         }
//     },
//     // Help:{
//     //     screen:Help,
//     //     navigationOptions:{
//     //         headerTitle:"Help",
//     //     }
//     // }
// })
// const MyAccountStack = createStackNavigator({
//     MyAccount:{
//         screen:MyAccount,
//         navigationOptions:{
//             headerTitle:"My Account"
//         }
//     },
//     About:{
//         screen:About,
//         navigationOptions:{
//             headerTitle:"About us",
//         }
//     },
//     Help:{
//         screen:Help,
//         navigationOptions:{
//             headerTitle:"Help",
//         }
//     },
//     Communications:{
//         screen:Communications,
//         navigationOptions:{
//             headerTitle:"Communications",
//         }
//     },
   
// },{
//     headerMode:"screen"

// })

// const HomeStack = createStackNavigator({
//     // Register:{
//     //     screen:Register,
//     //     navigationOptions:{
//     //         headerTitle:"Register"
//     //     }
//     // },
//     Home: {
//         screen: Home,
//         navigationOptions: {
//             header: () => null,
//         },
//     },
//     Terms_Conditions:{
//         screen:Terms_Conditions,
//         navigationOptions:{
//             headerTitle:"Terms And Conditions"
//         },
//     },
//     TopUpAmount:{
//        screen:TopUpAmount,
//        navigationOptions:{
//            headerTitle:"Top Up"
        
//        },
//     },
//     TopUpFlutter:{
//         screen:TopUpFlutter,
//         navigationOptions:{
//             header: () => null,
//         }
//     },
//     ContactDoctor:{
//         screen: ContactDoctor,
//         navigationOptions: {
//             header: () => null,
//         },
//     },
//     BookNurse: {
//         screen: BookNurse,
//         navigationOptions: {
//             headerTitle: "Book Nurse",
//             //tabBarVisible:false,
//         },
//     },
//     UltraScan: {
//         screen: UltraScan,
//         navigationOptions: {
//             headerTitle: "Ultra Scan",
//             //tabBarVisible:false,
//         },
//     },
//     MamaKitShop: {
//         screen: MamaKitStack,
//         navigationOptions: {
//             headerTitle: "Maternal Shop",
//             headerTintColor:'#fff',
//             headerStyle:{backgroundColor:"#20B2AA"},
//             headerRight: () => (
//             //     <Button 
//             //         onPress={() => alert('This is a button!')}
//             //         title={<Ionicons name="md-cart" size={30} color="white" />}
//             //         color="#fff"
//             //   />
//                 <TouchableOpacity style={{marginRight:15}}>
//                     <FontAwesome name="shopping-basket" size={26} color="white" />
//                 </TouchableOpacity>
//             )
//             //tabBarVisible:false,
//         },
    
//     }
// })

// const NavigationStack = createStackNavigator(
//     {
//         Home: {
//             //screen:HomeAloneStack,
//             screen: HomeStack,
//         },
//         MamaKitShop:{
//             screen:MamaKitStack,
//         },
//     },
//     {
//         mode: "modal", //doing this since i want my screen to pop from bottom to the top.
//         //make suire the header is proper
//         headerMode: "none", //since we dont want the navigator to render the header bar
//     }
// );

// const tabBarIcon = (name) => ({ tintColor }) => (
//     <View>
//         <Ionicons style={[{ color: tintColor }]} name={name} size={25} />
//     </View>
// );

// const TabNavigator = createMaterialBottomTabNavigator(
//     {
//         MyAccount: {
//             screen: MyAccountStack,
//             navigationOptions: {
//                 tabBarIcon: tabBarIcon("md-person"),
//                 activeColor: "#20B2AA",
//                 inactiveColor: "#000000",
//                 barStyle: { backgroundColor: "#ffffff" },
//             },
//         },
//         PregCare: {
//             screen: HomeStack,
//             navigationOptions: {
//                 tabBarIcon: tabBarIcon("md-home"),
//                 activeColor: "#20B2AA",
//                 inactiveColor: "#000000",
//                 barStyle: { backgroundColor: "#ffffff" },
//             },
//         },
//         Orders:{
//             screen: Orders,
//             navigationOptions: {
//                 tabBarIcon: tabBarIcon("md-reorder"),
//                 activeColor: "#6495ed",
//                 inactiveColor: "#000000",
//                 barStyle: { backgroundColor: "#ffffff" },
//             },
//         },
//     },
//     {
//         initialRouteName:"PregCare",
//         activeColor: "#B0E0E6",
//         inactiveColor: "#000000",
//         barStyle: { backgroundColor: "#ffffff" },
//     }
// )
// const Navigator = createAppContainer(TabNavigator);
export default Navigator;

