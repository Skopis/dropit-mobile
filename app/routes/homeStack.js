import { createStackNavigator} from 'react-navigation-stack'
import { createAppContainer, createSwitchNavigator} from 'react-navigation'
//cmps
import Home from '../screens/Home';
import ContactDetails from '../screens/ContactDetails';
import Address from '../screens/Address';
import Bags from '../screens/Bags';
import ReviewScreen from '../screens/ReviewScreen';

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
    }
}

const HomeStack = createSwitchNavigator(screens)

export default createAppContainer(HomeStack)