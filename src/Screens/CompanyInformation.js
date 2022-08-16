import React, { useState } from 'react';
import { StyleSheet, TextInput, ScrollView, View, Text } from 'react-native';
import { Card, Divider } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';

function CompanyInformation() {
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <ScrollView>
      <View style={styles.contanier}>
        <Divider style={{ borderColor: "#969696", borderWidth: 0.9, width: "100%" }} />
        <Text style={{ fontSize: 14, color: "#000000", marginLeft: 15, margiTop: 20 }}>Company Name</Text>
        <TextInput style={styles.input}
          value="TrendyTech Pro" />
        <Divider style={{ borderColor: "#969696", borderWidth: 0.7, width: "100%" }} />
        <Text style={{ fontSize: 14, color: "#000000", marginLeft: 15 }}>Email address on the invoice</Text>
        <TextInput style={styles.input} />
        <Divider style={{ borderColor: "#969696", borderWidth: 0.7, width: "100%" }} />
        <Text style={{ fontSize: 14, color: "#000000", marginLeft: 15 }}>Phone Number</Text>
        <TextInput style={styles.input} />
        <Divider style={{ borderColor: "#969696", borderWidth: 0.7, width: "100%" }} />
        <Text style={{ fontSize: 14, color: "#000000", marginLeft: 15 }}>Additional information</Text>
        <TextInput style={styles.input} />
        <Divider style={{ borderColor: "#969696", borderWidth: 0.9, width: "100%" }} />
        <Card style={{ backgroundColor: "#F1F6F9", height: 55, }}>
          <Card.Content>
            <Text style={{
              fontSize: 14,
              color: "#5C5C5C",
              fontFamily: "Roboto-Medium",
              fontWeight: "bold",
            }}
            >Business Number
            </Text>
          </Card.Content>
        </Card>
        <Divider style={{ borderColor: "#969696", borderWidth: 0.9, width: "100%" }} />
        <Text style={{ fontSize: 14, color: "#000000", marginLeft: 15, margiTop: 20 }}>Abbrevation</Text>
        <TextInput style={styles.input}
          value="Tax Reg No. " />
        <Divider style={{ borderColor: "#969696", borderWidth: 0.7, width: "100%" }} />
        <Text style={{ fontSize: 14, color: "#000000", marginLeft: 15 }}>Business Number</Text>
        <TextInput style={styles.input} />
        <Divider style={{ borderColor: "#969696", borderWidth: 0.9, width: "100%" }} />
        <Card style={{ backgroundColor: "#F1F6F9", height: 55, }}>
          <Card.Content>
            <Text style={{
              fontSize: 14,
              color: "#5C5C5C",
              fontFamily: "Roboto-Medium",
              fontWeight: "bold",
            }}
            >Address
            </Text>
          </Card.Content>
        </Card>
        <Divider style={{ borderColor: "#969696", borderWidth: 0.9, width: "100%" }} />
        <Text style={{ fontSize: 14, color: "#000000", marginLeft: 15 }}>Address 1</Text>
        <TextInput style={styles.input} />
        <Divider style={{ borderColor: "#969696", borderWidth: 0.7, width: "100%" }} />
        <Text style={{ fontSize: 14, color: "#000000", marginLeft: 15 }}>Address 2</Text>
        <TextInput style={styles.input} />
        <Divider style={{ borderColor: "#969696", borderWidth: 0.7, width: "100%" }} />
        <Text style={{ fontSize: 14, color: "#000000", marginLeft: 15 }}>City</Text>
        <TextInput style={styles.input} />
        <Divider style={{ borderColor: "#969696", borderWidth: 0.7, width: "100%" }} />
        <Text style={{ fontSize: 14, color: "#000000", marginLeft: 15 }}>State</Text>
        <TextInput style={styles.input} />
        <Divider style={{ borderColor: "#969696", borderWidth: 0.7, width: "100%" }} />
        <Text style={{ fontSize: 14, color: "#000000", marginLeft: 15 }}>Zip Code</Text>
        <TextInput style={styles.input} />
        <Divider style={{ borderColor: "#969696", borderWidth: 0.7, width: "100%" }} />
        <Text style={{ fontSize: 14, color: "#000000", marginLeft: 15 }}>Country</Text>
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }>
          <Picker.Item label="Pakistan" value="1" />
          <Picker.Item label="Afghanistan" value="2" />
          <Picker.Item label="Japan" value="3" />
        </Picker>
      </View>
    </ScrollView>
  )
}
export default CompanyInformation;

const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    backgroundColor: "#FAFBFD",
  },
  input: {
    marginLeft: 10,
  },
})