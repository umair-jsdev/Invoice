import React from 'react';
import { StyleSheet, Image, View, ScrollView, TouchableWithoutFeedback, Text } from 'react-native';
import Captiontwo from '../Components/Captiontwo';
import Heading from '../Components/Heading';
import IconInput from '../Components/IconInput';
import Input from '../Components/Input';

function Signup({ navigation }) {
    return (
        <ScrollView>
            <View style={styles.contanier}>
                <Image
                    style={styles.logo}
                    source={require('../Images/img-04.png')}
                />
                <View style={styles.head}>
                    <Heading title="Create your account" />
                </View>
                <Input
                    label="First Name"
                    placeholder="First Name"
                    autoCapitalize="none" />
                <Input
                    label="Last Name"
                    placeholder="Last Name"
                    autoCapitalize="none" />
                <Input
                    label="E-mail"
                    placeholder="E-mail"
                    autoCapitalize="none" />
                <IconInput
                    label="Password"
                    placeholder="********"
                    autoCapitalize="none"
                    secureTextEntry />
                <TouchableWithoutFeedback
                    onPress={() => navigation.navigate('Login')}
                >
                    <View style={styles.loginbutton}>
                        <Text style={styles.logintext}>
                            SignUp
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <Captiontwo title="OR CONTINUE WITH" />
                <Image
                    style={styles.icon}
                    source={require('../Images/icon-01.png')}
                />
                <View style={styles.direction} >
                    <Captiontwo title="Already have an account?" />
                    <TouchableWithoutFeedback
                        onPress={() => navigation.navigate('Login')}
                    >
                        <View>
                            <Captiontwo title="LogIn" />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View >
        </ScrollView>
    )
}

export default Signup;

const styles = StyleSheet.create({
    contanier: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FAFBFD",
    },
    logo: {
        width: 240,
        height: 250,
        marginBottom: 50,
        marginTop: 30,
    },
    icon: {
        width: 243,
        height: 34,
        marginBottom: 20,
        marginTop: 20,
    },
    heading: {
        margin: 10,
    },
    head: {
        marginBottom: 50,
    },
    button: {
        fontWeight: "bold",
        marginRight: 215,
        marginTop: 20,
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