
import {StyleSheet} from 'react-native'
import {widthPercentageToDP,heightPercentageToDP,} from 'react-native-responsive-screen'

export const hp =(num)=>{
    return heightPercentageToDP((num/812)*100)
}
export const wp =(num)=>{
    return widthPercentageToDP((num/375)*100)
}
