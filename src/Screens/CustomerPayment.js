import React, { useState } from "react";
import { StyleSheet, Text, ScrollView, View, Switch, Image } from 'react-native';
import { Card, Divider } from 'react-native-paper';

const CustomerPayment = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.contanier}>
      <Divider />
      <View style={styles.padding}>
        <View style={styles.switch}>
          <Text style={{
            fontSize: 14,
            color: "#757575",
            fontFamily: "Roboto-Medium",
            fontWeight: "bold"
          }}
          >Accept Credit Card Payment
          </Text>
          <Switch
            trackColor={{ false: "#767577", true: "#17A100" }}
            thumbColor={isEnabled ? "#ffff" : "#f4f3f4"}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
      <Divider style={{ borderColor: "#969696", marginTop: 20, borderWidth: 0.5, width: "100%" }} />
      <Card style={{ backgroundColor: "#F1F6F9", height: 55, }}>
        <Card.Content>
          <Text style={{
            fontSize: 14,
            color: "#5C5C5C",
            fontFamily: "Roboto-Medium",
            fontWeight: "bold",
            marginLeft: 5
          }}
          >Payment Method
          </Text>
        </Card.Content>
        <Divider style={{ borderColor: "#969696", marginTop: 20, borderWidth: 0.5, width: "100%" }} />
      </Card>
      <View style={styles.padding}>
        <View style={styles.switch}>
          <Text style={{
            fontSize: 14,
            color: "#757575",
            fontFamily: "Roboto-Medium",
            fontWeight: "bold"
          }}
          >Accept Creadit Card
          </Text>
          <Text style={{
            fontSize: 14,
            color: "#757575",
            fontFamily: "Roboto-Medium",
            marginBottom: 5
          }}>
            See available countries and fees
          </Text>
          <Switch
            trackColor={{ false: "#767577", true: "#17A100" }}
            thumbColor={isEnabled ? "#ffff" : "#f4f3f4"}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
      <Divider style={{ borderColor: "#969696", marginTop: 20, borderWidth: 0.5, width: "100%" }} />
      <View style={styles.padding}>
        <View style={styles.switch}>
          <Text style={{
            fontSize: 14,
            color: "#757575",
            fontFamily: "Roboto-Medium",
            fontWeight: "bold"
          }}
          >Accept PayPal
          </Text>
          <Switch
            trackColor={{ false: "#767577", true: "#17A100" }}
            thumbColor={isEnabled ? "#ffff" : "#f4f3f4"}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
      <Divider style={{ borderColor: "#969696", marginTop: 20, borderWidth: 0.5, width: "100%" }} />
      <Card style={{ backgroundColor: "#F1F6F9", height: 55, }}>
        <Card.Content>
          <Text style={{
            fontSize: 14,
            color: "#5C5C5C",
            fontFamily: "Roboto-Medium",
            fontWeight: "bold",
            marginLeft: 5
          }}
          >Surcharge
          </Text>
        </Card.Content>
        <Divider style={{ borderColor: "#969696", marginTop: 20, borderWidth: 0.5, width: "100%" }} />
      </Card>
      <View style={styles.padding}>
        <View style={styles.switch}>
          <Text style={{
            fontSize: 14,
            color: "#757575",
            fontFamily: "Roboto-Medium",
            fontWeight: "bold"
          }}
          >Imposing surcharge to your
          </Text>
          <Text style={{
            fontSize: 14,
            color: "#757575",
            fontFamily: "Roboto-Medium",
            marginBottom: 5
          }}>
            customers available
          </Text>
          <Switch
            trackColor={{ false: "#767577", true: "#17A100" }}
            thumbColor={isEnabled ? "#ffff" : "#f4f3f4"}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
      <Image
        style={styles.icon}
        source={require('../Images/icon-02.png')}
      />
    </View>
  )
}
export default CustomerPayment;

const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    backgroundColor: "#FAFBFD",
  },
  padding: {
    margin: 20,

  },
  icon: {
    width: 145,
    height: 40,
    marginBottom: 20,
    marginTop: 20,
    marginLeft: 120
  },
  // switch: {
  //   flex: 1 ,
  //   flexDirection: "column"
  // },
})