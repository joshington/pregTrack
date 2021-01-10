import React, {useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet,View,Text,FlatList,StatusBar,ScrollView,Image,TouchableOpacity,ActivityIndicator} from 'react-native';
import {useDispatch,useSelector} from 'react-redux';
import Increment from '../components/CartButton/Increment_decrement'

import { MaterialIcons } from '@expo/vector-icons';

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

    // getProps = () => {
    //     data.map((item) => {
    //         let name = item.name;
    //         let id = item.id;
    //         let quantity = item.quantity;
    //         // image:action.payload.image,
    //         // price:action.payload.price
    //     })
    //     return (
    //         name,id,quantity
    //     )
    // }
    const ListItem = ({name,quantity,amount}) => {
        // const {name,id,quantity} = getProps;//not sure yet about this,though its about destructuring
        return (
            <View>
                <View style={{flexDirection:"row",justifyContent:"space-around"}}>
                    <Text>{name}</Text>
                    <Increment 
                        quantity={quantity} //SO
                    />
                    <Text>{amount}</Text>
                    <TouchableOpacity>
                        <MaterialIcons name="delete" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return(
        <View>
            <StatusBar translucent={false} barStyle="light-content"/> 
            {
                count > 0 ? 
                    <FlatList 
                        data={data}
                        keyExtractor={({ id }, index) => id.toString()}
                        renderItem={({ item }) => (
                            <ListItem 
                                name={item.name}
                                quantity={item.quantity}
                                amount={item.amount}
                            />
                        )}
                    /> : 
                    <View>
                        <Text>No Items fond in cart</Text>
                    </View>
            }
        </View>
    )
}
export default CartScreen;