import React from 'react';
import {StyleSheet, View, Text, Platform, FlatList} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DigitView from './DigitView';

<Calendar
  onDayPress={day => {
    console.log('selected day', day);
  }}
/>

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
      <View>
        <Text style={styles.monthName}>July</Text>
      </View>
      <View style={styles.daysOfWeek}>
        <Text style={styles.daysOfWeek}>Sunday - July 1</Text>
        <Text style={styles.daysOfWeek}>Monday - July 2</Text>
        <Text style={styles.daysOfWeek}>Tuesday</Text>
        <Text style={styles.daysOfWeek}>Wednesday</Text>
        <Text style={styles.daysOfWeek}>Thursday</Text>
        <Text style={styles.daysOfWeek}>Friday</Text>
        <Text style={styles.daysOfWeek}>Saturday</Text>
      </View>
      {/* <Text>{getMonth()}</Text> */}
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
    fontSize:20,
  },
  daysOfWeek: {
    borderWidth:1,
    borderColor:"black",
    backgroundColor:"#4F4F4F",
    color:"#fff",
    fontSize:20,
    fontWeight:'300',
    justifyContent:'center',
    textAlign:"center",
    flexDirection:'column',
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