import React from 'react';
import { NativeRouter, Switch, Route } from 'react-router-native'
import { StyleSheet, SafeAreaView, NativeModules, Platform } from 'react-native';
import Navigator from './app/routes/homeStack'
//cmps
// import Home from './app/screens/Home';
// import ContactDetails from './app/screens/ContactDetails';
// import Address from './app/screens/Address';
// import Bags from './app/screens/Bags';
// import ReviewScreen from './app/screens/ReviewScreen';
// import Drop from './app/screens/Drop';


const { StatusBarManager } = NativeModules;

export default function App() {

    return (
        <SafeAreaView style={styles.container}>
            {/* <NativeRouter>
                <Route exact path="/" component={Home} />
                <Route exact path="/contactdetails" component={ContactDetails} />
                <Route exact path="/address" component={Address} />
                <Route exact path="/bags" component={Bags} />
                <Route exact path="/review" component={ReviewScreen} />
                <Route exact path="/drop" component={Drop} />
            </NativeRouter> */}

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