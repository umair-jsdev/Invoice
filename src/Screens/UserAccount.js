import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Card, Divider } from 'react-native-paper';
import Input from '../Components/Input';



function UserAccount() {
  return (
    <>
      <View style={styles.contanier}>
        {/* <View style={styles.head}>
          <CardHeading title="User Account" />
        </View> */}
        <Divider style={{ borderColor: "#969696", marginTop: 20, borderWidth: 0.9, width: "100%" }} />
        <View style={styles.padding}>
          <Text style={{ fontSize: 11, color: "#000000", fontFamily: "Roboto-Medium", marginBottom: 5 }}>USERNAME</Text>
          <Text style={{ fontSize: 14, color: "#000000", fontFamily: "Roboto-Medium", marginBottom: 50, fontWeight: "bold" }}>JohnKhan393@gmail.com</Text>
        </View>
        <Input
          label="John Riseek"
          placeholder="John Riseek"
          autoCapitalize="none"
          editable={false} />
        <Input
          label="Ammi Virk"
          placeholder="Ammi Virk"
          autoCapitalize="none"
          editable={false} />
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('')}
        >
          <View style={styles.button}>
            <Text style={styles.text}>
              Reset your password
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </>
  )
}
export default UserAccount;

const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FAFBFD",
  },
  head: {
    marginTop: 20,
  },
  padding: {
    alignItems: "flex-start",
    marginRight: 180,
    marginTop: 20,
  },
  button: {
    fontWeight: "bold",
    marginRight: 190,
    marginTop: 20,
  },
  text: {
    color: '#0074DD',
    fontSize: 16,
  },
})