import React from "react";
import { View, Text, TouchableOpacity } from 'react-native'

export default function Home({navigation, exercises}) {
    const handleButtonPress = (exercises) => {
        switch(exercises.type) {
            case "repetition":
                navigation.navigate("Repetition", {exercise: exercise})
                break;
            case "duration":
                navigation.navigate("Duration", {exercise: exercise})
    }
    return(
        <View>
            <Text>Welcome! Pick an Exercise</Text>
        </View>
    )
}
}