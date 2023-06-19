import React,{useState} from 'react';
import {View, Button, Text, StyleSheet, FlatList} from 'react-native';
//import AddAlarm from "./AddAlarm";
import DigitView from "./DigitView";
import AddAlarm from "./AddAlarm";


const Testing = () => {
    return (
        <View>
            <Text style={styles.titleText}>Time to Test</Text>
                <AddAlarm num="3" color="green"/>
        </View>
    )
}

const styles = StyleSheet.create({
    titleText: {
      fontSize: 50,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    paragraphText: {
        fontSize: 20,
        fontWeight: 'normal',
        textAlign: 'left',
    },
      nameText: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#008080',
    },
  })

export default Testing;