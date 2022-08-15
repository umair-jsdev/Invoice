import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import { Card, Divider } from 'react-native-paper';

function CompanyInformation() {
  return (
    <ScrollView>
      <View style={styles.contanier}>
        <Divider style={{ borderColor: "#969696", marginTop: 20, borderWidth: 0.9, width: "100%" }} />
        <View style={styles.padding}>
          <Text style={{
            fontSize: 11,
            color: "#757575",
            fontFamily: "Roboto-Medium",
            marginBottom: 5
          }}>
            Company Name
          </Text>
          <Text style={{
            fontSize: 14,
            color: "#757575",
            fontFamily: "Roboto-Medium",
            fontWeight: "bold"
          }}
          >TrendyTech Pro
          </Text>
        </View>
        <Divider style={{ borderColor: "#969696", marginTop: 20, borderWidth: 0.5, width: "100%" }} />
        <View style={styles.padding}>
          <Text style={{
            fontSize: 14,
            color: "#757575",
            fontFamily: "Roboto-Medium",
            fontWeight: "bold"
          }}
          >Email address on the invoice
          </Text>
        </View>
        <Divider style={{ borderColor: "#969696", marginTop: 20, borderWidth: 0.5, width: "100%" }} />
        <View style={styles.padding}>
          <Text style={{
            fontSize: 14,
            color: "#757575",
            fontFamily: "Roboto-Medium",
            fontWeight: "bold"
          }}
          >Phone Number
          </Text>
        </View>
        <Divider style={{ borderColor: "#969696", marginTop: 20, borderWidth: 0.5, width: "100%" }} />
        <View style={styles.padding}>
          <Text style={{
            fontSize: 14,
            color: "#757575",
            fontFamily: "Roboto-Medium",
            fontWeight: "bold"
          }}
          >Additional information
          </Text>
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
            >Business Number
            </Text>
          </Card.Content>
          <Divider style={{ borderColor: "#969696", marginTop: 20, borderWidth: 0.5, width: "100%" }} />
        </Card>
        <View style={styles.padding}>
          <Text style={{
            fontSize: 14,
            color: "#757575",
            fontFamily: "Roboto-Medium",
            fontWeight: "bold"
          }}
          >Abbrevation
          </Text>
        </View>
        <Divider style={{ borderColor: "#969696", marginTop: 20, borderWidth: 0.5, width: "100%" }} />
        <View style={styles.padding}>
          <Text style={{
            fontSize: 14,
            color: "#757575",
            fontFamily: "Roboto-Medium",
            fontWeight: "bold"
          }}
          >Business Number
          </Text>
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
            >Address
            </Text>
          </Card.Content>
          <Divider style={{ borderColor: "#969696", marginTop: 20, borderWidth: 0.5, width: "100%" }} />
        </Card>
        <View style={styles.padding}>
          <Text style={{
            fontSize: 14,
            color: "#757575",
            fontFamily: "Roboto-Medium",
            fontWeight: "bold"
          }}
          >Address 1
          </Text>
        </View>
        <Divider style={{ borderColor: "#969696", marginTop: 20, borderWidth: 0.5, width: "100%" }} />
        <View style={styles.padding}>
          <Text style={{
            fontSize: 14,
            color: "#757575",
            fontFamily: "Roboto-Medium",
            fontWeight: "bold"
          }}
          >Address 2
          </Text>
        </View>
        <Divider style={{ borderColor: "#969696", marginTop: 20, borderWidth: 0.5, width: "100%" }} />
        <View style={styles.padding}>
          <Text style={{
            fontSize: 14,
            color: "#757575",
            fontFamily: "Roboto-Medium",
            fontWeight: "bold"
          }}
          >City                                                           State
          </Text>
        </View>
        <Divider style={{ borderColor: "#969696", marginTop: 20, borderWidth: 0.5, width: "100%" }} />
        <View style={styles.padding}>
          <Text style={{
            fontSize: 14,
            color: "#757575",
            fontFamily: "Roboto-Medium",
            fontWeight: "bold"
          }}
          >Zip                                                           Country
          </Text>
        </View>
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
  padding: {
    alignItems: "flex-start",
    margin: 20,
    marginTop: 20,
  },
})