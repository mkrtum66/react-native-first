import React, {useState} from 'react';
import {StyleSheet, Button, TextInput, View} from "react-native";

const GoalInput = ({setGoals}) => {
    const [inputGoal, setInputGoal] = useState('')

    const goalInputHandler = (val) => {
        setInputGoal(val)
    }

    const addGoalHandler = () => {
        if(!!inputGoal){
            setGoals(prevState => [...prevState, {id: Math.random().toString(), value: inputGoal}])
            setInputGoal('')
        }
    }

    return (
        <View style={styles.row}>
            <TextInput placeholder='Course Goal' style={styles.textInput} value={inputGoal}
                       onChangeText={goalInputHandler}/>
            <Button title='Add' onPress={addGoalHandler}/>
        </View>
    );
};


const styles = StyleSheet.create({
      textInput: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        width: '80%'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

export default GoalInput;
