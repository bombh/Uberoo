import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CategoryCard = ({ title, imgUrl }) => {
  return (
   <TouchableOpacity className="relative">
      <Image source={{ uri: imgUrl }}
         className="rounded w-20 h-20"
         
      />

      <Text className="absolute bottom-1 left-3 text-white font-bold">{title}</Text>
      
   </TouchableOpacity>
  )
}

export default CategoryCard