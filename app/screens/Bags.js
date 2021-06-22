import React from 'react';
import { StyleSheet, Pressable, TextInput, View, Text, ImageBackground, Alert } from 'react-native';
import { Formik } from 'formik';


export default Bags = ({ navigation }) => {

    return (
        <ImageBackground source={require('../assets/gradient3.jpg')} style={styles.bgImage}>
            <Formik
                initialValues={{ bags: '' }}
                onSubmit={async (values) => {
                    if (!values.bags) {
                        Alert.alert('', 'Please add at least one Bag Tag');
                        return;
                    }
                    const bagTags = values.bags.replace(/\s/g, '').split(',')
                    var request = new XMLHttpRequest();

                    request.open('POST', 'https://private-anon-e03796ba95-droptask.apiary-mock.com/drop');

                    request.setRequestHeader('Content-Type', 'application/json');

                    request.onreadystatechange = function () {
                        if (this.readyState === 4) {
                            console.log('Status:', this.status);
                            console.log('Headers:', this.getAllResponseHeaders());
                            console.log('Body:', this.responseText);
                            if (this.status === 200) navigation.navigate('ReviewScreen', { contactDetails: navigation.state.params.contactDetails, address: navigation.state.params.address, bags: bagTags })
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
                        <Text style={styles.header}>Please Enter your Bags Details</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={handleChange('bags')}
                            onBlur={handleBlur('bags')}
                            value={values.bags}
                            placeholder="Bag Tags separated by commas"
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
        width: '80%',
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
        backgroundColor: "lightgreen",
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