import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Button} from "react-native";

const GoalItem = ({item, deleteHandler}) => {
    return (
        <TouchableOpacity onPress={deleteHandler}>
            <View style={styles.listItem}>
                <Text>{item.value}</Text>
                <Button title='X' onPress={deleteHandler}/>
            </View>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        backgroundColor: '#ccc',
        borderWidth: 1,
        borderColor: 'black',
        marginVertical: 5,
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})


export default GoalItem;
