import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

const IconInput = (props) => {
    const { placeholder } = props

    return (
        <TextInput
            style={styles.input}
            mode="outlined"
            placeholder={placeholder}
            {...props}
            right={<TextInput.Icon name="eye" />}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        width: "90%",
        borderRadius: 8,
        margin: 10,
    },
});

export default IconInput;
