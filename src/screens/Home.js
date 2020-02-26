import React,{Component} from 'react'
import {View,StyleSheet,Text,ScrollView, ImageBackground,Image} from 'react-native'
import {hp,wp} from '../styles/MainStyle'
import {RegularText,BoldText } from  '../components/RobotoText'
import HomeBG from '../assets/svgs/HomeBG.svg'
import MenuIcon from '../assets/svgs/MenuIcon.svg'
import RightArrow from '../assets/svgs/Right.svg'
import UserIcon from '../assets/svgs/UserIcon.svg'
import SendIcon from '../assets/svgs/SendMoney.svg'
import Piggy from '../assets/svgs/Piggy.svg'
// import OfferIcon from '../assets/svgs/OfferIcon.svg'
import {User} from '../components/UserData'
import {Actions} from '../components/action'
import { TouchableOpacity } from 'react-native-gesture-handler'
// import { ScrollView } from 'react-native-gesture-handler'
const toMoney =(num)=>{
    return  num.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
const firstCapital=(text)=>{
    return text[0]
}
ActionStyle=(title)=>{
    switch(title){
        case'Recieve Money':
            return styles.recieveMoney
        default:
            return styles.action
    }
}

export default class Home extends React.Component{
    GotoPage=(title)=>{
        if (title==='Send Money'){
            this.props.navigation.navigate('SendMoney')
        }
        else if (title==='Recieve Money'){
            this.props.navigation.navigate('RecieveMoney')
        }
        else if (title==='Manage Money'){
            this.props.navigation.navigate('SendMoney')
        }
        else if (title==='Offers'){
            this.props.navigation.navigate('SendMoney')
        }
    }
 ActionIcons=(title)=>{
        if(title==='Send Money'){
            return(
                <View style={{flexDirection:'row',alignItems:"center",justifyContent:'center',marginRight:wp(30)}}>
                    <View style={{backgroundColor:'#712CE2',width:wp(30),height:wp(30),borderRadius:wp(15)}}></View>
                    <SendIcon style={{marginLeft:wp(-10)}}/>
                </View>
            )
        }
        else if(title==='Recieve Money'){
            return(
                <View style={{flexDirection:'row',alignItems:"center",justifyContent:'center',marginRight:wp(30)}}>
                    <View style={{backgroundColor:'#712CE2',width:wp(30),height:wp(30),borderRadius:wp(15)}}></View>
                    <SendIcon style={{marginLeft:wp(-35)}}/>
                </View>
            )
        }
        else {
            return (
            <View style={{backgroundColor:title=='Manage Money'?'white':'#712CE2',
                
                width:wp(30),height:wp(30),marginRight:wp(30),alignItems:"center",justifyContent:'center',borderWidth:1,borderColor:'#712CE2',borderRadius:wp(15)}}>
                { title==='Manage Money'?
                <Piggy fill='white'/>
                :
               <Image style={{width:wp(14),height:wp(14)}} resizeMode='contain' source={require('../assets/images/Offer.png')}/>
                // <OfferIcon style={{width:wp(-10),height:wp(-10)}} resizeMode='contain' />
                }
            </View>
            )
        }
    } 
    render(){
        return(
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                <ImageBackground   
                    source={require('../assets/images/HomeBg.png')}
                    resizeMode='cover'
                    style={styles.svg}
                
                >
                {/* start of top view */}
                <View style={styles.topView}>
                    <View style={styles.LeftTopView}>
                        <View style={styles.circle}>
                            <UserIcon/>
                        </View>
                        <View style={{marginLeft:wp(12)}}>
                            <BoldText style={styles.name}>{User.first_name} <BoldText>{firstCapital(User.last_name)}</BoldText></BoldText>
                            <RegularText style={styles.name}>{User.email}</RegularText>
                        </View>

                    </View>
                    <MenuIcon style={styles.menu}/>
                </View>
             
                </ImageBackground>
            {/* end of top view */}
            {/* start of bottom View */}
                <View style={styles.bottomView}>
                    {
                        Actions.map((item,index)=>{
                            return(
                            
                                        <TouchableOpacity onPress={()=>this.GotoPage(item.title)} style={ActionStyle(item.title)}>
                                            {this.ActionIcons(item.title)}
                                            <BoldText style={{fontSize:hp(16),color:"#712ce2"}}>{item.title}</BoldText>
                                            <RightArrow style={styles.arrow}/>
                                
                                        </TouchableOpacity>
            
                            )
                        })
                    }
                    
                </View>
            {/* end of bottomView */}
                <ScrollView style={styles.scroll} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.AccountScroll} horizontal={true} >
                    {
                        User.Account.map((item,index)=>{
                            return(
                                <Account
                                    AccountDetails={item}
                                    key={index}
                                />
                            )
                        })
                    }


                </ScrollView>
</ScrollView>
            </View>
        )
    }
}

