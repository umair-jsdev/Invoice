import React from 'react';
import { StyleSheet, Image, View, ScrollView, TouchableWithoutFeedback, Text } from 'react-native';
import Captiontwo from '../Components/Captiontwo';
import Heading from '../Components/Heading';
import IconInput from '../Components/IconInput';
import Input from '../Components/Input';

function Login({ navigation }) {
    return (
        <ScrollView>
            <View style={styles.contanier}>
                <Image
                    style={styles.logo}
                    source={require('../Images/img-02.png')}
                />
                <View style={styles.head}>
                    <Heading title="LogIn" />
                </View>
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
                    onPress={() => navigation.navigate('ForgetPassword')}
                >
                    <View style={styles.button}>
                        <Text style={styles.text}>
                            Forget Password ?
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                // onPress={() => navigation.navigate('ForgetPassword')}
                >
                    <View style={styles.loginbutton}>
                        <Text style={styles.logintext}>
                            LogIn
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.direction} >
                    <Captiontwo title="Don’t have an account?" />
                    <TouchableWithoutFeedback
                        onPress={() => navigation.navigate('Signup')}
                    >
                        <View>
                            <Captiontwo title="SignUp" />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View >
        </ScrollView>
    )
}

export default Login;

const styles = StyleSheet.create({
    contanier: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FAFBFD",
    },
    logo: {
        width: 320,
        height: 350,
        marginBottom: 50,
        marginTop: 30,
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