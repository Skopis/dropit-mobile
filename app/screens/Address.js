import React from 'react';
import { StyleSheet, Pressable, TextInput, View, Text, ImageBackground, Alert } from 'react-native';
import { Formik } from 'formik';


export default Address = ({ navigation }) => {

    return (
        <ImageBackground source={require('../assets/gradient2.jpg')} style={styles.bgImage}>
            <Formik
                initialValues={{ street: '', city: '', country: '' }}
                onSubmit={async (values) => {
                    if (!values.street || !values.city || !values.country) {
                        Alert.alert('', 'All Fields are Required!');
                        return;
                    }
                    var request = new XMLHttpRequest();

                    request.open('POST', 'https://private-anon-e03796ba95-droptask.apiary-mock.com/user/address');

                    request.setRequestHeader('Content-Type', 'application/json');

                    request.onreadystatechange = function () {
                        if (this.readyState === 4) {
                            console.log('Status:', this.status);
                            console.log('Headers:', this.getAllResponseHeaders());
                            console.log('Body:', this.responseText);
                            if (this.status === 200) navigation.navigate('Bags', { contactDetails: navigation.state.params.contactDetails, address: values })
                        }
                    };

                    var body = {
                        'streetAddress': values.street,
                        'city': values.city,
                        'country': values.country
                    };

                    request.send(JSON.stringify(body));
                }}
            >

                {({ handleChange, handleBlur, handleSubmit, values }) => (

                    <View>
                        <Text style={styles.header}>Please Enter your Address Details</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={handleChange('street')}
                            onBlur={handleBlur('street')}
                            value={values.street}
                            placeholder="Street name"
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={handleChange('city')}
                            onBlur={handleBlur('city')}
                            value={values.city}
                            placeholder="City name"
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={handleChange('country')}
                            onBlur={handleBlur('country')}
                            value={values.country}
                            placeholder="Country name"
                        />
                        <Pressable onPress={handleSubmit} style={styles.btn}><Text style={styles.txt}>Submit</Text></Pressable>
                    </View>

                )}

            </Formik>
        </ImageBackground>
    )
};

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
        backgroundColor: "cornflowerblue",
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