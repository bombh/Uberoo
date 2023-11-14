import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
   return (
   <ScrollView
      horizontal
      contentContainerStyle={{
         columnGap: 10,
         paddingHorizontal: 3,
         paddingTop: 5
      }}
      showsHorizontalScrollIndicator={false}
   >
      
      {/* CategoryCard */}
      <CategoryCard
         title="Sushi"
         imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Nigiri_Sushi_%2826478725732%29.jpg/280px-Nigiri_Sushi_%2826478725732%29.jpg" />
      
      <CategoryCard
         title="Thaï"
         imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Nigiri_Sushi_%2826478725732%29.jpg/280px-Nigiri_Sushi_%2826478725732%29.jpg" />
      
      <CategoryCard
         title="Italian"
         imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Nigiri_Sushi_%2826478725732%29.jpg/280px-Nigiri_Sushi_%2826478725732%29.jpg" />

      <CategoryCard
         title="Italian"
         imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Nigiri_Sushi_%2826478725732%29.jpg/280px-Nigiri_Sushi_%2826478725732%29.jpg" />

      <CategoryCard
         title="Italian"
         imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Nigiri_Sushi_%2826478725732%29.jpg/280px-Nigiri_Sushi_%2826478725732%29.jpg" />

      <CategoryCard
         title="Italian"
         imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Nigiri_Sushi_%2826478725732%29.jpg/280px-Nigiri_Sushi_%2826478725732%29.jpg" />

      <CategoryCard
         title="Italian"
         imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Nigiri_Sushi_%2826478725732%29.jpg/280px-Nigiri_Sushi_%2826478725732%29.jpg" />

    
   </ScrollView>
  )
}

export default Categories