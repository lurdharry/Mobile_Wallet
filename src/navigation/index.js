import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Home from '../screens/Home.js'
import SendMoney from '../screens/SendMoney'
import RecieveMoney from '../screens/RecieveMoney'
import ManageMoney from '../screens/ManageMoney'
import AddEntry from '../screens/AddEntry'
import Animation from '../screens/Animation'


export default MainNavigation = createAppContainer(
    createStackNavigator({
        Home: { screen: Home,navigationOptions:{headerShown:false}},
        SendMoney: { screen: SendMoney,navigationOptions:{headerShown:false}},
        RecieveMoney: { screen: RecieveMoney,navigationOptions:{headerShown:false}},
        ManageMoney: { screen: ManageMoney,navigationOptions:{headerShown:false}},
        AddEntry: { screen: AddEntry,navigationOptions:{headerShown:false}},
        Animation: { screen: Animation,navigationOptions:{headerShown:false}},


      },
      {
        initialRouteName:'Animation'
    }
));

 