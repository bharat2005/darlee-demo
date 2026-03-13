import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useCurrentUser } from '../../src/hooks/useCurrentUser'

import MySectionList from '../../src/components/ProfileScreen/MySectionList'
import ScreenHeader from '../../src/components/Shared/ScreenHeader'


const ProfileScreen = () => {
     const {data: user} = useCurrentUser()


  return (
    <SafeAreaView style={{flex:1}}>
        <ScreenHeader title={"Profile"} />

        <MySectionList user={user} />
        
    </SafeAreaView>
  )
}

export default ProfileScreen