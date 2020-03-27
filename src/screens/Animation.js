import React,{Component} from 'react'
import {View,StyleSheet,Text,ScrollView, ImageBackground,Image,Animated,Easing,TextInput} from 'react-native'
import {hp,wp} from '../styles/MainStyle'
import {RegularText,BoldText } from  '../components/RobotoText'
import { TouchableOpacity } from 'react-native-gesture-handler'
// import { ScrollView } from 'react-native-gesture-handler'


export default class Animation extends React.Component{
    state={
        startValue : new Animated.Value(0),
        animate:false,
        activeInput:''
    }
    startAnimat(){
        this.setState({animate:true})
        Animated.timing(this.state.startValue,{
            toValue:1,
            duration:1000,
            useNativeDriver:true,
        }).start()
    }
    render(){
        return(
            <View style={styles.container}>
                <View>
                    <BoldText>Username</BoldText>
                    <TextInput
                        style={this.state.activeInput==='username'?styles.active:styles.notactive}
                        placeholder='Username'
                        onFocus={()=>this.setState({activeInput:'username'})}
                        onBlur={()=>this.setState({activeInput:''})}
                        onSubmitEditing={()=>this.startAnimat()}
                    />
                </View>
                <Animated.View style={{opacity:this.state.startValue,}}>
                    <BoldText>Password</BoldText>
                    <TextInput
                        style={this.state.activeInput==='password'?styles.active:styles.notactive}
                        placeholder='Username'
                        onFocus={()=>this.setState({activeInput:'password'})}
                        onBlur={()=>this.setState({activeInput:''})}
                        onSubmitEditing={()=>this.startAnimat}
                        ref={(ref)=>this.pass=(ref)}
                        
                    />
                </Animated.View>

            </View>
        )
    }
}


const styles =StyleSheet.create({
    active:{
        borderBottomWidth:1,
        width:wp(300),
        alignSelf:'center',
        borderBottomColor:'green'
    },
    notactive:{
        borderBottomWidth:1,
        width:wp(300),
        alignSelf:'center',
        borderBottomColor:'black'
    },
    main:{
        width:wp(80),
        height:wp(80),
        // borderRadius:wp(40),
        // alignSelf:'flex-end',
        alignItems:'center',
        justifyContent:'center',
        // position:'absolute',
        backgroundColor:'lightgreen',
        bottom:5,
        right:5
    },
    circle:{
        width:wp(80),
        height:wp(80),
        // borderRadius:wp(40),
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        backgroundColor:'lightgreen',
        bottom:5,
        right:5
    },
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:'center',
        backgroundColor:"#f1ebfb"
    },
})