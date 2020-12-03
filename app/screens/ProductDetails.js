import React from 'react';
import {StyleSheet,View,Text,ScrollView,Image,TouchableOpacity} from 'react-native';
import Separator_descr from  '../components/Wallet/Separator';
import Description from '../components/Description/Description';
import Increment from '../components/CartButton/Increment_decrement'
import AddCart from '../components/CartButton/AddCart';
import {items} from '../data/items';
import {connect} from 'react-redux';


const mapStateToProps = (state) => {
    return {
        items:state.items
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart:(id) => {dispatch(addToCart(id))}
    }
}

// handlePress = (id) => {
//     props.addToCart(id)
// }
const ProductDetail = () => {
    return(
        <ScrollView>
            <Image resizeMode="contain" style={{width:400,height:250, resizeMode:"cover"}} 
                source={require("./images/mamakit.png")} 
            />
            <View style={{marginTop:20,backgroundColor: "#000000",width: 500,height: StyleSheet.hairlineWidth,
}} />
            <Text style={{fontSize:22,color:"green",fontWeight:"bold"}}>{items.name}</Text>
            <Text style={{fontSize:20,color:"black",fontWeight:"bold"}}>UGX {items.price}</Text>
            {/* <Separator_descr /> */}
                <Description  text={items.description} />
                {/* <Separator_descr /> */}
            <View style={{flexDirection:"row",marginTop:20}}>
                <Increment />
                <AddCart onPress={console.log("press")} />
            </View>
        </ScrollView>

    )
    
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductDetail);