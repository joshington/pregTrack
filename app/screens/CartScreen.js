import React, {useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet,View,Text,FlatList,StatusBar,ScrollView,Image,TouchableOpacity,ActivityIndicator} from 'react-native';
import {useDispatch,useSelector} from 'react-redux';
import Increment from '../components/CartButton/Increment_decrement'


import  {DELETE_ITEM,SUB_QUANTITY,ADD_QUANTITY} from '../actions/cartItems';
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

    //since we have to dispatch some cart actions
    const dispatch = useDispatch();
    useEffect(() => {
        setData(cartData);
    },[])

    const ListItem = ({name,image,quantity,increase,decrease,amount,onPress}) => {
        // const {name,id,quantity} = getProps;//not sure yet about this,though its about destructuring
        return (
            <View>
                <View style={{flexDirection:"row",justifyContent:"space-around"}}>
                    <View>
                        <Text>{name}</Text>
                        <Image 
                            resizeMode="contain" 
                            style={{width:100,height:100}} 
                            source={{uri:image}} 
                        />
                    </View>
                    <Increment 
                        quantity={quantity} //SO
                        increment={increase}
                        decrement={decrease}
                    />
                    <Text>{amount}</Text>
                    <TouchableOpacity
                        onPress={onPress}
                    >
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
                                image={item.image}
                                quantity={item.quantity}
                                amount={item.amount}
                                increase={() => dispatch({type:ADD_QUANTITY,id:item.id})}
                                decrease={() => dispatch({type:SUB_QUANTITY,id:item.id})}
                                onPress={() => dispatch({type:DELETE_ITEM,id:item.id}) }
                            />
                        )}
                    /> : 
                    <View>
                        <Text>No Items fond in cart</Text>
                    </View>
            }
            <TouchableOpacity style={{alignItems:"center",alignSelf:"center",
                marginTop:25,backgroundColor:"#B0E0E6"
            }}>
                <Text style={{textAlign:"center",fontSize:18,fontWeight:"bold",color:"#fff"}}>Check Out</Text>
            </TouchableOpacity>
        </View>
    )
}
export default CartScreen;