import { View, Text ,Image ,StyleSheet} from 'react-native'
import React from 'react'
import logo from '../assest/cal_logo.png'

const SplashScreen = () => {
  return (
    <View style={styles.container}>
       <View style={styles.inner}>
       <Image source={logo} style={styles.innerimg}/>
       </View>
        
          
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'column',
        height:'100%',
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        width:'100%'

    },
    inner:{
        height:100,
        width:100,
        backgroundColor:'inherit'
    
    },
    innerimg:{
        width:100,
        height:100,
    }

    

    
})

export default SplashScreen