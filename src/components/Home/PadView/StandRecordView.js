import { View, Text } from 'react-native'
import React, { useMemo } from 'react'
import { useRecords } from '../../../hooks/useRecord'
import { TouchableOpacity } from 'react-native'
import { dateStore } from '../../../stores/dateStore'
import IconsPreview from '../../Shared/IconsPreview'
import MyColors from '../../../constants/MyColors'


const StandRecordView = ({weekDays, selectedDate, handleSheet}) => {
    const {data:records} = useRecords(weekDays, {refetchOnWindowFocus:false, refetchOnMount:false})
    const setSelectedDate = dateStore(state => state.setSelectedDate)

    const record = useMemo(()=> {
        const record = records?.find(record => record?.docId === selectedDate)
        if(record) {
          const {condition, heart, message, body} = record
          const obj = {condition, heart, message, body}
          const list = Object.values(obj).filter(item => item !== '')
          return list.length > 0 ? list : null
        } else {
          return null
        }
    },[records, selectedDate])


    const onRecordPress = () => {
        setSelectedDate(selectedDate)
        handleSheet('open')
    }




    
    if(record === null) {
        return (
          <View style={{width:'84%', marginHorizontal:'auto', backgroundColor:MyColors.CIRCLE_COLOR, borderRadius:44,flex:1, marginVertical:16, justifyContent:'center', alignItems:'center', padding:8, paddingVertical:16, gap:8}}>
          <Text style={{color:MyColors.DARK_BLUE, fontSize:16, fontFamily:'Outfit-Medium', textAlign:'center', marginTop:'auto'}}>No Record Found</Text>
    
            <TouchableOpacity activeOpacity={0.7} onPress={onRecordPress} style={{backgroundColor:'rgb(233, 236, 255)', padding:10, borderRadius:14, marginTop:'auto', paddingHorizontal:24, elevation:1}}>
              <Text style={{color:MyColors.DARK_BLUE, fontSize:14, fontFamily:'Outfit-Medium', textAlign:'center'}}>Add Record</Text>
             </TouchableOpacity>
        </View>
        )
    }


  return (
    <View style={{width:'84%', marginHorizontal:'auto', backgroundColor:MyColors.CIRCLE_COLOR, borderRadius:44,flex:1, marginVertical:16, justifyContent:'center', alignItems:'center', padding:8, paddingVertical:16, gap:8}}>
      <Text style={{color:MyColors.DARK_BLUE, fontSize:16, fontFamily:'Outfit-Medium', textAlign:'center'}}>Your Record</Text>
        <IconsPreview array={record} />

        <TouchableOpacity activeOpacity={0.7} onPress={onRecordPress} style={{backgroundColor:'rgb(224, 228, 255)', padding:10, borderRadius:14, marginTop:'auto', paddingHorizontal:24, elevation:1}}>
          <Text style={{color:MyColors.DARK_BLUE, fontSize:14, fontFamily:'Outfit-Medium', textAlign:'center'}}>Edit Record</Text>
         </TouchableOpacity>
    </View>
  )
}

export default StandRecordView