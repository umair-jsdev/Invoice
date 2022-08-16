import { StyleSheet, Image, View } from 'react-native'
import React from 'react'

const TutorialVideos = () => {
    return (
        <View style={styles.contanier}>
            <Image
                style={styles.logo}
                source={require('../Images/cardimg-04.png')}
            />
            <Image
                style={styles.logo}
                source={require('../Images/cardimg-05.png')}
            />
        </View>
    )
}

export default TutorialVideos

const styles = StyleSheet.create({
    contanier: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FAFBFD",
    },
    logo: {
        width: 355,
        height: 155,
        marginBottom: 30
    },
})