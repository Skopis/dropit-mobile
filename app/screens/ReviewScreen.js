import React from "react";
import { View, Text, Button } from "react-native";
import { ListItem } from 'react-native-elements'

export default function ReviewScreen(props) {
    // console.log('contactDetails at ReviewScreen', props.navigation.state.params.contactDetails)
    // console.log('address at ReviewScreen', props.navigation.state.params.address)
    // console.log('address at ReviewScreen', props.navigation.state.params.bags)
    const contactDetails = props.navigation.state.params.contactDetails
    const address = props.navigation.state.params.address
    const bags = props.navigation.state.params.bags
    return (
        <View>
            <Text>Review your details</Text>

            <View>
                <Text>Contact Details</Text>
                <Text>Full Name: {contactDetails.fullName}</Text>
                <Text>Phone Number: +{contactDetails.phoneNumber.countryCode}{contactDetails.phoneNumber.number}</Text>
            </View>
            <View>
                <Text>Address Details</Text>
                <Text>Street: {address.street}</Text>
                <Text>City: {address.city}</Text>
                <Text>Country: {address.country}</Text>
            </View>
            <View>
                <Text>Bags</Text>
                {bags && bags.length > 0 && <View>
                    {
                        bags.map((bag, idx) => (
                            <ListItem key={idx}>
                                <ListItem.Content><Text>{bag}</Text></ListItem.Content>
                            </ListItem>
                        ))
                    }
                </View>}
            </View>

            <Button title="Dropit!" color="orange" onPress={() => history.push("/drop")} />
        </View>
    );
}
