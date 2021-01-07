import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet,View,Text,ScrollView,Image,TouchableOpacity} from 'react-native';
import Separator_descr from  '../components/Wallet/Separator';
import Description from '../components/Description/Description';
import Increment from '../components/CartButton/Increment_decrement'
import AddCart from '../components/CartButton/AddCart';
import {items} from '../data/items';
import {connect} from 'react-redux';
import {useSelector,useDispatch} from 'react-redux';
import { INCREASE_QUANTITY } from '../actions/products';


// const productid = {JSON.stringify(navigation.getParam('itemDescr','description'))}
const  ProductDetails = ({route, navigation}) => {
    const {itemId,itemTitle,itemImg,itemPrice,itemDescription,itemQuantity} = route.params;

    const [quantity,setQuantity] = useState(itemQuantity);//handle increasing and decreasing quantity.
    const dispatch = useDispatch();
        return(
            <ScrollView>
                <Image resizeMode="contain" style={{width:400,height:250, resizeMode:"cover"}} 
                    source={{uri:itemImg}} 
                />
                <View style={{marginTop:20,backgroundColor: "#000000",width: 500,height: StyleSheet.hairlineWidth,
                }} />
                <Text style={{fontSize:22,color:"green",fontWeight:"bold"}}>
                    {itemTitle}
                </Text>
                <Text style={{fontSize:20,color:"black",fontWeight:"bold"}}>
                    UGX {itemPrice}
                </Text>
                {/* <Separator_descr /> */}
                    <Description  text={itemDescription} />
                    {/* <Separator_descr /> */}
                <View style={{flexDirection:"row",marginTop:20}}>
                    <Increment 
                        quantity={itemQuantity}
                        increment={() => setQuantity(itemQuantity+1)}
                        decrement={() => setQuantity(itemQuantity-1)}
                    />
                    <AddCart />
                </View>
            </ScrollView>
    
        )
}
// const mapStateToProps = (state) => {
//     const items = state.cartReducer.items
//     return {
//         items
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//        addToCart:(id) => {dispatch(addToCart(id))}
//     }
// }
export default ProductDetails;