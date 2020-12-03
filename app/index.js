import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import { Provider} from 'react-redux';
import store from './config/store';
import Navigator from "./config/routes";
import Home from './screens/Home';
import BookNurse from './screens/BookNurse';
import Packages from './screens/Packages';
import MamaKitShop from './screens/MamaKitShop'
import ProductDetail from './screens/ProductDetails';
import UltraScan from './screens/UltraScan';
import ContactDoctor from './screens/ContactDoctor';


EStyleSheet.build({
    $primaryGreen: "#20B2AA",
    $primaryBlue:"#6495ed",
});
export default () => (
    <Provider store={store}> 
        <Navigator />
    </Provider>
)