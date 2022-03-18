import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList} from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
    const [goals, setGoals] = useState([])

    const deleteGoalHandler = (id) => {
        setGoals(prevState => prevState.filter(item => item.id !== id))
    }


    return (
        <View style={styles.container}>
            <GoalInput setGoals={setGoals}/>
            <FlatList
                data={goals}
                keyExtractor={item => item.id}
                renderItem={itemData => (
                    <GoalItem item={itemData.item} deleteHandler={() => deleteGoalHandler(itemData.item.id)}/>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 50,
    }
});
