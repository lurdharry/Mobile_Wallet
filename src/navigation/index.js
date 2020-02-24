import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Home from '../screens/Home.js'

export default MainNavigation = createAppContainer(
    createStackNavigator({
        Home: { screen: Home,navigationOptions:{headerShown:false}},

      },
      {
        initialRouteName:'Home'
    }
));

 