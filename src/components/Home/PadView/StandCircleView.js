import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import React, { useMemo, useState } from 'react'
import { router } from 'expo-router'
import { usePeriods } from '../../../hooks/usePeriods'
import { differenceInCalendarDays, isAfter, isWithinInterval, parseISO } from 'date-fns'
import ordinal from 'ordinal'
import MyColors from '../../../constants/MyColors'
import { FontAwesome6 } from '@expo/vector-icons'

const StandCircleView = ({seletedDate}) => {
  const {data: periods} = usePeriods()
  const [isPeriod, setIsPeriod] = useState(false)

  const text = useMemo(()=> {
    if(periods?.length === 0 || !periods) return {
      primaryText: 'No Periods Yet',
      secondaryText: 'Track periods to get started'
    }

    const today = parseISO(seletedDate)
    const sortedPeriods = periods?.filter(period => period.phase === 'period')?.sort((a,b)=> parseISO(a.start) - parseISO(b.start))

    const currentPeriod = sortedPeriods?.find(period => {
      const start = parseISO(period.start)
      const end = parseISO(period.end)
      return isWithinInterval(today, {start, end})
    })

    if(currentPeriod){
      const number = ordinal(differenceInCalendarDays(today, parseISO(currentPeriod.start)) + 1)
      setIsPeriod(true)
      return {
        primaryText: `${number} day of period`,
        secondaryText: `Predictated Peirod Date`
      }
    }

    const upcomingPeriod = sortedPeriods?.find(period => {
      const start = parseISO(period.start)
      return isAfter(start, today)
      
    })

    if(upcomingPeriod){
      const number = differenceInCalendarDays(parseISO(upcomingPeriod.start), today)
      setIsPeriod(false)
      return {
        primaryText: `${number} day${number === 1 ? '' : 's'} left`,
        secondaryText: `Until the period date`
      }
    }

    return {
      primaryText: 'No Periods Yet!',
      secondaryText: 'Track periods to get started'
    }


  },[seletedDate, periods])





  return (
      <View style={{width:275, height:275, marginTop:10,borderRadius:137.5,backgroundColor:MyColors.CIRCLE_COLOR, justifyContent:'center', alignItems:'center', gap:12, overflow:'hidden'}}>

<View style={{width:'100%', alignItems:'center', gap:18}}>
<Text style={{color: isPeriod ? 'tomato' : MyColors.DARK_BLUE, fontSize:15, fontFamily:'Outfit-Light', textAlign:'center'}}>{text?.secondaryText}</Text>
<Text style={{color: isPeriod ? 'tomato' : MyColors.DARK_BLUE, fontSize:30, fontFamily:'Outfit-Medium', textAlign:'center'}}>{text?.primaryText}</Text>
</View>

<View style={{borderRadius:24, overflow:'hidden', marginTop:32}}>
      <Pressable android_ripple={{color:'rgb(57, 63, 103)'}}
      onPress={()=> router.push('/periodCalanderScreen')} 
       style={{ backgroundColor:MyColors.DARK_BLUE, padding:10, paddingHorizontal:32, flexDirection:'row', alignItems:'center', gap:8}}>
<FontAwesome6 name="droplet" size={16} color="white" />
        <Text style={{color:'white', fontSize:16, fontFamily:'Outfit-Medium'}}>Track Periods</Text>

      </Pressable>
      </View>
        
      
    </View>
  )
}

export default StandCircleView