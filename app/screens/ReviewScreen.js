import React from "react";
import { StyleSheet, View, Text, Pressable, ImageBackground } from "react-native";
import { ListItem } from 'react-native-elements'


export default function ReviewScreen({ navigation }) {
    const contactDetails = navigation.state.params.contactDetails
    const address = navigation.state.params.address
    const bags = navigation.state.params.bags

    return (
        <ImageBackground source={require('../assets/gradient4.jpg')} style={styles.bgImage}>
            <Text style={styles.header}>Review your details</Text>
            <View style={styles.detailsSection}>
                <Text style={styles.subheader}>Contact Details</Text>
                <Text style={styles.txt}>Full Name: {contactDetails.fullName}</Text>
                <Text style={styles.txt}>Phone Number: +{contactDetails.phoneNumber.countryCode}-{contactDetails.phoneNumber.number}</Text>
            </View>
            <View style={styles.detailsSection}>
                <Text style={styles.subheader}>Address Details</Text>
                <Text style={styles.txt}>Street: {address.street}</Text>
                <Text style={styles.txt}>City: {address.city}</Text>
                <Text style={styles.txt}>Country: {address.country}</Text>
            </View>
            <View style={styles.detailsSection}>
                <Text style={styles.subheader}>Bags</Text>
                {bags && bags.length > 0 && <View>
                    {
                        bags.map((bag, idx) => (
                            <ListItem key={idx} containerStyle={styles.bagList}>
                                <Text style={styles.txt}>{bag}</Text>
                            </ListItem>
                        ))
                    }
                </View>}
            </View>
            <Pressable onPress={() => navigation.navigate('Drop')} style={styles.btn}><Text style={styles.txt}>Dropit!</Text></Pressable>
        </ImageBackground>
    );
}


const styles = StyleSheet.create({
    bgImage: {
        flex: 1,
        justifyContent: "center",
    },
    header: {
        textAlign: "center",
        paddingBottom: 40,
        fontSize: 24,
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    btn: {
        backgroundColor: "paleturquoise",
        marginTop: 40,
        padding: 7,
        alignSelf: "center",
        width: '30%',
        borderRadius: 8,
        borderWidth: StyleSheet.hairlineWidth
    },
    txt: {
        textAlign: "center",
        fontSize: 17
    },
    detailsSection: {
        paddingBottom: 20,
        paddingTop: 20,
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    subheader: {
        fontSize: 20,
        marginBottom: 10,
        paddingLeft: 10
    },
    bagList: {
        backgroundColor: 'transparent',
    }
})