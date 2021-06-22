import React from 'react';
import { StyleSheet, Pressable, TextInput, View, Text, ImageBackground, Alert  } from 'react-native';
import { Formik } from 'formik';


export default ContactDetails = ({ navigation }) => (
    <ImageBackground source={require('../assets/gradient1.jpg')} style={styles.bgImage}>
        <Formik
            initialValues={{
                fullName: '',
                phoneNumber: {
                    countryCode: '',
                    number: ''
                }
            }}
            onSubmit={async (values) => {
                if (!values.fullName || !values.phoneNumber.countryCode || !values.phoneNumber.number) {
                    Alert .alert('', 'All Fields are Required!');
                    return;
                }
                var request = new XMLHttpRequest();

                request.open('POST', 'https://private-anon-e03796ba95-droptask.apiary-mock.com/user/contact');

                request.setRequestHeader('Content-Type', 'application/json');

                request.onreadystatechange = function () {
                    if (this.readyState === 4) {
                        console.log('Status:', this.status);
                        console.log('Headers:', this.getAllResponseHeaders());
                        console.log('Body:', this.responseText);
                        if (this.status === 200) navigation.navigate('Address', { contactDetails: values })
                    }
                };

                var body = {
                    'fullName': values.fullName,
                    'phoneNumber': {
                        'countryCode': +values.phoneNumber.countryCode,
                        'number': values.phoneNumber.number
                    }
                };

                request.send(JSON.stringify(body));
            }}
        >

            {({ handleChange, handleBlur, handleSubmit, values }) => (

                <View>
                    <Text style={styles.header}>Please Enter your Contact Details</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={handleChange('fullName')}
                        onBlur={handleBlur('fullName')}
                        value={values.fullName}
                        placeholder="Full Name"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={handleChange('phoneNumber.countryCode')}
                        onBlur={handleBlur('phoneNumber.countryCode')}
                        value={values.phoneNumber.countryCode}
                        placeholder="Country code"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={handleChange('phoneNumber.number')}
                        onBlur={handleBlur('phoneNumber.number')}
                        value={values.phoneNumber.number}
                        placeholder="Phone Number"
                    />
                    <Pressable onPress={handleSubmit} style={styles.btn}><Text style={styles.txt}>Submit</Text></Pressable>
                </View>

            )}

        </Formik>
    </ImageBackground>
);

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
        backgroundColor: "lightcoral",
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