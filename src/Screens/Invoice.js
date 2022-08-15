import React, { useState } from "react";
import { StyleSheet, Text, ScrollView, View, Switch, Image } from 'react-native';
import SwitchSelector from "react-native-switch-selector";
import { Card, Divider } from 'react-native-paper';
import Heading from "../Components/Heading";



const CustomerPayment = () => {
    const [show, setShow] = useState(false);
    return (
        <View style={styles.contanier}>
            <Divider />
            <View style={{ margin: 20 }}>
                <Heading title="Invoice" />
            </View>
            <Card style={{ backgroundColor: "#F1F6F9", height: 55, }}>
                <Card.Content>
                    <View style={{ width: "50%" }}>
                        <SwitchSelector
                            initial={0}
                            textColor="#343434"
                            selectedColor="#343434"
                            backgroundColor="#FFFFFF"
                            buttonColor="#E3EDEE"
                            borderColor="#FFFFFF"
                            height={32}
                            valuePadding={4}
                            onPress={value => setShow(value)}
                            options={[
                                { label: "Inbox", value: false, },
                                { label: "Archived", value: true, },
                            ]}
                        />
                    </View>
                </Card.Content>
            </Card>
            <View >
                {show !== true ? <Card style={{ backgroundColor: "#FFFFFF", height: 65, marginTop: 20 }}>
                    <Card.Content>
                        <Image
                            style={styles.logo}
                            source={require('../Images/img-02.png')}
                        />
                        {/* <Text style={{
                            fontSize: 14,
                            color: "#5C5C5C",
                            fontFamily: "Roboto-Medium",
                            fontWeight: "bold",
                            marginLeft: 5
                        }}
                        >Business Number
                        </Text> */}
                    </Card.Content>
                </Card> : <Text>Hello</Text>}
            </View>
        </View>
    )
}
export default CustomerPayment;

const styles = StyleSheet.create({
    contanier: {
        flex: 1,
        backgroundColor: "#FAFBFD",
    },
    logo: {
        width: 87,
        height: 64,
        marginBottom: 50,
        marginTop: 30,
    },
})