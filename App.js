import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { default as HomeScreen} from './screens/Home'

const Stack = createNativeStackNavigator()

const App = () => {
   return (
      <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
         </Stack.Navigator>
      </NavigationContainer>
   );
}

export default App