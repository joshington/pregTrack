/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from "react";
import { StyleSheet, Text, View,Button,TouchableOpacity} from 'react-native';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation"; //remember its different
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";


import { Entypo,Ionicons,FontAwesome } from '@expo/vector-icons';

import Home from '../screens/Home';
import BookNurse from '../screens/BookNurse';
import  UltraScan from '../screens/UltraScan';
import MamaKitShop from '../screens/MamaKitShop';
import MyAccount from '../screens/MyAccount';
import Orders from '../screens/Orders';
import  ContactDoctor from '../screens/ContactDoctor';
// eslint-disable-next-line no-unused-vars
import ProductDetail from '../screens/ProductDetails';
// import MyAccount from '../screens/MyAccount';
import About from '../screens/About';
import Help from '../screens/Help';
import Communications from '../screens/Communications';
import Register from '../screens/Register';
import Terms_Conditions from '../screens/Terms_conditions';
import TopUpAmount from '../screens/TopUpAmount';
import TopUpFlutter from '../screens/TopUpflutter';


const MamaKitStack = createStackNavigator(
    {
        MamaKitShop: {
            screen: MamaKitShop,
            navigationOptions: {
                headerTitle: "Mama kits",
                headerTintColor:'#fff',
                headerStyle:{backgroundColor:"#20B2AA"},
                headerRight: () => (
                //     <Button 
                //         onPress={() => alert('This is a button!')}
                //         title={<Ionicons name="md-cart" size={30} color="white" />}
                //         color="#fff"
                //   />
                    <TouchableOpacity style={{marginRight:15}}>
                        <FontAwesome name="shopping-basket" size={24} color="white" />
                    </TouchableOpacity>
                )
                //tabBarVisible:false,
            },
        },
        ProductDetail:{
            screen:ProductDetail,
            navigationOptions:{
                headerTitle: "Description",
                headerTintColor:'#fff',
                headerStyle:{backgroundColor:"#20B2AA"},
                headerRight: () => (
                //     <Button 
                //         onPress={() => alert('This is a button!')}
                //         title={<Ionicons name="md-cart" size={30} color="white" />}
                //         color="#fff"
                //   />
                    <TouchableOpacity style={{marginRight:15}}>
                        <Ionicons name="md-cart" size={30} color="white" />
                    </TouchableOpacity>
                )
            }
        }
    }
)

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
const MyAccountStack = createStackNavigator({
    MyAccount:{
        screen:MyAccount,
        navigationOptions:{
            headerTitle:"My Account"
        }
    },
    About:{
        screen:About,
        navigationOptions:{
            headerTitle:"About us",
        }
    },
    Help:{
        screen:Help,
        navigationOptions:{
            headerTitle:"Help",
        }
    },
    Communications:{
        screen:Communications,
        navigationOptions:{
            headerTitle:"Communications",
        }
    },
   
},{
    headerMode:"screen"

})

const HomeStack = createStackNavigator({
    // Register:{
    //     screen:Register,
    //     navigationOptions:{
    //         headerTitle:"Register"
    //     }
    // },
    Home: {
        screen: Home,
        navigationOptions: {
            header: () => null,
        },
    },
    Terms_Conditions:{
        screen:Terms_Conditions,
        navigationOptions:{
            headerTitle:"Terms And Conditions"
        },
    },
    TopUpAmount:{
       screen:TopUpAmount,
       navigationOptions:{
           headerTitle:"Top Up"
        
       },
    },
    TopUpFlutter:{
        screen:TopUpFlutter,
        navigationOptions:{
            header: () => null,
        }
    },
    ContactDoctor:{
        screen: ContactDoctor,
        navigationOptions: {
            header: () => null,
        },
    },
    BookNurse: {
        screen: BookNurse,
        navigationOptions: {
            headerTitle: "Book Nurse",
            //tabBarVisible:false,
        },
    },
    UltraScan: {
        screen: UltraScan,
        navigationOptions: {
            headerTitle: "Ultra Scan",
            //tabBarVisible:false,
        },
    },
    MamaKitShop: {
        screen: MamaKitStack,
        navigationOptions: {
            headerTitle: "Maternal Shop",
            headerTintColor:'#fff',
            headerStyle:{backgroundColor:"#20B2AA"},
            headerRight: () => (
            //     <Button 
            //         onPress={() => alert('This is a button!')}
            //         title={<Ionicons name="md-cart" size={30} color="white" />}
            //         color="#fff"
            //   />
                <TouchableOpacity style={{marginRight:15}}>
                    <FontAwesome name="shopping-basket" size={26} color="white" />
                </TouchableOpacity>
            )
            //tabBarVisible:false,
        },
    
    }
})

const NavigationStack = createStackNavigator(
    {
        Home: {
            //screen:HomeAloneStack,
            screen: HomeStack,
        },
        MamaKitShop:{
            screen:MamaKitStack,
        },
    },
    {
        mode: "modal", //doing this since i want my screen to pop from bottom to the top.
        //make suire the header is proper
        headerMode: "none", //since we dont want the navigator to render the header bar
    }
);

const tabBarIcon = (name) => ({ tintColor }) => (
    <View>
        <Ionicons style={[{ color: tintColor }]} name={name} size={25} />
    </View>
);

const TabNavigator = createMaterialBottomTabNavigator(
    {
        MyAccount: {
            screen: MyAccountStack,
            navigationOptions: {
                tabBarIcon: tabBarIcon("md-person"),
                activeColor: "#20B2AA",
                inactiveColor: "#000000",
                barStyle: { backgroundColor: "#ffffff" },
            },
        },
        PregCare: {
            screen: HomeStack,
            navigationOptions: {
                tabBarIcon: tabBarIcon("md-home"),
                activeColor: "#20B2AA",
                inactiveColor: "#000000",
                barStyle: { backgroundColor: "#ffffff" },
            },
        },
        Orders:{
            screen: Orders,
            navigationOptions: {
                tabBarIcon: tabBarIcon("md-reorder"),
                activeColor: "#6495ed",
                inactiveColor: "#000000",
                barStyle: { backgroundColor: "#ffffff" },
            },
        },
    },
    {
        initialRouteName:"PregCare",
        activeColor: "#B0E0E6",
        inactiveColor: "#000000",
        barStyle: { backgroundColor: "#ffffff" },
    }
)
const Navigator = createAppContainer(TabNavigator);
export default Navigator;

