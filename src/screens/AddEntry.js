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
import MarkIcon from '../assets/svgs/mark.svg'
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
export default class AddEntry extends React.Component{
        state={
            months:Months,
            index:5,
            entryType:'hey',
            category:null
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
AddedItem(){
    alert('Entry Added')
}
    render(){
        return(
            <View style={styles.container}>
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
                        <RegularText style={styles.title}>Add Entry</RegularText>
                
                    </ImageBackground>
            {/* end of Header */}
                <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>

            {/* start of Entry type */}
                <View style={styles.EntryView}>
                    <TouchableOpacity onPress={()=>this.setState({entryType:'Income'})} style={this.state.entryType==='Income'?styles.typeBoxActive:styles.typeBox} >
                        {
                            this.state.entryType==='Income'?
                            <BoldText style={styles.activeText}>Income</BoldText>
                            :
                            <RegularText style={styles.inactiveText}>Income</RegularText>
                        }

                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.setState({entryType:'Expense'})} style={this.state.entryType==='Expense'?styles.typeBoxActive:styles.typeBox} >
                        {
                            this.state.entryType==='Expense'?
                            <BoldText style={styles.activeText}>Expense</BoldText>
                            :
                            <RegularText style={styles.inactiveText}>Expense</RegularText>
                        }

                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.setState({entryType:'Transfer'})} style={this.state.entryType==='Transfer'?styles.typeBoxActive:styles.typeBox} >
                        {
                            this.state.entryType==='Transfer'?
                            <BoldText style={styles.activeText}>Transfer</BoldText>
                            :
                            <RegularText style={styles.inactiveText}>Transfer</RegularText>
                        }

                    </TouchableOpacity>

                </View>
            <View >
                <TextInput
                    style={styles.inputForm}
                    placeholder='How much?'
                
                />
                <TextInput
                    style={styles.inputForm}
                    placeholder='Where did you spend this money'
                
                />

            </View>

            {/* end of Entry type */}
            <View style={styles.expenSummary}>
                <BoldText style={styles.summary}>Which Category does this belong to?</BoldText>
                <View style={styles.CatContainer}>
                    {
                        Categories.map((item,index)=>{
                            return(
                            <TouchableOpacity
                                activeOpacity={.5}
                                key={index}
                                onPress={()=>this.setState({category:item.name})}  style={styles.catItem}
                             >
                                {
                                    this.state.category===item.name?
                                    <View style={styles.selected}>
                                        <MarkIcon style={styles.mark}/>
                                    </View>
                                    :
                                    <View style={styles.notSelected}></View>
                                }
                                {item.img}
                                <RegularText style={styles.amount}>{item.name}</RegularText>
                            </TouchableOpacity>
                            )
                        })
                    }

                </View>


            </View>
            </ScrollView>
            <View style={{position:'absolute',bottom:hp(20),alignSelf:'center'}}>
                <TouchableOpacity onPress={()=>this.AddedItem()} style={styles.Add}>
                    <BoldText style={{color:'white',fontSize:hp(16)}}>Add Expense</BoldText>
                </TouchableOpacity>
            </View>
        </View>
        
        )
    }
}
const styles =StyleSheet.create({
    inputForm:{
        width:wp(315),
        borderBottomWidth:hp(1),
        borderColor:'#979797',
        alignSelf:'center',
        color: '#787786',
        fontFamily: "Roboto-Regular",
        fontSize: hp(16),
        fontWeight: '400',
        lineHeight: hp(21),
        paddingTop:hp(21)
    },
    formBox:{
        paddingVertical:hp(20)
    },
    Add:{
        // // position:'absolute',
        // position:'relative',
        height:(57/203)*wp(203),
        width:wp(203),
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:hp(28.5),
        backgroundColor:'#712ce2',
        bottom:hp(10)
    },
    mark:{
        width:wp(10),
        height:(8/10)*wp(10)
    },
    notSelected:{
        width:wp(22),
        height:wp(22),
        marginTop:hp(10),
        marginBottom:hp(10)
    },
    selected:{
        width:wp(22),
        height:wp(22),
        marginTop:hp(10),
        marginBottom:hp(10),
        borderRadius:wp(11),
        backgroundColor:'#712ce2',
        alignItems:'center',
        justifyContent:'center'
    },
    activeText:{
        fontSize:hp(16),
        lineHeight:hp(21),
        color:'#ffffff',
        fontWeight:'400'
    },
    inactiveText:{
        fontSize:hp(16),
        lineHeight:hp(21),
        color:'#787786',
        fontWeight:'400'
    },
    typeBox:{
        alignItems:'center',
        justifyContent:'center',
        width:wp(91),
        height:(42/91)*wp(91),
        borderRadius:hp(17),
        backgroundColor:'#f1ebfb'
    },
    typeBoxActive:{
        alignItems:'center',
        justifyContent:'center',
        width:wp(91),
        height:(42/91)*wp(91),
        borderRadius:hp(17),
        backgroundColor:'#712ce2'
    },
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
        fontSize:hp(16),
        textAlign:'center',
        lineHeight:hp(21),
        color:'#4a4956',
        marginBottom:hp(30)
    },
    expenSummary:{
        backgroundColor:'#f1ebfb',
        paddingTop:hp(25)
    },
    EntryView:{
        flexDirection:'row',
        justifyContent:"space-between",
        paddingHorizontal:wp(50),
        paddingTop:hp(22)
      
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
        backgroundColor:"#f1ebfb"
    },
})