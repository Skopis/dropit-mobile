import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { Formik } from 'formik';


export default ContactDetails = ({ navigation }) => (
    <Formik
        initialValues={{
            fullName: '',
            phoneNumber: {
                countryCode: '',
                number: ''
            }
        }}
        onSubmit={async (values) => {
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
                <Text>Enter your Contact Details</Text>
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
                <Button onPress={handleSubmit} title="Submit" />
            </View>

        )}

    </Formik>
);

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'grey',
        marginBottom: 10,
        borderWidth: 5,
        borderColor: 'black'
    },
})