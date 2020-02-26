import React,{Component} from 'react'
import {View,StyleSheet,Text,ScrollView, ImageBackground,Image,TextInput} from 'react-native'
import {hp,wp} from '../styles/MainStyle'
import {RegularText,BoldText } from  '../components/RobotoText'
import MenuIcon from '../assets/svgs/MenuIcon.svg'
import BackIcon from '../assets/svgs/LeftArrow.svg'
import RefreshIcon from '../assets/svgs/Refresh.svg'

import UserIcon from '../assets/svgs/UserIcon2.svg'
import { TouchableOpacity } from 'react-native-gesture-handler'


const Contacts=[
    {
        name:'Randall Ballard',
        number:'+61 23623 43425',
    },
    {
        name:'Theodore Johnston',
        number:'+12 34523 46326',
    },
    {
        name:'Sallie Duncan',
        number:'+35 12342 45633',
    },
    {
        name:'Nell Hayes',
        number:'+91 98988 88648',
    },
]

export default class RecieveMoney extends React.Component{


    render(){
        return(
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {/* start of Header */}
                    <ImageBackground   
                    resizeMode='stretch'
                        source={require('../assets/images/TopHead.png')}
                        style={styles.header}
                    >
                        <View style={styles.top}>
                            <TouchableOpacity onPress={()=>this.props.navigation.goBack()}> 
                                <BackIcon style={styles.menuIcon}/>
                            </TouchableOpacity>
                            
                            <MenuIcon />
                        </View>
                        <RegularText style={styles.title}>Recieve Money</RegularText>
                
                    </ImageBackground>
            {/* end of Header */}
                <View style={styles.ContactView}>
                    <BoldText style={{color:'#4A4956',fontSize:hp(16),lineHeight:hp(21)}}>Nearby Devices</BoldText>
                    {
                        Contacts.map((item,index)=>{
                            return (
                                <TouchableOpacity style={styles.eachContact}>
                                    <ImageBackground resizeMode='contain' style={styles.UserCircle} source={require('../assets/images/circle.png')}>
                                        <UserIcon/>
                                    </ImageBackground>                                        
                                    <View style={{marginLeft:wp(15)}}>
                                        <BoldText style={styles.name}>{item.name}</BoldText>
                                        <RegularText style={styles.number}>{item.number}</RegularText>
                                    </View>

                                </TouchableOpacity>
                            )
                        })
                    }

                </View>
                {/* start of search again Button  */}
                    <TouchableOpacity style={styles.searchButton}>
                        <RefreshIcon/>
                        <BoldText style={styles.searchText}>Search Again</BoldText>

                    </TouchableOpacity>
                {/* end of start again button */}
            </ScrollView>
            </View>
        )
    }
}

const styles =StyleSheet.create({
    searchText:{
        color:'#fcfbfe',
        fontSize:hp(16),
        lineHeight:hp(21),
        marginLeft:wp(6)
    },
    searchButton:{
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        width:wp(203),
        height:(57/203)*wp(203),
        borderRadius:hp(32),
        marginTop:wp(20),
        backgroundColor:'#712ce2',
        flexDirection:'row'
    },
    number:{
        color:'#787786',
        fontSize:hp(16),
        lineHeight:hp(21)
    },
    name:{
        color:'#4A4956',
        marginTop:hp(7),
        marginBottom:hp(12),
        fontSize:hp(16),
        lineHeight:hp(21)
    },
    UserCircle:{
        height:wp(68),
        width:wp(68),
        alignItems:'center',
        justifyContent:'center'
    },
    eachContact:{
        flexDirection:'row',
        // alignItems:"center"
        marginTop:hp(20)

    },
    ContactView:{
        marginVertical:hp(40),
        paddingHorizontal:wp(30)
    },
    typeText:{
        color:'#712ce2',
        fontSize:hp(14),
        marginTop:hp(12),
        lineHeight:hp(16),
        textAlign:'center'
    },
    circle:{
        height:wp(52),
        width:wp(52),
        borderRadius:wp(26),
        backgroundColor:"#a277ed",
        alignItems:"center",
        justifyContent:'center'
    },
    eachType:{
        alignItems:'center',
        width:wp(53)
    },
    input:{
        marginLeft:wp(12),
        width:wp(300)
    },
    placeText:{
        color:"#787786",
        fontSize:hp(14),
        lineHeight:hp(19)
    },
    searchIcon:{
        width:wp(0),
        height:wp(5),
    },
    searchBox:{
        alignSelf:'center',
        width:wp(315),
        borderBottomWidth:1,
        borderColor:'#712CE2',
        alignItems:'center',
        flexDirection:'row',
        marginTop:hp(44),
    },
    title:{
        marginTop:hp(20),
        fontSize:hp(22),
        lineHeight:hp(29),
        color:'white'
    },
    menuIcon:{
        width:wp(21),
        height:(11/21)*wp(21)
    },
    backIcon:{
        width:wp(18),
        height:wp(18)
    },
    top:{
        flexDirection:'row',
        justifyContent:'space-between',
        // alignItems:'center'
    },
    header:{
        height:(104/375)*wp(375),
        width:wp(375),
        paddingHorizontal:wp(25),
        paddingTop:hp(30),
    },
    container:{
        flex:1,
        // alignItems:"center",
        backgroundColor:"#f1ebfb"
    },
})