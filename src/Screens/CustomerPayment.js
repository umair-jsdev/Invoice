import React, { useState } from "react";
import { StyleSheet, Text, View, Switch, Image } from 'react-native';
import { Card, Divider } from 'react-native-paper';

const CustomerPayment = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.contanier}>
      <Divider style={{ borderColor: "#969696", borderWidth: 0.7, width: "100%" }} />
      <View style={{ flexDirection: "row" }}>
        <Text style={{
          fontSize: 14,
          color: "#5C5C5C",
          fontWeight: "bold",
          margin: 15

        }}>
          Accept Credit Card Payment
        </Text>
        <Text style={{
          margin: 15,
          marginLeft: 120
        }}>
          <Switch
            trackColor={{ false: "#767577", true: "#17A100" }}
            thumbColor={isEnabled ? "#ffff" : "#f4f3f4"}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </Text>
      </View>
      <Divider style={{ borderColor: "#969696", borderWidth: 0.5, width: "100%" }} />
      <Card style={{ backgroundColor: "#F1F6F9", height: 55, }}>
        <Card.Content>
          <Text style={{
            fontSize: 14,
            color: "#5C5C5C",
            fontFamily: "Roboto-Medium",
            fontWeight: "bold",
          }}
          >Payment Method
          </Text>
        </Card.Content>
      </Card>
      <Divider style={{ borderColor: "#969696", borderWidth: 0.5, width: "100%" }} />
      <View style={{ flexDirection: "row" }}>
        <Text style={{
          fontSize: 14,
          color: "#5C5C5C",
          fontWeight: "bold",
          margin: 15

        }}>
          Accept Creadit Card
        </Text>
        <Text style={{
          margin: 15,
          marginLeft: 175
        }}>
          <Switch
            trackColor={{ false: "#767577", true: "#17A100" }}
            thumbColor={isEnabled ? "#ffff" : "#f4f3f4"}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </Text>
      </View>
      <Divider style={{ borderColor: "#969696", borderWidth: 0.5, width: "100%" }} />
      <View style={{ flexDirection: "row" }}>
        <Text style={{
          fontSize: 14,
          color: "#5C5C5C",
          fontWeight: "bold",
          margin: 15

        }}>
          Accept Paypal
        </Text>
        <Text style={{
          margin: 15,
          marginLeft: 210
        }}>
          <Switch
            trackColor={{ false: "#767577", true: "#17A100" }}
            thumbColor={isEnabled ? "#ffff" : "#f4f3f4"}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </Text>
      </View>
      <Divider style={{ borderColor: "#969696", borderWidth: 0.5, width: "100%" }} />
      <Card style={{ backgroundColor: "#F1F6F9", height: 55, }}>
        <Card.Content>
          <Text style={{
            fontSize: 14,
            color: "#5C5C5C",
            fontFamily: "Roboto-Medium",
            fontWeight: "bold",
          }}
          >Surcharge
          </Text>
        </Card.Content>
        <Divider style={{ borderColor: "#969696", marginTop: 20, borderWidth: 0.5, width: "100%" }} />
      </Card>
      <View style={{ flexDirection: "row" }}>
        <Text style={{
          fontSize: 14,
          color: "#5C5C5C",
          fontWeight: "bold",
          marginLeft: 15,
          marginTop: 15,
        }}>
          Imposing surcharge to your customers available
        </Text>
        <Text style={{
          margin: 10
        }}>
          <Switch
            trackColor={{ false: "#767577", true: "#17A100" }}
            thumbColor={isEnabled ? "#ffff" : "#f4f3f4"}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </Text>
      </View>
      <Divider style={{ borderColor: "#969696", marginTop: 10, borderWidth: 0.5, width: "100%" }} />
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
    marginTop: 40,
    marginLeft: 120
  },
})