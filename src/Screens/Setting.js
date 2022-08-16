import React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback, ScrollView, } from 'react-native';
import { Card } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/MaterialIcons'

const Setting = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.contanier}>
                <Card style={{ backgroundColor: "#F1F6F9", height: 59, borderTopLeftRadius: 19, borderTopRightRadius: 20, }}>
                    <Card.Content>
                        <Text style={{ fontSize: 11, color: "#000000", fontFamily: "Roboto-Medium" }}>USER NAME</Text>
                        <Text style={{ fontSize: 14, color: "#000000", fontFamily: "Roboto-Medium", fontWeight: 'bold' }}>JohnKhan393@gmail.com</Text>
                    </Card.Content>
                </Card>
                <TouchableWithoutFeedback
                    onPress={() => navigation.navigate('UserAccount')}
                >
                    <View style={styles.button}>
                        <Text style={styles.text}>
                            User Account
                        </Text>
                        {/* <Icon name="navigate-next" size={22} /> */}
                    </View>
                </TouchableWithoutFeedback>
                <Card style={{ backgroundColor: "#F1F6F9", height: 59, }}>
                    <Card.Content>
                        <Text style={{
                            fontSize: 14,
                            color: "#000000",
                            fontFamily: "Roboto-Medium",
                            fontWeight: 'bold',
                            marginLeft: 5
                        }}>
                            Company
                        </Text>
                    </Card.Content>
                </Card>
                <TouchableWithoutFeedback
                onPress={() => navigation.navigate('Logo')}
                >
                    <View style={styles.button}>
                        <Text style={styles.text}>
                            Logo
                        </Text>
                        {/* <Icon name="navigate-next" size={22} alignSelf="flex-end" /> */}
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    onPress={() => navigation.navigate('CompanyInformation')}
                >
                    <View style={styles.button}>
                        <Text style={styles.text}>
                            Company Information
                        </Text>
                        {/* <Icon name="navigate-next" size={22} style={{marginLeft:250}} /> */}
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                // onPress={() => navigation.navigate('ForgetPassword')}
                >
                    <View style={styles.button}>
                        <Text style={styles.text}>
                            Signature
                        </Text>
                        {/* <Icon name="navigate-next" size={22} style={{marginLeft:250}} /> */}
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    onPress={() => navigation.navigate('PaymentInstruction')}
                >
                    <View style={styles.button}>
                        <Text style={styles.text}>
                            Payment Instruction
                        </Text>
                        {/* <Icon name="navigate-next" size={22} style={{marginLeft:250}} /> */}
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    onPress={() => navigation.navigate('CustomerPayment')}
                >
                    <View style={styles.button}>
                        <Text style={styles.text}>
                            Customer Payment Option
                        </Text>
                        {/* <Icon name="navigate-next" size={22} style={{marginLeft:280}} /> */}
                    </View>
                </TouchableWithoutFeedback>
                <Card style={{ backgroundColor: "#F1F6F9", height: 59, }}>
                    <Card.Content>
                        <Text style={{
                            fontSize: 14,
                            color: "#000000",
                            fontFamily: "Roboto-Medium",
                            fontWeight: 'bold',
                            marginLeft: 5
                        }}>
                            Invoice
                        </Text>
                    </Card.Content>
                </Card>
                <TouchableWithoutFeedback
                // onPress={() => navigation.navigate('ForgetPassword')}
                >
                    <View style={styles.button}>
                        <Text style={styles.text}>
                            Overdue Reminder
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                // onPress={() => navigation.navigate('ForgetPassword')}
                >
                    <View style={styles.button}>
                        <Text style={styles.text}>
                            Invoice Number
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                // onPress={() => navigation.navigate('ForgetPassword')}
                >
                    <View style={styles.button}>
                        <Text style={styles.text}>
                            Due in (days)
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                // onPress={() => navigation.navigate('ForgetPassword')}
                >
                    <View style={styles.button}>
                        <Text style={styles.text}>
                            Tax
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                // onPress={() => navigation.navigate('ForgetPassword')}
                >
                    <View style={styles.button}>
                        <Text style={styles.text}>
                            Default Note
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                // onPress={() => navigation.navigate('ForgetPassword')}
                >
                    <View style={styles.button}>
                        <Text style={styles.text}>
                            Default Email Message
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                // onPress={() => navigation.navigate('ForgetPassword')}
                >
                    <View style={styles.button}>
                        <Text style={styles.text}>
                            Rename Fields
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                // onPress={() => navigation.navigate('ForgetPassword')}
                >
                    <View style={styles.button}>
                        <Text style={styles.text}>
                            Send me a copy
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <Card style={{ backgroundColor: "#F1F6F9", height: 59, }}>
                    <Card.Content>
                        <Text style={{
                            fontSize: 14,
                            color: "#000000",
                            fontFamily: "Roboto-Medium",
                            fontWeight: 'bold',
                            marginLeft: 5
                        }}>
                            Transactions
                        </Text>
                    </Card.Content>
                </Card>
                <TouchableWithoutFeedback
                // onPress={() => navigation.navigate('ForgetPassword')}
                >
                    <View style={styles.button}>
                        <Text style={styles.text}>
                            Transactions Accounts
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <Card style={{ backgroundColor: "#F1F6F9", height: 59, }}>
                    <Card.Content>
                        <Text style={{
                            fontSize: 14,
                            color: "#000000",
                            fontFamily: "Roboto-Medium",
                            fontWeight: 'bold',
                            marginLeft: 5
                        }}>
                            General
                        </Text>
                    </Card.Content>
                </Card>
                <TouchableWithoutFeedback
                // onPress={() => navigation.navigate('ForgetPassword')}
                >
                    <View style={styles.button}>
                        <Text style={styles.text}>
                            Passcode
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                // onPress={() => navigation.navigate('ForgetPassword')}
                >
                    <View style={styles.button}>
                        <Text style={styles.text}>
                            Currency
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                // onPress={() => navigation.navigate('ForgetPassword')}
                >
                    <View style={styles.button}>
                        <Text style={styles.text}>
                            Date Format
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                // onPress={() => navigation.navigate('ForgetPassword')}
                >
                    <View style={styles.button}>
                        <Text style={styles.text}>
                            Language
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                // onPress={() => navigation.navigate('ForgetPassword')}
                >
                    <View style={styles.button}>
                        <Text style={styles.text}>
                            Privacy Policy
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                // onPress={() => navigation.navigate('ForgetPassword')}
                >
                    <View style={styles.button}>
                        <Text style={styles.text}>
                            V.1.1.3.5
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </ScrollView>
    )
}

export default Setting;

const styles = StyleSheet.create({
    contanier: {
        flex: 1,
        backgroundColor: "#FAFBFD",
    },
    button: {
        margin: 20,
        flexDirection: "row",
    },
    text: {
        color: '#000000',
        fontSize: 14,
        fontFamily: "Roboto-Medium",
    },
})