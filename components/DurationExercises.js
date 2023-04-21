import React from "react";
import { useState } from "react";
import { View, Text, TouchableOpacity } from 'react-native'

export default function DurationExercises ({navigation, route}) {
    const workouts = route.params
    let startTimer = 0

    let [running, setRunning] = useState(false)
    let [timer, setTimer] = useState(0)
    let updateTimer = useCallback(() => {
        if (running) {
            setTimer((timer) => timer + 10)
        }
    }, [running])
    useEffect(() => {
        startTimer = setInterval(updateTimer, 10)
        return () => clearInterval(startTimer)
    }, [running, updateTimer])

    let startStop = useCallback(() => {
        setRunning(!running)
        clearInterval(startTimer)
    }, [running])

    let resetTime = useCallback(() => {
        setTimer(0)
    })
    let minutes = (Math.floor((timer / (1000*60)) %60)).toString().padStart(2, "0")
    let seconds = (Math.floor((timer / 1000) % 60)).toString().padStart(2, "0")
    let millis = (timer % 1000).toString().padStart(3, "0")
    
    return <div style = {{width:"100vw", textAlign: "center"}}>
        <p>{minutes}:{seconds}.{millis}</p>
        <button className="start-pause"  onClick = {startStop}>
            {running ? "Pause" : "Start"}
        </button><br></br>
        <button className="reset-run" onClick = {() => {
            setTimer(0)
        }} >Reset</button><br></br>
        <button className="back-button" onClick={
            () => window.location.reload()}>Back to Main Menu</button>
    </div>
}
