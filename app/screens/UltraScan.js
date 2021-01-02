import React, {Component} from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {StatusBar,StyleSheet,View,Text,ScrollView,TextInput,TouchableOpacity} from 'react-native';
import Heading from '../components/Heading/Heading';
import ModalUltra from '../components/Modal/ModalUltra';
import { Entypo } from '@expo/vector-icons';
import FillIcon from '../components/FillIcon/FillIcon';
import {ultrascanOrder,change_location,change_contact} from '../actions/ultrascan';


const mapStateToProps = (state) => {
    const ultrascanOrder = state.ultrascan.ultrascanOrder;

    // const message = state.utrascan.message;

    return {
        ultrascanOrder,
    }
}

class UltraScan extends Component{
    constructor(props) {
        super(props);
        //bindng event
    }
    state = {
        location: '',
        contact: '',
    }
    onChangeText = (key,val) => {
        this.setState({ [key]: val})
    }
    static propTypes = {
        dispatch:PropTypes.func,
        location:PropTypes.string,
        contact:PropTypes.string,
    }
    // handlelocationChange = (text) => {
    //     this.props.dispatch(change_location(text));
    // }
    // handleContactChange = (text) => {
    //     this.props.dispatch(change_contact(text));
    // }

    placeOrder = (location,contact) => {
        this.props.dispatch(ultrascanOrder(location,contact))
        // this.props.dispatch(ultrascanOrder(this.state.location,this.state.contact))
    }
    render(){
        // const {location,contact} = this.props; 
        return (
            <View style={{alignItems:"center"}}>
                <StatusBar translucent={false} />
                <View style={{alignItems:"center",justifyContent: "center"}}>
                    <View style={styles.modalView}>
                        <View style={{marginBottom:5}}>
                            <Entypo name="location-pin" size={40} color="black" />
                        </View>
                        <Heading text="Where will the service be offered?" />
                        
                        <TextInput 
                            placeholder="location e.g Kla ZZana"
                            placeholderTextColor="#000000"
                            underlineColorAndroid="#000000"
                            autoFocus={true}
                            style={{width:180,marginTop:10,height:40}}
                            value={this.state.location}
                            onChangeText={val => this.onChangeText('location',val)}
                        />
                        <TextInput 
                            placeholder="Contact e.g 0706626855"
                            placeholderTextColor="#000000"
                            underlineColorAndroid="#000000"
                            keyboardType="numeric"
                            autoFocus={true}
                            value={this.state.contact}
                            onChangeText={val => this.onChangeText('contact',val)}
                            style={{width:180,marginTop:10,height:40}}
                        />
                        <Text style={{color:"red",fontWeight:"bold"}}>Note:You will be charged 20,000 after service</Text>
                        <TouchableOpacity style={{...styles.openButton,backgroundColor: "#20B2AA",}}
                            onPress={this.placeOrder(this.state.location,this.state.contact)}
                        >
                            <Text style={{...styles.textStyle, fontSize:20}}>Place Order</Text>
                        </TouchableOpacity>
                    </View>
                    {}

                </View>
            </View>
        )
    }
}
// const UltraScan = () => {
//     // const [contact, setContact] = useState('E.g 0706626855')
//     // const [location,setLocation] = useState('e.g Makerere')
//     // const [ultraOder, makeOrder] = useState(false);

//     const placeOrder = (location,contact) => {
//         props.dispatch(ultrascanOrder(location,contact));
//     }
//     return(
        
//     )
// }
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 5,
        marginBottom: 5,
    },
    modalView: {
        margin: 20,
        backgroundColor: "#B0E0E6",
        borderRadius: 20,
        padding: 30,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3.84,
        elevation: 7,
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 12,
        elevation: 3,
        marginTop:20,
        paddingHorizontal: 50,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 15,
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
    },
    circle:{
        height:20,
        width:20,
        borderRadius:10,
        borderWidth:1,
        borderColor:"#ACACAC",
        alignItems:"center", //center the checked circle
        justifyContent:"center",
        marginHorizontal:10
    },
    checkedCircle:{
        width:14,
        height:14,
        borderRadius:7,
        backgroundColor:"#131313" // You can set it default or with yours one…
    }
});


export default connect(mapStateToProps)(UltraScan);