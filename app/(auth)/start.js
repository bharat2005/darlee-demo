import { Image } from 'expo-image'
import { router, useFocusEffect } from 'expo-router'
import React, { useCallback, useRef } from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import Flower from '../../assets/svgs/Flower'
import MyColors from '../../src/constants/MyColors'
import MyVideoView from '../../src/components/Shared/MyVideoView'



const Start = () => {
  const navigationRef = useRef(false)

  useFocusEffect(useCallback(()=> {
    navigationRef.current = false
  }))




  return (
 
    <SafeAreaView style={{flex:1, paddingTop:120, backgroundColor:'rgba(201, 173, 255, 0.6)'}}>


      

<View style={{width:'100%', justifyContent:'center', alignItems:'center', marginBottom:28}}>

  <Flower height={80} widthP={80} color={'white'} />

</View>

<View style={{width:'100%', justifyContent:'center', alignItems:'center', paddingHorizontal:14, gap:18}}>
<Text style={{fontFamily:'Outfit-Regular', fontSize:18, color:MyColors.DARK_BLUE, textAlign:'center'}}>
Smart insights for your mind and body
  </Text>
  <Text style={{fontFamily:'Outfit-Medium', fontSize:32, color:MyColors.DARK_BLUE, textAlign:'center', paddingHorizontal:24}}>
Where Mental Wellness. Meets Cycle Care...
    </Text>

</View>


<View style={{width:'100%', marginTop:220, paddingHorizontal:60, gap:16}}>

<Button mode='contained' 
onPress={()=> {
  if(navigationRef.current) return
  navigationRef.current = true
  router.push('/read')
}}
style={{backgroundColor:MyColors.DARK_GREY, height:44}}
contentStyle={{height:44}}
theme={{roundness:2}}
labelStyle={{fontFamily:'Outfit-Regular', fontSize:16, color:'white',}}
>
Start New
</Button>   

<Button mode='text' onPress={()=> {
  if(navigationRef.current) return
  navigationRef.current = true
  router.push('/login')
}}
style={{ height:44, borderWidth:0.5, borderColor:'black', backgroundColor:'white'}}
contentStyle={{height:44}}
theme={{roundness:2}}
labelStyle={{fontFamily:'Outfit-Regular', fontSize:16, color:'black',}}
>
Already have an account?
</Button>   
      </View>

    

    </SafeAreaView>
    
  )
}

export default Start