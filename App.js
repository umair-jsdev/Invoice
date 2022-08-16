import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './src/MainNavigator';
// import DrawerNavigator from './src/DrawerNavigator';

function App() {
  return (
    <NavigationContainer>
      <MainNavigator />
      {/* <DrawerNavigator /> */}
    </NavigationContainer>
  );
}
export default App;