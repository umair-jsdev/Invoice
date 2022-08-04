import React from 'react';
import { StyleSheet, Image, View, Text, TouchableWithoutFeedback } from 'react-native';
import Caption from '../Components/Caption';
import Heading from '../Components/Heading';

function Landing({ navigation }) {
  return (
    <View style={styles.contanier}>
      <Image
        style={styles.logo}
        source={require('../Images/img-01.png')}
      />
      <Heading title="WELCOME" />
      <View style={styles.head}>
        <Caption title="It is a long established fact that a reader will be distracted by the readable content of a page." />
      </View>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('Login')}
      >
        <View style={styles.button}>
          <Text style={styles.text}>
            LogIn
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

export default Landing;

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
    marginBottom: 80,
  },
  button: {
    width: "90%",
    backgroundColor: "#0074DD",
    marginTop: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: "bold",
    margin: 13,
  },
  head: {
    margin: 20,
  },
})