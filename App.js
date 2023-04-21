import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './components/Home'
import RepetitionExercises from './components/RepetitionExercises'
import DurationExercises from './components/DurationExercises'


const Stack = createStackNavigator()

export default function App() {
  const exercises = [
    { name: "Push-Ups", type: 'repetition' },
    { name: "Running", type: 'duration' },
    { name: "Weights", type: 'weighted'}
  ]

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home'
        >{(props) => <Home {...props} exercises={exercises} />} 
        </Stack.Screen>
        <Stack.Screen name='Repetition' component={RepetitionExercises}>
        </Stack.Screen>
        <Stack.Screen name='Duration' component={DurationExercises}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
