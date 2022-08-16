import React, { useState } from "react";
import { StyleSheet, Text, ScrollView, View, Switch, Image, TouchableWithoutFeedback } from 'react-native';
import SwitchSelector from "react-native-switch-selector";
import { Card, Divider } from 'react-native-paper';
import Heading from "../Components/Heading";



const Invoice = ({ navigation }) => {
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
                {show !== true ?
                    <View>
                        <Card style={{ backgroundColor: "#FFFFFF", height: 65, marginTop: 20, elevation: 5 }}>
                            <Card.Title
                                left={(props) => <Image
                                    {...props}
                                    style={styles.logo}
                                    source={require('../Images/cardimg-01.png')}
                                />}
                                right={(props) => <TouchableWithoutFeedback
                                    {...props}
                                    onPress={() => navigation.navigate('Setting')}
                                >
                                    <View style={styles.button}>
                                        <Text style={styles.text}>
                                            Logo & Business Settings
                                        </Text>
                                    </View>
                                </TouchableWithoutFeedback>}
                            />
                        </Card>
                        <Card style={{ backgroundColor: "#FFFFFF", height: 65, marginTop: 20, elevation: 5 }}>
                            <Card.Title
                                left={(props) => <Image
                                    {...props}
                                    style={styles.logo}
                                    source={require('../Images/cardimg-02.png')}
                                />}
                                right={(props) => <TouchableWithoutFeedback
                                    {...props}
                                    onPress={() => navigation.navigate('TutorialVideos')}
                                >
                                    <View style={styles.button1}>
                                        <Text style={styles.text1}>
                                            Tutorial Videos
                                        </Text>
                                    </View>
                                </TouchableWithoutFeedback>}
                            />
                        </Card>
                        <Card style={{ backgroundColor: "#FFFFFF", height: 65, marginTop: 20, elevation: 5 }}>
                            <Card.Title
                                left={(props) => <Image
                                    {...props}
                                    style={styles.logo}
                                    source={require('../Images/cardimg-03.png')}
                                />}
                                right={(props) => <TouchableWithoutFeedback
                                    {...props}
                                // onPress={() => navigation.navigate('ForgetPassword')}
                                >
                                    <View style={styles.button2}>
                                        <Text style={styles.text2}>
                                            Support
                                        </Text>
                                    </View>
                                </TouchableWithoutFeedback>}
                            />
                        </Card>
                    </View>

                    :
                    <View>
                        <Card style={{ backgroundColor: "#FFFFFF", height: 65, marginTop: 20, elevation: 5 }}>
                            <Card.Title
                                left={(props) => <Image
                                    {...props}
                                    style={styles.logo}
                                    source={require('../Images/cardimg-01.png')}
                                />}
                                right={(props) => <TouchableWithoutFeedback
                                    {...props}
                                // onPress={() => navigation.navigate('ForgetPassword')}
                                >
                                    <View style={styles.button}>
                                        <Text style={styles.text}>
                                            Logo & Business Settings
                                        </Text>
                                    </View>
                                </TouchableWithoutFeedback>}
                            />
                        </Card>
                        <Card style={{ backgroundColor: "#FFFFFF", height: 65, marginTop: 20, elevation: 5 }}>
                            <Card.Title
                                left={(props) => <Image
                                    {...props}
                                    style={styles.logo}
                                    source={require('../Images/cardimg-02.png')}
                                />}
                                right={(props) => <TouchableWithoutFeedback
                                    {...props}
                                >
                                    <View style={styles.button1}>
                                        <Text style={styles.text1}>
                                            Tutorial Videos
                                        </Text>
                                    </View>
                                </TouchableWithoutFeedback>}
                            />
                        </Card>
                        <Card style={{ backgroundColor: "#FFFFFF", height: 65, marginTop: 20, elevation: 5 }}>
                            <Card.Title
                                left={(props) => <Image
                                    {...props}
                                    style={styles.logo}
                                    source={require('../Images/cardimg-03.png')}
                                />}
                                right={(props) => <TouchableWithoutFeedback
                                    {...props}
                                // onPress={() => navigation.navigate('ForgetPassword')}
                                >
                                    <View style={styles.button2}>
                                        <Text style={styles.text2}>
                                            Support
                                        </Text>
                                    </View>
                                </TouchableWithoutFeedback>}
                            />
                        </Card>
                        <View style={styles.img2}>
                            <Image
                                style={styles.img1}
                                source={require('../Images/img-06.png')}
                            />
                            <Text style={{ fontSize: 18, color: "#6F6F6F", fontWeight: "bold", marginTop: 20 }}>It’s empty</Text>
                            <Text style={{ fontSize: 16, color: "#6F6F6F", marginTop: 20 }}>Tap on + button to add a document</Text>
                        </View>
                    </View>}
            </View>
        </View>
    )
}
export default Invoice;

const styles = StyleSheet.create({
    contanier: {
        flex: 1,
        backgroundColor: "#FAFBFD",
    },
    logo: {
        width: 87,
        height: 55,
    },
    img1: {
        width: 125,
        height: 110,
    },
    img2: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30
    },
    button: {
        fontWeight: "bold",
        marginRight: 65,
    },
    text: {
        color: '#0074DD',
        fontSize: 16,
        fontWeight: "bold",
    },
    button1: {
        fontWeight: "bold",
        marginRight: 140,
    },
    text1: {
        color: '#0074DD',
        fontSize: 16,
        fontWeight: "bold",
    },
    button2: {
        fontWeight: "bold",
        marginRight: 190,
    },
    text2: {
        color: '#0074DD',
        fontSize: 16,
        fontWeight: "bold",
    },
})