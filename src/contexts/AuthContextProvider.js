import { View, Text, Alert } from 'react-native'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { router } from 'expo-router'
import { useQueryClient } from '@tanstack/react-query'
import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync()

const AuthContext = createContext()

const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const queryClient = useQueryClient()



  useEffect(()=> {

   setTimeout(()=> {
    router.replace('/(main)/home')
    SplashScreen.hideAsync()
   }, 300)
    // const unsub = onAuthStateChanged(auth, async(u)=> {
    //   setUser(u)
    //   if(u){
    //     const res = await getDoc(doc(db, 'users', u?.uid))
    //     if(res.data()?.hasCompletedOnboarding === true){
    //       router.replace('/home')
    //     } else{
    //       router.replace('/(profileBuild)')
    //     }
    //   } else{
    //     router.replace('/start')
    //   } 
    //     requestAnimationFrame(() => {
    //       SplashScreen.hideAsync();
    //     });
    // })

    // return ()=>{
    //   unsub()
    // }

  },[])




  //   useEffect(()=> {

  //   GoogleSignin.configure({
  //     webClientId:''
  //   })

  // },[])

  const googleLogin = async() => {
    try{
      // await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog:true})
      // const {data} = await GoogleSignin.signIn()

      // const cred = await GoogleAuthProvider.credential(data?.idToken)
      // const res = await signInWithCredential(auth, cred)

      // const res2 = await getDoc(doc(db, 'users', res?.user?.uid))
      // if(res2.exists()) {
      //   router.replace('/home')
      //   return 
      // }


      // const docRef = doc(db, 'users', res?.user?.uid)
      // await setDoc(docRef, {
      //   uid: res?.user?.uid,
      //   profilePic: res?.user?.photoURL,
      //   createdAt: serverTimestamp(),
      //   email: res?.user?.email,
      //   hasCompletedOnboarding: false
      // })

      

    } catch(err){
      console.log("Error from googleLogin funtion",err.message)
      Alert.alert("Error",err.message )
    }
  }

  const emailRegister = async(email, password) => {
    try{
      if(email !== 'bharatvdeshm2005@gmail.com' && password !== 'bharat2005'){
        Alert.alert("Please use the correct email and password", "This email and password is not valid, please register/login with the correct email and password provided")
        return
      } 
      // const res = await createUserWithEmailAndPassword(auth, email, password)

      // const docRef = doc(db, 'users', res?.user?.uid)
      // await setDoc(docRef, {
      //   uid: res?.user?.uid,
      //   profilePic: '',
      //   createdAt: serverTimestamp(),
      //   email: res?.user?.email,
      //   hasCompletedOnboarding: false
      // })
      router.replace('/(profilebuild)')

    } catch(err){
      console.log("Error from emailRegister",err.message)
          Alert.alert("Error", err.message)
    }
  }


  const logout = async() => {
    try{
      router.replace('/start')
     
      // await signOut(auth)
      // queryClient.clear()

    } catch(err){
      console.log("Error from logout function", err.message)
      Alert.alert("Error", err.message)
    }
  }

  const emailLogin = async(email, password) =>{
    try{  

      if(email !== 'bharatvdeshm2005@gmail.com' && password !== 'bharat2005'){
        Alert.alert("Please use the correct email and password", "This email and password is not valid, please register/login with the correct email and password provided")  
        return
      } 
      // const res = await createUserWithEmailAndPassword(auth, email, password)

      // const docRef = doc(db, 'users', res?.user?.uid)
      // await setDoc(docRef, {
      //   uid: res?.user?.uid,
      //   profilePic: '',
      //   createdAt: serverTimestamp(),
      //   email: res?.user?.email,
      //   hasCompletedOnboarding: false
      // })
      router.replace('/(profilebuild)')
    // await signInWithEmailAndPassword(auth,email, password)

    } catch(err){
      console.log('Error from eamilLogin funtion', err.message)
      Alert.alert("Error", err.message)
    }
  }


  const forgetPass = async(email) => {
    try{
      // await sendPasswordResetEmail(auth, email)
      // return {success:true, error: ''}

    } catch(err){
      console.log("Error from forgetPasss funtion", err.message)
      Alert.alert("Error", err.message)
      return {success:false, error: err.message}
    }
  }

  const profileBuild = async(values) => {
    try{

      // await  setDoc(doc(db, 'users', auth.currentUser?.uid), {
      //   ...values,
      //   dob:Timestamp.fromDate(values?.dob),
      //   recentPeriodDate: Timestamp.fromDate(values?.recentPeriodDate),
      //   hasCompletedOnboarding:true
      // }, {merge:true})

      router.replace('/home')
      
    } catch (err){
      console.log("Error from profileBuild function", err.message)
    }
  }

  const deleteAccount = async() => {
    try{
      router.replace('/start')
      // await deleteDoc(doc(db, 'users', auth.currentUser?.uid))
      // await deleteUser(auth.currentUser)
      queryClient.clear()
    } catch(err){
      console.log("Error from deleteAccount function", err.message)
    }
  }
  
  return (

<AuthContext.Provider value={{ googleLogin, logout, emailRegister, emailLogin, forgetPass, profileBuild, deleteAccount, user }}>
    {children}
</AuthContext.Provider>

  )
}

export default AuthContextProvider

export const useAuth = () => useContext(AuthContext)