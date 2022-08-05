import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, } from '@react-navigation/drawer';
import { Card } from 'react-native-paper';

const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props} >
        <Card style={{ backgroundColor: "#F1F6F9", marginTop: 40, height: 59, borderTopLeftRadius: 19, borderTopRightRadius: 20, }}>
          <Card.Content>
            <Text style={{ fontSize: 11, color: "#000000", fontFamily: "Roboto-Medium" }}>USERNAME</Text>
            <Text style={{ fontSize: 14, color: "#000000", fontFamily: "Roboto-Medium" }}>JohnKhan393@gmail.com</Text>
          </Card.Content>
        </Card>
        <View style={{ backgroundColor: "#FFFF", marginTop: 10 }}>
          <DrawerItemList  {...props} />
        </View>
      </DrawerContentScrollView>
    </View>
  )
}

export default CustomDrawer;

const styles = StyleSheet.create({})