import React,{Component} from 'react'
import {View,StyleSheet,Text,ScrollView, ImageBackground,Image,TextInput} from 'react-native'
import {hp,wp} from '../styles/MainStyle'
import {RegularText,BoldText } from  '../components/RobotoText'
import MenuIcon from '../assets/svgs/MenuIcon.svg'
import BackIcon from '../assets/svgs/LeftArrow.svg'
import RightArrow from '../assets/svgs/Right.svg'
import FoodIcon from '../assets/svgs/food.svg'
import CarIcon from '../assets/svgs/car.svg'
import MovieIcon from '../assets/svgs/movie.svg'
import Shopping from '../assets/svgs/shopping.svg'
import UserIcon from '../assets/svgs/UserIcon2.svg'
import { TouchableOpacity } from 'react-native-gesture-handler'


const Months=['Jan 2019','Feb 2019','March 2019','Apr 2019','May 2019','June 2019','July 2019','Aug 2019']
const Categories=[
    {
        name:'Food',
        img:<FoodIcon/>,
        amount:350
    },
    {
        name:'Fuel',
        amount:150,
        img:<ImageBackground style={{
        height:(81/99)*wp(99),
        width:wp(99),
        alignItems:'center',
        justifyContent:'center',
        paddingLeft:wp(12)
    }} resizeMode='contain' source={require('../assets/images/FuelBg.png')} >
                 <CarIcon/>
        </ImageBackground>,
        
    },
    {
        name:'Movies',
        img:<ImageBackground style={{
        height:(81/99)*wp(99),
        width:wp(99),
        alignItems:'center',
        justifyContent:'center',
        paddingLeft:wp(12)
    }} resizeMode='contain'
             source={require('../assets/images/MovieBg.png')} >
                <MovieIcon/>
            </ImageBackground>,
        amount:600
    },
    {
        name:'Shopping',
        img:<ImageBackground style={{
        height:(81/99)*wp(99),
        width:wp(99),
        alignItems:'center',
        justifyContent:'center',
        paddingLeft:wp(12)
    }} resizeMode='contain' 
            source={require('../assets/images/ShopBg.png')} 
            >
                <Shopping/>
            </ImageBackground>,
        amount:500
    },
]
export default class ManageMoney extends React.Component{
        state={
            months:Months,
            index:5
        }
nextMonth(){
    if(this.state.index<=8){
    this.setState({index:this.state.index+1})
    }
}
prevMonth(){
    // if(this.state.index>this.state.months.length){
    this.setState({index:this.state.index-1})
    // }
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
                        <RegularText style={styles.title}>Manage Money</RegularText>
                
                    </ImageBackground>
            {/* end of Header */}
            {/* start of month */}
                <View style={styles.topView}>
                    <View style={styles.dateView}>
                        <TouchableOpacity onPress={()=>this.prevMonth()}>
                            <RightArrow style={styles.rightTranL}/>
                        </TouchableOpacity>
                        { this.state.months.length>=1&&
                        <BoldText style={styles.dateText}>
                            {this.state.months[this.state.index]}
                        </BoldText>
                            }
                        <TouchableOpacity onPress={()=>this.nextMonth()}>
                            <RightArrow />
                        </TouchableOpacity>
                    </View>
                </View>

            {/* end of month */}
            <View style={styles.expenSummary}>
                <BoldText style={styles.summary}>Expenditure Summary</BoldText>
                <View style={styles.CatContainer}>
                    {
                        Categories.map((item,index)=>{
                            return(
                                <Category
                                    details={item}
                                    key={index}
                                />
                            )
                        })
                    }

                </View>


            </View>
            </ScrollView>
        </View>
        )
    }
}
const Category=(props)=>{
    const {name,img,amount}=props.details
    return(
        <View style={styles.catItem}>
            {img}
            <RegularText style={styles.amount}>{name}</RegularText>
            <RegularText style={styles.name}>${amount}</RegularText>
        </View>
    )
}
const styles =StyleSheet.create({
    imageBg:{
        height:(81/99)*wp(99),
        width:wp(99),
        alignItems:'center',
        justifyContent:'center',
        paddingLeft:wp(12)
    },
    name:{
        fontSize:hp(22),
        lineHeight:hp(29),
        color:'#4a4956'
    },
    amount:{
        fontSize:hp(16),
        lineHeight:hp(21),
        marginVertical:hp(20),
        color:'#787786'
    },
    catItem:{
        height:(195/155)*wp(155),
        width:wp(155),
        borderRadius:hp(10),
        backgroundColor:'white',
        alignItems:'center',
        paddingVertical:hp(15),
        marginBottom:hp(15)
    },
    CatContainer:{
        flexDirection:'row',
        flexWrap:'wrap',
        paddingHorizontal:wp(22)
        ,justifyContent:'space-between',
    },
    summary:{
        fontSize:hp(18),
        textAlign:'center',
        lineHeight:hp(24),
        color:'#4a4956',
        marginBottom:hp(30)
    },
    expenSummary:{
        backgroundColor:'#f1ebfb',
        paddingTop:hp(25)
    },
    topView:{
        // borderBottomLeftRadius:hp(30)
    },
    dateText:{
        marginHorizontal:wp(10)
    },
    rightTranL:{
        transform:[{
            rotate:'180deg'
        }]
    },
    dateView:{
        alignItems:"center",
        alignSelf:'center',
        flexDirection:'row',
        marginTop:hp(25)
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
        backgroundColor:"white"
    },
})