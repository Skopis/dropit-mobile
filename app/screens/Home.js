import React from 'react';
import { StyleSheet, ImageBackground, Button } from 'react-native';


export default function Home({ navigation }) {

    return (
        <ImageBackground source={require('../assets/dropimage.jpg')} style={styles.bgImage}>
            <Button title="Dropit!" color="orange" onPress={() => navigation.navigate('ContactDetails')} />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    bgImage: {
        flex: 1,
        justifyContent: "center",
    }
});