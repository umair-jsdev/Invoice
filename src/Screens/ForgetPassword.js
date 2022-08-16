import React from 'react';
import { StyleSheet, Image, View, ScrollView, TouchableWithoutFeedback, Text } from 'react-native';
import Caption from '../Components/Caption';
import Heading from '../Components/Heading';
import Input from '../Components/Input';

function ForgetPassword({ navigation }) {
  return (
    <View style={styles.contanier}>
      <Image
        style={styles.logo}
        source={require('../Images/img-03.png')}
      />
      <Heading title="Forget Password" />
      <View style={styles.head}>
        <Caption title="Please enter your email here we will send you code to reset your password." />
      </View>
      <Input
        label="Your e-mail address"
        placeholder="Your e-mail address"
        autoCapitalize="none" />
      <TouchableWithoutFeedback
      // onPress={() => navigation.navigate('ForgetPassword')}
      >
        <View style={styles.loginbutton}>
          <Text style={styles.logintext}>
            Send Email
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View >
  )
}

export default ForgetPassword;

const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FAFBFD",
  },
  logo: {
    width: 260,
    height: 171,
    marginBottom: 50,
    marginTop: 30,
  },
  button: {
    fontWeight: "bold",
    marginRight: 215,
    marginTop: 20,
  },
  head: {
    margin: 20,
  },
  text: {
    color: '#AAAAAA',
    fontSize: 16,
    fontWeight: "bold",
  },
  loginbutton: {
    width: "90%",
    backgroundColor: "#0074DD",
    marginTop: 30,
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  logintext: {
    color: '#fff',
    fontSize: 18,
    fontWeight: "bold",
    margin: 13,
  },
  direction: {
    flexDirection: "row",
  }
})