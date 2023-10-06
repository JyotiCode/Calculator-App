import { View, Text ,StyleSheet} from 'react-native'
import React,{useState} from 'react'
import SplashScreen from './src/views/SplashScreen'
import MainScreen from './src/views/MainScreen'

const App = () => {
  const[isloaded,setIsLoaded]=useState(false)

  setTimeout(()=>{
    setIsLoaded(true)
  },3000)
  
  return (
    <View style={styles.container}>
      {isloaded ? <MainScreen/>: <SplashScreen/>}
    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
    
  }
})

export default App