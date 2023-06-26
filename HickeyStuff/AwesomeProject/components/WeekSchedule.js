import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DigitView from './DigitView';

const getWeek = (firstDay) => {
  let week=[];
  for(let i = 1; i < 8; i++){
    week.push(
      <Text key={i} style={styles.days}>{firstDay}</Text>
    )
    firstDay=firstDay+1;
  }
  return week;
}

const getMonth = () => {
  let month = [];
  let count=1;
  for(let i = 1; i < 6; i++){
    month.push(
    <View key={i} style={styles.days}>
      <Text>{getWeek(count)}</Text>
    </View>
    )
    count=count+7;
  }
return month;
}

const App = () => {
  return (
    <View>
      <View style={styles.monthName}>
        June
      </View>
      <View style={styles.daysOfWeek}>
        <Text style={styles.daysOfWeek}>Sunday</Text>
        <Text style={styles.daysOfWeek}>Monday</Text>
        <Text style={styles.daysOfWeek}>Tuesday</Text>
        <Text style={styles.daysOfWeek}>Wednesday</Text>
        <Text style={styles.daysOfWeek}>Thursday</Text>
        <Text style={styles.daysOfWeek}>Friday</Text>
        <Text style={styles.daysOfWeek}>Saturday</Text>
      </View>
      <Text>{getMonth()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  monthName: {
    flex: 1,
    padding: 40,
    margin:20,
    borderWidth:2,
    borderColor:"#fff",
    backgroundColor:"#F2FADA",
    fontWeight:'bold',
    justifyContent:'center',
    textAlign:'center',
    fontSize:40,
  },
  daysOfWeek: {
    flex: 5,
    borderWidth:1,
    borderColor:"black",
    fontSize:30,
    justifyContent:'center',
    textAlign:"center",
    flexDirection:'row',
  },
  days: {
    flex: 5,
    borderWidth:1,
    borderColor:"black",
    fontSize:30,
    textAlign:"left",
    flexDirection:'row',
    marginLeft: 60,
    marginRight: 60,
    padding: 30,
  },
});

export default App;