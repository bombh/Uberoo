import { View, Text } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'

const FeaturedRow = ({ id, title, description }) => {
   return (
      <View>
         <View className="flex-row items-center justify-between mt-5" >
         <Text className="font-bold text-lg">{title}</Text>
         <ArrowRightIcon color={"#00CCBB"} />
         </View>
         <Text>{description}</Text>
      </View>
  )
}

export default FeaturedRow