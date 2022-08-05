import React from 'react';
import { StyleSheet, Image, View, Text, TouchableWithoutFeedback } from 'react-native';
import Heading from '../Components/Heading';


function Splash({ navigation }) {
  return (
    <View style={styles.contanier}>
      <Image
        style={styles.logo}
        source={require('../Images/img-01.png')}
      />
      <Heading title="Get Free Invoice..." />
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('Landing')}
      >
        <View style={styles.button}>
          <Text style={styles.text}>
           Next
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

export default Splash;

const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FAFBFD"
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 50,
  },
  button: {
    width: "90%",
    backgroundColor: "#0074DD",
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: "bold",
    margin: 13,
  },
})