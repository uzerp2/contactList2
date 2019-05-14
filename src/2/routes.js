import { createStackNavigator, createAppContainer } from 'react-navigation';

import Contacts from './screens/Contacts';
import Profile from './screens/Profile';


const AppNavigator = createStackNavigator({
  Contacts: {
    screen: Contacts,
  },
  Profile: {
    screen: Profile,
  },
});

export default createAppContainer(AppNavigator);