import React, { Component } from "react";
import PropTypes from 'prop-types';
import {StatusBar,StyleSheet,View,ScrollView,Image,Text,TouchableOpacity,TouchableHighlight} from 'react-native';
import  Container  from '../components/Container/Container';
import Header from '../components/Header/Header';
import Heading from '../components/Heading/Heading';
import Bigdiv from '../components/Bigdiv/Bigdiv';
import Card from '../components/ListCard/Card';
import { Octicons,MaterialCommunityIcons,Fontisto,FontAwesome,AntDesign,Entypo,MaterialIcons} from '@expo/vector-icons';
// import { Octicons } from '@expo/vector-icons';
import CardContainer from '../components/ListCard/CardContainer';
// import Wallet from '../components/Wallet/Wallet';
import HealthButton from '../components/Buttons/HealthButton'
import {connect} from 'react-redux';



const n_items = 10;
class Home extends Component{
    static propTypes = {
        navigation: PropTypes.object,
        // addedItems:PropTypes.array,
    };

    getDoctor = () => {
        this.props.navigation.navigate("ContactDoctor");
    }
    bookNurse = () => {
        this.props.navigation.navigate("BookNurse");
    }
    shopNow = () => {
        this.props.navigation.navigate("MamaKitShop");
    }
    ultraScan = () => {
        this.props.navigation.navigate("UltraScan");
    }
    topWallet = () => {
        this.props.navigation.navigate("Terms_Conditions");
    }
    render(){
        return(
            <Container>
                <StatusBar translucent={false} barStyle="light-content"/>
                <Header  lengthItems={n_items} />
                <ScrollView>
                    <View style={{backgroundColor:"#B0E0E6",flex:1}}>
                        {/* <Heading text="Reproductive Health shop" />
                        <Bigdiv>
                            <View style={{flexDirection:"row"}}>
                                <Image resizeMode="contain" source={require("../../assets/mariecondoms.png")} 
                                    style={{height:150,width:180}}
                                />
                                <View>
                                    <Text style={{fontSize:22}}>Order with Us..</Text>
                                    <View>
                                        <Text style={{fontSize:15,color:"#FF0000",fontWeight:"bold"}}>Contraceptives</Text>
                                        <Text style={{fontSize:15,color:"#FF0000",fontWeight:"bold"}}>Family Plannings</Text>
                                        <Text style={{fontSize:15,color:"#FF0000",fontWeight:"bold"}}>Emergency pills</Text>
                                    </View>
                                    <View style={{marginVertical:5,marginRight:15}}>
                                        <HealthButton onPress={this.shopNow} />
                                    </View>
                                </View>
                            </View>
                        </Bigdiv> */}
                        {/* <Wallet /> */}
                        <View style={{borderRadius:10,marginLeft:8,marginRight:8}}>
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
                                <TouchableOpacity style={{justifyContent:"center",marginLeft:8}} onPress={this.topWallet}>
                                    <View>
                                        <AntDesign name="pluscircleo" size={40} color="black" style={{alignItems:"center"}} />
                                        <Text>Topup</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={{justifyContent:"center"}}>
                                    <View>
                                        <Entypo name="share" size={40} color="black"  style={{alignItems:"center"}}/>
                                        <Text>Share money</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={{justifyContent:"center"}}>
                                    <View>
                                        <MaterialIcons name="loop" size={40} color="black" style={{alignItems:"center"}} />
                                        <Text>Transactions</Text>
                                    </View>
                                </TouchableOpacity>
                                {/* <TouchableHighlight style={{justifyContent:"center",marginRight:8}}>
                                    <View>
                                        <MaterialIcons name="more-horiz" size={30} color="black" style={{alignItems:"center"}}  />
                                        <Text>More</Text>
                                    </View>
                                </TouchableHighlight> */}
                            </View>
                        </View>
                        <Heading text="What do you Need?" />
                        <View style={{display:'flex',flexDirection:'row',flexWrap:"wrap",flex:1,margin:8}}>
                            <Card 
                                text="Book Nurse"
                                customIcon={
                                    <MaterialCommunityIcons name="mother-nurse" size={70} color="black" />
                                } 
                                onPress={this.bookNurse}
                            />
                            <Card 
                                text="Talk to Doctor"
                                customIcon={
                                    <Fontisto name="doctor" size={70} color="black" />
                                } 
                                onPress={this.getDoctor}
                            />
                            <Card 
                                text="Mama kits"
                                // customIcon={
                                //     <Fontisto name="shopping-basket" size={70} color="black" />
                                // } 
                                customIcon = {
                                    <Image resizeMode="contain" style={{width:85,height:85}}
                                        source={require("../../assets/mamakit.png")} 
                                    />
                                }
                                onPress={this.shopNow}

                            />
                            <Card 
                                text="Mobile Ultrascan"
                                customIcon={
                                    <Image resizeMode="contain" 
                                        style={{width:70,height:70}}
                                        source={require("../../assets/ultrasound.png")} 
                                    />
                                } 
                                onPress={this.ultraScan}
                            
                            />
                            {/* <Card 
                                text="Parents Forum"
                                customIcon={
                                    <Octicons name="comment-discussion" size={70} color="black" />
                                } 
                            
                            />
                            <Card 
                                text="Health Blog"
                                customIcon={
                                    <FontAwesome name="newspaper-o" size={70} color="black" />
                                } 
                            
                            /> */}
                        </View>
                    </View>

                </ScrollView>
            </Container>
        )
    }
}
// const mapStateToProps =(state) => {
//     const addedItems = state.cartReducer.addedItems
//     return{
//         addedItems,
//     }
// }
// export default connect(mapStateToProps,null)(Home);
export default Home
