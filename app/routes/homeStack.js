import { createAppContainer, createSwitchNavigator } from 'react-navigation'
//cmps
import Home from '../screens/Home';
import ContactDetails from '../screens/ContactDetails';
import Address from '../screens/Address';
import Bags from '../screens/Bags';
import ReviewScreen from '../screens/ReviewScreen';
import Drop from '../screens/Drop';


const screens = {
    Home: {
        screen: Home
    },
    ContactDetails: {
        screen: ContactDetails
    },
    Address: {
        screen: Address
    },
    Bags: {
        screen: Bags
    },
    ReviewScreen: {
        screen: ReviewScreen
    },
    Drop: {
        screen: Drop
    }
}

const HomeStack = createSwitchNavigator(screens)

export default createAppContainer(HomeStack)