import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Caption = (props) => {
    const { title } = props;
    return (
        <View>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}
export default Caption;

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        color: "#686868",
    },
})