import React from 'react';
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default function Logo() {
  // hendelChoosePhoto = () => {
  //   const options = {};
  //   ImagePicker.launchImageLibrary(options, response => {
  //     console.log("Response", response)
  //   })
  // }

  return (
    <View style={styles.contanier}>
      <TouchableWithoutFeedback
        onPress={this.hendelChoosePhoto}
      >
        <View style={styles.loginbutton}>
          <Text style={styles.logintext}>
            Upload Your Logo
          </Text>
        </View>
      </TouchableWithoutFeedback>
      <View style={{ flexDirection: "row", marginTop: 30 }}>
        <Text style={{ fontSize: 16, color: "#000000", marginTop: 30, fontWeight: "bold" }}>TrendyTech Pro</Text>
        <Image
          style={styles.logo}
          source={require('../Images/img-07.png')}
        />
      </View>
      <Image
        style={styles.logo1}
        source={require('../Images/img-08.png')}
      />
    </View>
  )
}

const styles = StyleSheet.create({

  contanier: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FAFBFD",
  },
  loginbutton: {
    width: "85%",
    backgroundColor: "#0074DD",
    justifyContent: "center",
    alignItems: "center",
  },
  logintext: {
    color: '#fff',
    fontSize: 18,
    fontWeight: "bold",
    margin: 13,
  },
  logo: {
    width: 105,
    height: 76,
    marginLeft: 110,
    marginTop: 20,
  },
  logo1: {
    width: 329,
    height: 229,
    marginTop: 80,
  },
})