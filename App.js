
import React,{Component} from 'react';
import {SafeAreaView,StyleSheet,TouchableOpacity,ScrollView,View,Text,StatusBar,FlatList,
  ActivityIndicator,Alert} from 'react-native';
import MainNavigation from './src/navigation/index'
// import { enableScreens } from 'react-native-screens';
// import {Provider} from 'react-redux';
// import {store,persistor} from './redux/reducer'
// import { PersistGate } from 'redux-persist/integration/react'
// const uuidv1 = require('uuid/v1')
// enableScreens();
export default class App extends Component {
  state={
    loading:false,
    showAlert:true,
    errormessage:'',
    errorAlert:false,
    Data:[]
  }
  render () {
  
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar   barStyle='light-content' />
          {/* <Text>dhheeu</Text> */}
          <MainNavigation/>
        
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
})



