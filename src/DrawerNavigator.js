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
            marginLeft: -30,
            drawerActiveBackgroundColor: "#F1F6F9",
            drawrrActiveTintColor: "#0000",
            fontFamily: "Roboto-Medium",
            fontSize: 15,
        }}>
            <Drawer.Screen name="User Account" component={UserAccount} options={{
                title: 'User Account',
                headerStyle: {
                    backgroundColor: '#FBFBFB',
                },
                headerTintColor: '#003314',
                alignItems: "center",
                headerTitleStyle: {
                    fontSize: 20,
                    color: "#001314",
                   
                },
            }} />
            <Drawer.Screen name="Main" component={Main} />
            <Drawer.Screen name="Company" component={Company} />
            <Drawer.Screen name="Logo" component={Logo} />
            <Drawer.Screen name="Company Information" component={CompanyInformation} />
            <Drawer.Screen name="Signature" component={Signature} />
            <Drawer.Screen name="Payment Instruction" component={PaymentInstruction} />
            <Drawer.Screen name="Customer Payment" component={CustomerPayment} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;