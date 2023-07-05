import React from 'react';
import {View, Button, Text, StyleSheet, FlatList, Platform} from 'react-native';
import AlarmTest2 from "./AlarmTest2";

const Testing = () => {
  return (
      <View style={{flexDirection: 'column'}}>
              <AlarmTest2 num="3" color="#f2fada"/>
          

      </View>
  )
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
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
});

export default Testing;