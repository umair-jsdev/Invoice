import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CardHeading = (props) => {
    const { title } = props;
    return (
        <View>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}
export default CardHeading;

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#001314",
    },
})