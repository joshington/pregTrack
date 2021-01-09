import React, {useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet,View,Text,FlatList,ScrollView,Image,TouchableOpacity,ActivityIndicator} from 'react-native';
import {useDispatch,useSelector} from 'react-redux';



const ListItem = () => {
    return (
        <View>

        </View>
    )
}
const CartScreen = () => {

    const [data, setData] = useState([]);
    const cartData = useSelector(state => {
        return state.cartReducer.Cart
    })
    //need to get he product name,image and quantity
    const count = useSelector(state => {
        return state.cartReducer.itemsCount
    })
    useEffect(() => {
        setData(cartData);
    })
    return(
        <View>
            <StatusBar translucent={false} barStyle="light-content"/> 
            {
                count > 0 ? 
                    <FlatList /> : 
                    <View>
                        <Text>No Items fond in cart</Text>
                    </View>
            }
        </View>
    )
}
export default CartScreen;