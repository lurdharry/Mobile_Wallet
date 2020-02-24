import React from 'react'
import {Text} from 'react-native'


export const RegularText =(props)=>{
    return(
    <Text {...props} style={[props.style,{fontFamily:'Roboto-Regular'}]}>{props.children}</Text>
    )
}
export const BoldText =(props)=>{
    return(
    <Text {...props} style={[props.style,{fontFamily:'Roboto-Medium'}]}>{props.children}</Text>
    )
}