import React from 'react'
import { View, Text, StyleSheet, pressable, Pressable } from 'react-native'

const CustomButton = ({ onPress, Text}) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Text style={styles.text}>Button</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E85E5E',
        width: '30%',
        padding: '15',
        marginVertical: 5,

        alighItems: 'center',
    },
    text: {
        fontWeight: 'bold',
        color: 'white'
    }
});
export default CustomButton