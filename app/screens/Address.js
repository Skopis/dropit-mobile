import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { Formik } from 'formik';


export default Address = (props) => {

    return (
        <Formik
            initialValues={{ street: '', city: '', country: '' }}
            onSubmit={async (values) => {
                var request = new XMLHttpRequest();

                request.open('POST', 'https://private-anon-e03796ba95-droptask.apiary-mock.com/user/address');

                request.setRequestHeader('Content-Type', 'application/json');

                request.onreadystatechange = function () {
                    if (this.readyState === 4) {
                        console.log('Status:', this.status);
                        console.log('Headers:', this.getAllResponseHeaders());
                        console.log('Body:', this.responseText);
                        if (this.status === 200) props.navigation.navigate('Bags', { contactDetails: props.navigation.state.params.contactDetails, address: values })
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
                    <Text>Enter your Address Details</Text>
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
                    <Button onPress={handleSubmit} title="Submit" />
                </View>

            )}

        </Formik>
    )
};

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'grey',
        marginBottom: 10,
        borderWidth: 5,
        borderColor: 'black'
    },
})