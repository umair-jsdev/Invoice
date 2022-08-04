import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';


const TextButton = (props, { navigation }) => {
    const { title } = props;
    return (
        <TouchableWithoutFeedback
            // onPress={() => navigation.navigate('')}
        >
            <View style={styles.button}>
                <Text style={styles.text}>
                    {title}
                </Text>
            </View>
        </TouchableWithoutFeedback>
    )
}
export default TextButton;

const styles = StyleSheet.create({
    button: {
        fontWeight: "bold",
    },
    text: {
        color: '#AAAAAA',
        fontSize: 16,
        fontWeight: "bold",
    },
})