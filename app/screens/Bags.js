import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { Formik } from 'formik';



export default Bags = (props) => {

    return (
        <Formik
            initialValues={{ bags: '' }}
            onSubmit={async (values) => {
                const bagTags = values.bags.replace(/\s/g, '').split(',')
                var request = new XMLHttpRequest();

                request.open('POST', 'https://private-anon-e03796ba95-droptask.apiary-mock.com/drop');

                request.setRequestHeader('Content-Type', 'application/json');

                request.onreadystatechange = function () {
                    if (this.readyState === 4) {
                        console.log('Status:', this.status);
                        console.log('Headers:', this.getAllResponseHeaders());
                        console.log('Body:', this.responseText);
                        if (this.status === 200) props.navigation.navigate('ReviewScreen', { contactDetails: props.navigation.state.params.contactDetails, address: props.navigation.state.params.address, bags: bagTags })
                    }
                };

                var body = {
                    'bags': bagTags
                };
                request.send(JSON.stringify(body));
            }}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View>
                    <Text>Enter your Bags Details</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={handleChange('bags')}
                        onBlur={handleBlur('bags')}
                        value={values.bags}
                        placeholder="Bag Tags separated by commas"
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