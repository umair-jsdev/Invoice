import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from "react-native-vector-icons/Ionicons"

import CustomDrawer from './Screens/CustomDrawer';
import UserAccount from './Screens/UserAccount';
import Company from './Screens/Company';
import Logo from './Screens/Logo';
import CompanyInformation from './Screens/CompanyInformation';
import Signature from './Screens/Signature';
import PaymentInstruction from './Screens/PaymentInstruction';
import CustomerPayment from './Screens/CustomerPayment';
import Invoice from './Screens/Invoice';

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
                    backgroundColor: '#FAFBFD',
                },
                headerTintColor: '#003314',
                alignItems: "center",
                headerTitleStyle: {
                    fontSize: 20,
                    color: "#001314",

                },
            }} />
            <Drawer.Screen name="Company" component={Company} />
            <Drawer.Screen name="Logo" component={Logo} />
            <Drawer.Screen name="Company Information" component={CompanyInformation} options={{
                title: 'Company Information',
                headerStyle: {
                    backgroundColor: '#FAFBFD',
                },
                headerTintColor: '#003314',
                alignItems: "center",
                headerTitleStyle: {
                    fontSize: 20,
                    color: "#001314",

                },
            }} />
            <Drawer.Screen name="Signature" component={Signature} />
            <Drawer.Screen name="Payment Instruction" component={PaymentInstruction} />
            <Drawer.Screen name="Customer Payment" component={CustomerPayment} options={{
                title: 'Payment Option',
                headerStyle: {
                    backgroundColor: '#FAFBFD',
                },
                headerTintColor: '#003314',
                alignItems: "center",
                headerTitleStyle: {
                    fontSize: 20,
                    color: "#001314",

                },
            }} />
            <Drawer.Screen name="Invoice" component={Invoice} options={{
                title: 'Invoice',
                headerStyle: {
                    backgroundColor: '#FAFBFD',
                },
                headerTintColor: '#003314',
                alignItems: "center",
                headerTitleStyle: {
                    fontSize: 20,
                    color: "#001314",

                },
            }} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;