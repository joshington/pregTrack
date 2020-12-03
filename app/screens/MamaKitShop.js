import React, { Component } from "react";
import PropTypes from 'prop-types';
import {StatusBar,StyleSheet,View,ScrollView,Image,Dimensions} from 'react-native';
import  Container  from '../components/Container/Container';
import Header from '../components/Header/Header';
import Heading from '../components/Heading/Heading';
import Bigdiv from '../components/Bigdiv/Bigdiv';
import MamaCard from '../components/ListCard/MamaCard';
import VerticalSeparator from '../components/Wallet/VerticalSeparator';
import {connect} from 'react-redux';



class  MamaKitShop  extends Component {
    static propTypes = {
        navigation:PropTypes.object,
    };
    descriptionPress = () => {
        const { navigation } = this.props;
        navigation.navigate('ProductDetail');
    };
    handleAdd = (id)=> {
        this.props.addToCart(id);
    }
    render(){
        let itemList = this.props.items.map(item => {
            return(
                <View key={item.id}>
                    <MamaCard 
                        name={item.name}
                        customIcon={
                            <Image resizeMode="contain" style={{width:200,height:80,margin:15}} 
                                source={item.img} 
                            />
                            
                        }
                        price={item.price}
                        onPress={this.descriptionPress}
                    />  
                </View>
            )
        })
        return (
            <Container>
                <StatusBar translucent={false} barStyle="light-content"/> 
                <View style={{display:'flex',flexDirection:'row',flexWrap:"wrap",flex:1,margin:8,}}>
                  {itemList}
                </View>  
            </Container>
        )
    }
}
const mapStateToProps = (state) => {
    const items = state.cartReducer.items
    return {
        items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart:(id) => {dispatch(addToCart(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MamaKitShop);