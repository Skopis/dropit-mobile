import React from 'react';
import { StyleSheet, ImageBackground, Pressable, Text } from 'react-native';


export default function Home({ navigation }) {

    return (
        <ImageBackground source={require('../assets/dropimage.jpg')} style={styles.bgImage}>
            <Pressable onPress={() => navigation.navigate('ContactDetails')} style={styles.btn}><Text style={styles.txt}>Start the Drop!</Text></Pressable>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    bgImage: {
        flex: 1,
        justifyContent: "center",
    },
    btn: {
        backgroundColor: "goldenrod",
        marginTop: 20,
        padding: 20,
        alignSelf: "center",
        width: '60%',
        borderRadius: 8,
        borderWidth: StyleSheet.hairlineWidth
    },
    txt: {
        textAlign: "center",
        fontSize: 25
    }
});