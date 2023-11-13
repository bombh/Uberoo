import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView
      className=""
      horizontal
      contentContainerStyle={{ columnGap: 6}}
    >
      
      {/* CategoryCard */}
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
    </ScrollView>
  )
}

export default Categories