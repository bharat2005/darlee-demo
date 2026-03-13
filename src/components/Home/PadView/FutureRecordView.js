import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { getWeekKey } from '../../../utils/getWeekKey'
import { useMoodPredictions } from '../../../hooks/useMoodPredictions'
import { geminiMoodPrediciton } from '../../../services/gemini/geminiMoodPrediciton'
import { useQueryClient } from '@tanstack/react-query'
import Toast from 'react-native-toast-message'
import IconsPreview from '../../Shared/IconsPreview'
import MyColors from '../../../constants/MyColors'

const FutureRecordView = ({selectedDate}) => {
  const weekKey = getWeekKey(selectedDate)  
  const {data: predictions, isLoading} = useMoodPredictions(weekKey)
  const queryClient = useQueryClient()

  useEffect(()=> {
    if(isLoading || predictions) return
    handlePrediciton()
  },[isLoading, predictions])



  const handlePrediciton = async () => {
    const res = await geminiMoodPrediciton(weekKey)
    if(res.success) {
      queryClient.setQueryData(['mood-predictions', weekKey], res.data)
      queryClient.invalidateQueries({queryKey: ['mood-predictions', weekKey]})
    } else {
      Toast.show({
        text1: 'Error',
        text2: 'Failed to get mood prediction',
        type: 'custome',
        props:{success: false}
      })
    }
  }

  if(isLoading) {
    return (
<View style={{width:'84%', marginHorizontal:'auto', backgroundColor:MyColors.CIRCLE_COLOR, borderRadius:44,flex:1, marginVertical:16, justifyContent:'center', alignItems:'center', padding:8, paddingVertical:0, gap:8}}>
<ActivityIndicator size='large' color={MyColors.DARK_BLUE} />
</View>
    )
  }


  return (
<View style={{width:'84%', marginHorizontal:'auto', backgroundColor:MyColors.CIRCLE_COLOR, borderRadius:44,flex:1, marginVertical:16, justifyContent:'center', alignItems:'center', padding:8, paddingVertical:0, gap:8}}>
<Text style={{color:MyColors.DARK_BLUE, fontSize:16, fontFamily:'Outfit-Medium', textAlign:'center', position:'absolute', top:18}}>Mood Forecast</Text>
  <IconsPreview array={predictions ? Object.values(predictions) : []} />

</View>
  )
}

export default FutureRecordView