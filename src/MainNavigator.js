import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './Screens/Splash';
import Landing from './Screens/Landing';
import Login from './Screens/Login';
import ForgetPassword from './Screens/ForgetPassword';
import Signup from './Screens/Signup';
import Invoices from './Screens/Invoices';


const Stack = createNativeStackNavigator();

function MainNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} options={{
          title: '',
          headerStyle: {
            backgroundColor: '#FAFBFD',
          },
          headerTintColor: '#003314',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
            <Stack.Screen name="Landing" component={Landing} options={{
          title: '',
          headerStyle: {
            backgroundColor: '#FAFBFD',
          },
          headerTintColor: '#003314',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
            <Stack.Screen name="Login" component={Login} options={{
          title: '',
          headerStyle: {
            backgroundColor: '#FAFBFD',
          },
          headerTintColor: '#003314',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
            <Stack.Screen name="ForgetPassword" component={ForgetPassword} options={{
          title: '',
          headerStyle: {
            backgroundColor: '#FAFBFD',
          },
          headerTintColor: '#003314',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
            <Stack.Screen name="Signup" component={Signup} options={{
          title: '',
          headerStyle: {
            backgroundColor: '#FAFBFD',
          },
          headerTintColor: '#003314',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
            <Stack.Screen name="Invoices" component={Invoices} options={{
          title: '',
          headerStyle: {
            backgroundColor: '#FAFBFD',
          },
          headerTintColor: '#003314',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        </Stack.Navigator>
    );
}

export default MainNavigator;