import React, { Component } from "react";
import PropTypes from 'prop-types';
import {StatusBar,StyleSheet,View,ScrollView,Image,Dimensions,FlatList,Text} from 'react-native';
import  Container  from '../components/Container/Container';
import Header from '../components/Header/Header';
import Heading from '../components/Heading/Heading';
import Bigdiv from '../components/Bigdiv/Bigdiv';
import MamaCard from '../components/ListCard/MamaCard';
import VerticalSeparator from '../components/Wallet/VerticalSeparator';
import {connect} from 'react-redux';



class  MamaKitShop extends Component{
    // const [selectedId, setSelectedId] = useState(null);
    descriptionPress = (item) => {
        const { navigation } = this.props;
        navigation.navigate('ProductDetail',{
            itemId:item.id,
            itemName:item.name,
            itemImg:item.img,
            itemPrice:item.price,
            itemDescr:item.description,
            itemQuantity:item.quantity,
        });
    };

    //now using this new code
    render(){
        console.log(this.props.items);
        let itemList = this.props.items.map(item => {
            return(
                <View key={item.id}>
                    <MamaCard 
                        name={item.title}
                        customIcon={
                            <Image resizeMode="contain" style={{width:200,height:80,margin:15}} 
                                source={item.img} 
                            />
                        }
                        price={item.price}
                        // onPress={this.descriptionPress(item)}
                    />  
                </View>
            )
        })
        return (
            <Container>
                <StatusBar translucent={false} barStyle="light-content"/> 
                <View style={{display:'flex',flexDirection:'row',flexWrap:"wrap",flex:1,margin:8,}}>
                    {/* <FlatList 
                        data={this.props.items}
                        renderItem={({item}) => (
                            <MamaCard 
                                name={item.name}
                                customIcon={
                                    <Image resizeMode="contain" style={{width:200,height:80,margin:15}} 
                                        source={item.img} 
                                    />
                                }       
                                price={item.price}
                                onPress={this.descriptionPress(item)}
                            />
                        )}
                        keyExtractor={(item) => item.id}
                        numColumns={2}
                    /> */}
                    {itemList}
                    <Text>Mama kits here</Text>
                </View>  
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    const items = state.products.productList
    return {
        items
    }
}
export default connect(mapStateToProps,null)(MamaKitShop);