import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

import {
   View,
   Text,
   SafeAreaView,
   Image,
   TextInput,
   ScrollView } from 'react-native'

import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'

import {
   ChevronDownIcon,
   UserIcon,
   MagnifyingGlassIcon,
   AdjustmentsVerticalIcon
} from 'react-native-heroicons/outline'

const Home = () => {
   const navigation = useNavigation()

   useLayoutEffect( () => {
      navigation.setOptions({
         headerShown: false
      })
   }, [])

   return (
      <SafeAreaView className="bg-white">
         {/* Header */}
         <View className="flex-row items-center space-x-2 p-3">
            <Image
               source={{
                  uri: 'https://barnies.fr/wp-content/uploads/2016/03/Picasso-square.jpg'
               }}
               resizeMode='contain'
               className="w-12 h-12 bg-gray-300 p-4 rounded-full"
            />

            <View className="flex-1">
               <Text className="font-bold text-gray-400 text-xs">Deliver now !</Text>
               <Text className="font-bold text-xl">
                  Current location
                  <ChevronDownIcon size={20} color={"#00CCBB"} />
               </Text>
            </View>

            <UserIcon size={35} color={"#00CCBB"} />
         </View>

         {/* Search */}
         <View className="flex-row items-center space-x-2 pb-3 mx-3">
            <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
               <MagnifyingGlassIcon color="gray" size="20" />
               <TextInput
                  placeholder='Restaurants & Cuisines'
                  keyboardType='default'
               />
            </View>

            <AdjustmentsVerticalIcon size={25} color={"#00CCBB"} />
         </View>

         {/* Body */}
         <ScrollView className="p-3" >

            {/* Categories */}
            <Categories />

            {/* Featured Rows */}
            <FeaturedRow 
               id="123"
               title="Featured"
               description="Paid placements from our partners"
               featuredCategory="featured"
               />

            {/* Tasty */}
            <FeaturedRow 
               id="1234"
               title="Tasty for you"
               description="PJuicy discount for everyone !"
               featuredCategory="featured"
               />

            {/* Near you */}
            <FeaturedRow 
               id="12345"
               title="Near you"
               description="Support local restaurants tonight !"
               featuredCategory="featured"
            />


         </ScrollView>

      </SafeAreaView>
)
}

export default Home