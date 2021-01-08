import React, {useState,useEffect} from "react";
import PropTypes from 'prop-types';
import {StatusBar,StyleSheet,View,ScrollView,Image,Dimensions,FlatList,Text,ActivityIndicator} from 'react-native';
import  Container  from '../components/Container/Container';
import Header from '../components/Header/Header';
import Heading from '../components/Heading/Heading';
import Bigdiv from '../components/Bigdiv/Bigdiv';
import MamaCard from '../components/ListCard/MamaCard';
import VerticalSeparator from '../components/Wallet/VerticalSeparator';
import {connect} from 'react-redux';
import {getProductList, GET_PRODUCTS_LIST} from '../actions/products';
import {useNavigation} from '@react-navigation/native';
import {useSelector,useDispatch} from 'react-redux';

const  MamaKitShop = () =>  {
    const [isFetching, setFetching] = useState(true);
    const [data, setData] = useState([]);
    

    const navigation = useNavigation()
    //ican as well use global dispatch
    const dispatch = useDispatch()
    const productData = useSelector(state => {
        return state.products.productList
    })
    useEffect(() => {
        setFetching(true);
        fetch('https://hero-pregbackend.herokuapp.com/shop/')
        .then((response) => products = response.json())
        .then((products) => setData(products))
        .catch((error) => console.error(error))
        .finally(() => setFetching(false));
    }, []);
  
    //   fetch('https://hero-pregbackend.herokuapp.com/shop/')
    //     .then((response) => products = response.json())
    //     .then((products) => setData(products))
    //     .catch((error) => console.error(error))
    //     .finally(() => setLoading(false));
        return (
            <>
                <StatusBar translucent={false} barStyle="light-content"/> 
                    <View>
                        {isFetching ?  <ActivityIndicator size="large" /> : (
                            // <View style={{flexDirection:'row',flexWrap:"wrap",margin:8,display:"flex",flex: 1,}}>
                                    <FlatList
                                        data={data}
                                        keyExtractor={({ id }, index) => id.toString()}
                                        renderItem={({ item }) => (
                                            <MamaCard 
                                                name={item.title}
                                                customIcon={
                                                    <Image resizeMode="contain" style={{width:100,height:80,margin:15}} 
                                                        source={{uri:item.img}} 
                                                    />
                                                }       
                                                price={item.price}
                                                onPress={() => {
                                                    navigation.navigate("ProductDetails",{
                                                        itemId:item.id,
                                                        itemTitle:item.title,
                                                        itemImg:item.img,
                                                        itemPrice:item.price,
                                                        itemDescription:item.description,
                                                        itemQuantity:item.quantity
                                                        
                                                    })
                                                }}
                                            />
                                        )}
                                        contentContainerStyle={{flexDirection:"row",flexWrap:"wrap"}}
                                    />
                                // </View>
                        )}
                    </View>
            </>
        )
}

// const mapStateToProps = (state) => {
//     const items = state.products.productList || {}
//     return {
//         items,
//         isFetching:state.products.isFetching,
//     }
// }
export default MamaKitShop;