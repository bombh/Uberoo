import { View, Text, SafeAreaView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
   const navigation = useNavigation()

   useLayoutEffect( () => {
      navigation.setOptions({
         headerShown: false
      })
   }, [])

   return (
      <SafeAreaView className="bg-red-400">
         <Text className="text-center font-black p-4">Home</Text>
      </SafeAreaView>
)
}

export default Home