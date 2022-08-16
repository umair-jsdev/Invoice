import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Landing from './Screens/Landing';
import Login from './Screens/Login';
import ForgetPassword from './Screens/ForgetPassword';
import Signup from './Screens/Signup';
import Invoice from './Screens/Invoice';
import Setting from './Screens/Setting';

const Stack = createNativeStackNavigator();

function MainNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Landing" component={Landing} options={{
        title: '',
        headerStyle: {
          backgroundColor: '#FAFBFD',
        },
        headerTintColor: '#003314',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} />
      <Stack.Screen name="Login" component={Login} options={{
        title: '',
        headerStyle: {
          backgroundColor: '#FAFBFD',
        },
        headerTintColor: '#003314',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} options={{
        title: '',
        headerStyle: {
          backgroundColor: '#FAFBFD',
        },
        headerTintColor: '#003314',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} />
      <Stack.Screen name="Signup" component={Signup} options={{
        title: '',
        headerStyle: {
          backgroundColor: '#FAFBFD',
        },
        headerTintColor: '#003314',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} />
      <Stack.Screen name="Invoice" component={Invoice} options={{
        title: '',
        headerStyle: {
          backgroundColor: '#FAFBFD',
        },
        headerTintColor: '#003314',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} />
      <Stack.Screen name="Setting" component={Setting} options={{
        title: ' Setting',
        headerStyle: {
          backgroundColor: '#FAFBFD',
        },
        headerTintColor: '#003314',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} />
    </Stack.Navigator>
  );
}

export default MainNavigator;