import { View, Text } from 'react-native'
import React from 'react'
import { useVideoPlayer, VideoView } from 'expo-video'
import MyColors from '../../constants/MyColors'

const MyVideoView = () => {

//   const videoPlayer = useVideoPlayer(require('../../../assets/videos/video.mp4'), player => {
// player.loop = true
// player.muted = true
// player.play()
//   })

  return (
    <View style={{height:'100%', width:'100%', backgroundColor:MyColors.PRIMARY,  position:'absolute'}} />
  // <VideoView player={videoPlayer} style={{position:'absolute', top:0, left:0, right:0, bottom:0, zIndex:0}}  nativeControls={false} contentFit='cover'/>
  )
}

export default MyVideoView