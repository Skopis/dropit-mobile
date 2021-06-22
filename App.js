import React from 'react';
import { StyleSheet, SafeAreaView, NativeModules, Platform } from 'react-native';
import Navigator from './app/routes/homeStack'


const { StatusBarManager } = NativeModules;

export default function App() {

    return (
        <SafeAreaView style={styles.container}>
            <Navigator />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS === 'android' ? StatusBarManager.HEIGHT : 0,
    }
})