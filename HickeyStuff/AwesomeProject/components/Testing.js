import React,{useState} from 'react';
import {View, Button, Text, StyleSheet, FlatList} from 'react-native';
//import AddAlarm from "./AddAlarm";
import DigitView from "./DigitView";
import AddAlarm from "./AddAlarm";
import AlarmTest from "./AlarmTest";


const Testing = () => {
    return (
        <View style={{flexDirection: 'column'}}>
            <Text style={styles.titleText}>Time to Test</Text>
                <AlarmTest num="3" color="#f2fada"/>
            
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