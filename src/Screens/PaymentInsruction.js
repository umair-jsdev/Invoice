import React, { useState } from 'react';
import { StyleSheet, TextInput, Switch, View, Text } from 'react-native';
import { Divider } from 'react-native-paper';


function PaymentInstruction() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={styles.contanier}>
            <Divider style={{ borderColor: "#969696", borderWidth: 0.7, width: "100%" }} />
            <View style={{ flexDirection: "row" }}>
                <Text style={{
                    fontSize: 14,
                    color: "#000000",
                    fontWeight: "bold",
                    margin: 15

                }}>
                    Display Payment Instruction
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
            <Text style={{ fontSize: 14, color: "#000000", marginLeft: 15, }}>Payment Instruction 1</Text>
            <TextInput style={styles.input} />
            <Divider style={{ borderColor: "#969696", borderWidth: 0.7, width: "100%" }} />
            <Text style={{ fontSize: 14, color: "#000000", marginLeft: 15, }}>Payment Instruction 2</Text>
            <TextInput style={styles.input} />
            <Divider style={{ borderColor: "#969696", borderWidth: 0.7, width: "100%" }} />
            <Text style={{ fontSize: 14, color: "#000000", marginLeft: 15, }}>Payment Instruction 3</Text>
            <TextInput style={styles.input} />
            <Divider style={{ borderColor: "#969696", borderWidth: 0.7, width: "100%" }} />
        </View>
    )
}
export default PaymentInstruction;

const styles = StyleSheet.create({
    contanier: {
        flex: 1,
        backgroundColor: "#FAFBFD",
    },
    input: {
        marginLeft: 10,
    },
})