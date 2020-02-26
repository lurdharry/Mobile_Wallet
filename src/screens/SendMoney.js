import React,{Component} from 'react'
import {View,StyleSheet,Text,ScrollView, ImageBackground,Image,TextInput} from 'react-native'
import {hp,wp} from '../styles/MainStyle'
import {RegularText,BoldText } from  '../components/RobotoText'
import MenuIcon from '../assets/svgs/MenuIcon.svg'
import BackIcon from '../assets/svgs/LeftArrow.svg'
import SearchIcon from '../assets/svgs/SearchIcon.svg'
import BillIcon from '../assets/svgs/Bill.svg'
import MobileIcon from '../assets/svgs/Mobile.svg'
import BankIcon from '../assets/svgs/Bank.svg'
import NearbyIcon from '../assets/svgs/Nearby.svg'
import UserCircle from '../assets/svgs/SendU1.svg'
import UserIcon from '../assets/svgs/UserIcon2.svg'
import { TouchableOpacity } from 'react-native-gesture-handler'


const PaymentType=['Mobile Recharge','Bill Payments','Bank Transfer','Nearby']

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

export default class SendMoney extends React.Component{
    renderIcon(type){
        if(type==='Mobile Recharge'){
            return <MobileIcon/>
        }
        else  if(type==='Bill Payments'){
            return <BillIcon/>
        }
        else  if(type==='Bank Transfer'){
            return <BankIcon/>
        }
        else  {
            return <NearbyIcon/>
        }

    }

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
                        <RegularText style={styles.title}>Send Money</RegularText>
                
                    </ImageBackground>
            {/* end of Header */}
                    <View style={styles.searchBox}>
                        <SearchIcon   />
                        <TextInput
                            style={styles.input}
                            placeholder="Search people or enter a number"
/>

                    </View>
                {/* start of payment type */}
                    <View style={{flexDirection:'row',width:'100%',paddingHorizontal:wp(30),justifyContent:'space-between',marginTop:hp(25)}}>
                        {
                            PaymentType.map((item,index)=>{
                                return(
                                    <TouchableOpacity key={index}  style={styles.eachType}>
                                        <View style={styles.circle}>
                                            {this.renderIcon(item)}
                                        </View>
                                        <BoldText style={styles.typeText}>{item}</BoldText>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                {/* end of Payment type */}
                <View style={styles.ContactView}>
                    <BoldText style={{color:'#4A4956',fontSize:hp(16),lineHeight:hp(21)}}>YayPay Contacts</BoldText>
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
            </ScrollView>
            </View>
        )
    }
}

const styles =StyleSheet.create({
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