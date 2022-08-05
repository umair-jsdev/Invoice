import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from "react-native-vector-icons/Ionicons"

import CustomDrawer from './Screens/CustomDrawer';
import Main from './Screens/Main';
import UserAccount from './Screens/UserAccount';
import Company from './Screens/Company';
import Logo from './Screens/Logo';
import CompanyInformation from './Screens/CompanyInformation';
import Signature from './Screens/Signature';
import PaymentInstruction from './Screens/PaymentInstruction';
import CustomerPayment from './Screens/CustomerPayment';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
        <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />} screenOptions={{
            // marginLeft: -30,
            drawerActiveBackgroundColor: "#F1F6F9",
            drawrrActiveTintColor: "#0000",
            fontFamily: "Roboto-Medium",
            fontSize: 15,
            headerShown: false,
        }}>
            <Drawer.Screen name="Main" component={Main} />
            <Drawer.Screen name="UserAccount" component={UserAccount} />
            <Drawer.Screen name="Company" component={Company} />
            <Drawer.Screen name="Logo" component={Logo} />
            <Drawer.Screen name="CompanyInformation" component={CompanyInformation} />
            <Drawer.Screen name="Signature" component={Signature} />
            <Drawer.Screen name="PaymentInstruction" component={PaymentInstruction} />
            <Drawer.Screen name="CustomerPayment" component={CustomerPayment} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;