const Transactions=(props)=>{
    const{title,img} =props.details
    return(
        <TouchableOpacity onPress={()=>props.navigation.navigate('SendMoney')} style={ActionStyle(title)}>
            {ActionIcons(title)}
            <BoldText style={{fontSize:hp(16),color:"#712ce2"}}>{title}</BoldText>
            <RightArrow style={styles.arrow}/>

        </TouchableOpacity>
    )
}
const Account=(props)=>{
    const {account_number,current_balance} =props.AccountDetails
    return(
        <View style={styles.Accounts}>
            <RegularText style={{fontSize:hp(12),color:"#787786",fontWeight:'400'}}>Bank Account</RegularText>
            <RegularText style={{fontSize:hp(16),color:"#4a4956",marginTop:hp(15)}}>{account_number}</RegularText>
            <RegularText style={{fontSize:hp(12),color:" #787786",marginTop:hp(30)}}>Current Balance</RegularText>
            <RegularText style={styles.currentBalance}>${toMoney(current_balance)}</RegularText>
            <TouchableOpacity style={{marginTop:hp(50),flexDirection:'row',alignItems:'center'}}>
                <BoldText style={{fontSize:hp(16),color:"#712ce2"}}>View Statement</BoldText>
                <RightArrow style={styles.arrow}/>
            </TouchableOpacity>
        </View>
    )
}
const styles =StyleSheet.create({
    actionCircle:{
        width:wp(20),
        height:wp(20),
        borderRadius:wp(10),
        alignSelf:'center'
        // alignItems:'center',
        // justifyContent:'center',
        // backgroundColor:'red'
    },
    currentBalance:{fontSize:hp(28),color:"#4a4956",lineHeight:hp(37)},
    menu:{
        width:wp(21),
        height:(11/21)*wp(21),
        
    },
    arrow:{
        width:wp(24),
        height:wp(24)
    },
    recieveMoney:{
        marginTop:hp(12),
        width:wp(345),
        height:(72/345)*wp(345),
        backgroundColor:'white',
        borderTopLeftRadius:hp(50),
        borderBottomLeftRadius:hp(50),
        flexDirection:'row',
        alignItems:'center',
        // justifyContent:'center',
        paddingLeft:wp(25)
    },
    action:{
        marginTop:hp(12),
        alignItems:'center',
        width:wp(345),
        height:(72/345)*wp(345),
        // justifyContent:'center',

        backgroundColor:'white',
        // borderTopLeftRadius:hp(50),
        // borderBottomLeftRadius:hp(50),
        flexDirection:'row',
        paddingLeft:wp(25)
    },
    bottomView:{
        marginTop:hp(120),
        paddingLeft:wp(30),
        marginBottom:hp(30)
    },
    scroll:{
        position:'absolute',
        top:hp(140)
    },
    Accounts:{
        backgroundColor:'rgba(255,255,255,0.8)',
        // borderWidth:1,
        // borderColor:'black',
        borderRadius:hp(10),
        width:wp(185),
        height:(222/185)*wp(185),
        paddingVertical:hp(20),
        paddingHorizontal:wp(20),
        marginLeft:wp(10)
    },
    AccountScroll:{
        paddingHorizontal:wp(20),
        paddingVertical:hp(20),
        
    },
    name:{
        fontSize:hp(16),
        color:'white'
    },
    circle:{
        width:wp(44),
        height:wp(44),
        borderRadius:wp(22),
        backgroundColor:'white',
        alignItems:"center",
        justifyContent:'center'
    },
    LeftTopView:{
        flexDirection:"row",
        alignItems:"center"
    },
    topView:{
        paddingTop:hp(35),
        paddingHorizontal:wp(22),
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:"center"
    },
    svg:{
        height:(262/375)*wp(375),
        width:wp(375)
    },
    container:{
        flex:1,
        // alignItems:"center",
        backgroundColor:"#f1ebfb"
    },
})