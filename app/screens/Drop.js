import React from "react";
import { StyleSheet, Text, Pressable, ImageBackground } from 'react-native';


export default function Drop({ navigation }) {

    return (
        <ImageBackground source={require('../assets/gradient6.jpg')} style={styles.bgImage}>
            <Text style={styles.header}>Successfuly Droped!</Text>
            <Pressable onPress={() => navigation.navigate('Home')} style={styles.btn}><Text style={styles.txt}>Again?</Text></Pressable>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    bgImage: {
        flex: 1,
        justifyContent: "center",
    },
    input: {
        backgroundColor: '#fff',
        alignSelf: "center",
        width: '50%',
        marginBottom: 10,
        borderWidth: 2,
        borderRadius: 8,
        padding: 4,
        paddingLeft: 10,
        borderColor: 'black'
    },
    header: {
        textAlign: "center",
        marginBottom: 20,
        fontSize: 20
    },
    btn: {
        backgroundColor: "orange",
        marginTop: 20,
        padding: 7,
        alignSelf: "center",
        width: '30%',
        borderRadius: 8,
        borderWidth: StyleSheet.hairlineWidth
    },
    txt: {
        textAlign: "center",
        fontSize: 17
    }
})