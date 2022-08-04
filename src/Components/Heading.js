import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Heading = (props) => {
    const { title } = props;
    return (
        <View>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}
export default Heading;

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#001314",
    },
})