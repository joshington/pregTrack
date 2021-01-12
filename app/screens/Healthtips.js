import React, {useState,useEffect} from "react";
import PropTypes from 'prop-types';
import {StatusBar,StyleSheet,View,ScrollView,Image,Dimensions,FlatList,Text,ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector,useDispatch} from 'react-redux';

const Tip = ({title,img,description,posted}) => {
    return (
        <View>
            <Text>{title}</Text>
            <Image resizeMode="contain" style={{width:100,height:80,margin:15}} source={{uri:img}} />
            <Text>{description}</Text>
            <Text style={{fontSize:10}}>Posted: {posted}</Text>
        </View>
    )
}


const  Healthtips = ({navigation}) =>  {
    const [isFetching, setFetching] = useState(true);
    const [healthData, setData] = useState([]);
    
    // const dispatch = useDispatch()
    // const productData = useSelector(state => {
    //     return state.products.productList
    // })
    useEffect(() => {
        setFetching(true);
        fetch('https://hero-pregbackend.herokuapp.com/healthtips/')//signal from abort
            .then((response) => Data = response.json())
            .then((Data) => {
                setData(Data);//we want to first check if not unmounted to set the
            })
            .catch((error) => console.error(error))
            .finally(() => setFetching(false));
    },[])
    return (
        <FlatList 
            data={healthData}
            keyExtractor={({ id }, index) => id.toString()}
            renderItem={({ item }) => (
                <Tip 
                    title={item.name}
                    img={item.img}
                    description={item.description}
                    posted={item.posted}
                />
            )}
        />
    )
}

export default Healthtips;