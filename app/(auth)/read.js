import { View, Text } from 'react-native'
import React, { useCallback, useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router, useFocusEffect } from 'expo-router'
import { Button } from 'react-native-paper'
import { agreementStore } from '../../src/stores/aggrementStore'
import { Image } from 'expo-image'
import MyColors from '../../src/constants/MyColors'
import { Entypo } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'



const Read = () => {
    const navigationRef = useRef(false)
    const readTerms = agreementStore(state => state.readTerms)
    const markTerms = agreementStore(state => state.markTerms)
    const readPrivacy = agreementStore(state => state.readPrivacy)
    const markPrivacy = agreementStore(state => state.markPrivacy)


    useFocusEffect(
        useCallback(()=> {
            navigationRef.current = false
        })
    )




  return (
    <SafeAreaView style={{flex:1, paddingTop:180}} >
                <View  style={{position:'absolute', top:0, left:0, right:0, bottom:0, opacity:0.6, backgroundColor:MyColors.LIGHT_PRIMARY}} />

<View style={{width:'100%', justifyContent:'center', alignItems:'center', gap:30, paddingHorizontal:20,}}>

<Image source={require('../../assets/images/people.png')} style={{width:220, height:220}} />
<Text style={{fontFamily:'Outfit-Regular', fontSize:16, color:'black', textAlign:'center'}}>
    Once you confirmed, you can proceed to the next ste
</Text>

</View>


<View style={{width:'100%', gap:12, paddingHorizontal:100, marginVertical:40}}>

    <Button mode='contained' onPress={()=> {
        if(navigationRef.current) return
        navigationRef.current = true
        router.push({pathname:'/textScreen', params:{id:'terms'}})
    }}
    style={{backgroundColor:readTerms ? MyColors.DARK_GREY : 'rgb(236, 236, 236)'}}
    theme={{roundness:2}}
    labelStyle={{fontFamily:'Outfit-Regular', fontSize:16, color:readTerms ? 'white' : 'rgb(167, 167, 167)'}}
    >
        Terms of Services
    </Button>   

    <View style={{justifyContent:'center', alignItems:'center'}}>
    <Entypo name="chevron-small-down" size={24} color="gray" />
    </View>

<Button mode='contained' onPress={()=> {

    if(navigationRef.current) return
    navigationRef.current = true
    router.push({pathname:'/textScreen', params:{id:'privacy'}})
}}
theme={{roundness:2}}
style={{backgroundColor:readPrivacy ? MyColors.DARK_GREY : 'rgb(236, 236, 236)'}}
labelStyle={{fontFamily:'Outfit-Regular', fontSize:16, color:readPrivacy ? 'white' : 'rgb(167, 167, 167)'}}
>
    Privacy Policy
</Button>

    </View>



    <View style={{marginTop:'auto', paddingHorizontal:20, marginBottom:20}}>

        <Button mode='contained' onPress={()=> {
            if(navigationRef.current) return
            navigationRef.current = true
            router.push('/register')
            
            markTerms(false)
            markPrivacy(false)
        }}
        disabled={!(readPrivacy && readTerms)}
        style={{backgroundColor: readPrivacy && readTerms ? MyColors.DARK_GREY : 'rgb(236, 236, 236)', height:44}}
        theme={{roundness:2}}
        contentStyle={{height:44}}
        labelStyle={{fontFamily:'Outfit-Regular', fontSize:16, color:readPrivacy && readTerms ? 'white' : 'rgb(167, 167, 167)'}}
        >
            Next
        </Button>


    </View>



    </SafeAreaView>
  )
}

export default Read