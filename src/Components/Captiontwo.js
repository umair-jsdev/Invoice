import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Captiontwo = (props) => {
    const { title } = props;
    return (
        <View>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}
export default Captiontwo;

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        fontWeight: "normal",
        color: "#001314",
        margin: 10,
    },
})