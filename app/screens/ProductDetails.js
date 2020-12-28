import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet,View,Text,ScrollView,Image,TouchableOpacity} from 'react-native';
import Separator_descr from  '../components/Wallet/Separator';
import Description from '../components/Description/Description';
import Increment from '../components/CartButton/Increment_decrement'
import AddCart from '../components/CartButton/AddCart';
import {items} from '../data/items';
import {connect} from 'react-redux';
import {addToCart,addQuantity,subtractQuantity} from '../actions/cartItems';


// const productid = {JSON.stringify(navigation.getParam('itemDescr','description'))}
class  ProductDetail extends Component{
    static propTypes = {
        dispatch:PropTypes.func,
    }
    render(){
        const { navigation } = this.props;
        return(
            <ScrollView>
                <Image resizeMode="contain" style={{width:400,height:250, resizeMode:"cover"}} 
                    source={JSON.stringify(navigation.getParam('itemImg','imgnotfound'))} 
                />
                <View style={{marginTop:20,backgroundColor: "#000000",width: 500,height: StyleSheet.hairlineWidth,
                }} />
                <Text style={{fontSize:22,color:"green",fontWeight:"bold"}}>
                    {JSON.stringify(navigation.getParam('itemName','productname'))}
                </Text>
                <Text style={{fontSize:20,color:"black",fontWeight:"bold"}}>
                    UGX {JSON.stringify(navigation.getParam('itemPrice','productprice'))}
                </Text>
                {/* <Separator_descr /> */}
                    <Description  text={JSON.stringify(navigation.getParam('itemDescr','description'))} />
                    {/* <Separator_descr /> */}
                <View style={{flexDirection:"row",marginTop:20}}>
                    <Increment 
                        quantity={JSON.stringify(navigation.getParam('itemQuantity','0'))}
                        increment={this.props.dispatch(addQuantity(JSON.stringify(navigation.getParam('itemId'))))}
                        decrement={this.props.dispatch(subtractQuantity(JSON.stringify(navigation.getParam('itemId'))))}
                    />
                    <AddCart onPress={this.props.dispatch(addToCart(JSON.stringify(navigation.getParam('itemId'))))} />
                </View>
            </ScrollView>
    
        )
        

    }
}
const mapStateToProps = (state) => {
    const items = state.cartReducer.items
    return {
        items
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//        addToCart:(id) => {dispatch(addToCart(id))}
//     }
// }
export default connect(mapStateToProps)(ProductDetail);