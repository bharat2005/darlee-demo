import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Feather, FontAwesome5, Ionicons, Octicons } from '@expo/vector-icons'
import MyColors from '../../src/constants/MyColors'

const MainLayout = () => {
  return (
<Tabs 
screenOptions={{
  headerShown:false, 
  tabBarActiveTintColor:MyColors.DARK_BLUE,
   }}
   >


<Tabs.Screen name='home' 
options={{tabBarIcon:({focused, color})=> <Octicons name="home" size={22} color={color} />,
tabBarLabel:'Home',
tabBarLabelStyle:{fontSize:10, fontFamily:'Outfit-Light'}
}} />


  <Tabs.Screen name='chat' 
  options={{tabBarIcon:({focused, color})=> <Ionicons name="chatbubble-ellipses-outline" size={24} color={color} />,
tabBarLabel:'Chat',
tabBarLabelStyle:{fontSize:10, fontFamily:'Outfit-Light'}
}} />






<Tabs.Screen name='magzine' 
options={{
  tabBarIcon:({focused, color})=><Feather name="book-open" size={22} color={color} />,
  tabBarLabel:'Magzine',
  tabBarLabelStyle:{fontSize:10, fontFamily:'Outfit-Light'}
  }} />
  
  
  
  
  <Tabs.Screen name='calander' 
  options={{
    tabBarIcon:({focused, color})=> <FontAwesome5 name="calendar-alt" size={22} color={color} />,
  tabBarLabel:'Calander',
  tabBarLabelStyle:{fontSize:10, fontFamily:'Outfit-Light'}
  }} />
</Tabs>
  )
}

export default MainLayout