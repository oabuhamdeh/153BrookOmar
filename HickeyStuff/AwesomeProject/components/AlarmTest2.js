import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Button, TextInput, FlatList} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ButtonSmall from "./ButtonSmall";

const AlarmTest = ({num,color}) => {

  const [hour,setHour] = useState(0)
  const [minute,setMinute] = useState(0)
  const [day,setDay] = useState(0)
  const [alarmTitle,setTitle] = useState("")
  const [alarmDesc,setDesc] = useState("")
  const [pomodoros,setPomodoros]= useState([])

  // this loads in the data after the app has been rendered
  useEffect(() => {getData()},[])

  const getData = async () => {
    try {
      // the '@profile_info' can be any string
      const jsonValue = await AsyncStorage.getItem('@pomodoros')
      let data = null
      if (jsonValue!=null) {
        data = JSON.parse(jsonValue)
        setPomodoros(data)
        console.log('just set Info, Name and Email')
      } else {
        console.log('just read a null value from Storage')
        // this happens the first time the app is loaded
        // as there is nothing in storage...
        setPomodoros([])
        setHour(0)
        setMinute(0)
        setDay(0)
        setTitle("")
        setDesc("")
      }
    } catch(e) {
      console.log("error in getData ")
      // this shouldn't happen, but its good practice
      // to check for errors!
      console.dir(e)
      // error reading value
    }
}

const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@pomodoros', jsonValue)
      console.log('just stored '+jsonValue)
    } catch (e) {
      console.log("error in storeData ")
      console.dir(e)
      // saving error
    }
}


const clearAll = async () => {
    try {
      console.log('in clearData')
      await AsyncStorage.clear()
    } catch(e) {
      console.log("error in clearData ")
      console.dir(e)
      // clear error
    }
}


// Each Pomorodo in the FlatList will be rendered as follows:
const renderPomodoro = ({item}) => {
return (
  <View style={{flexDirection:'row',
  justifyContent:'space-between', backgroundColor: '#'
  }}>
       <Text>{item.hour}</Text>
       <Text>{item.minute}</Text>
       <Text>{item.day} </Text>
       <Text>{item.title} </Text>
       <Text>{item.desc} </Text>
  </View>
)
}

    return (
      <View style = {{flexDirection: 'column', height: 1200}}>
      <View style={{flex: .7, 
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    margin:20,
                    padding:20,
                    backgroundColor: color,
                    flexDirection: "column", borderWidth: 0, borderColor: "#e2f4ad", borderRadius: 30, borderWidth: 10}} >
                      <Text style={{fontSize: 20, flexDirection: "row", justifyContent: "center", padding:10, color:"black"}}>
                            Add New Alarm{'\n'}
                          </Text>
                      <View style={{flexDirection:"column"}}>
                        <View style={{flexDirection:"row"}}>
                          <ButtonSmall style={styles.button2}
                            title="+1 Hour"
                            onPress = {() => {
                              if (hour == 23) {
                                setHour(0)
                              } else {
                                setHour(hour+1)
                              }
                            }}
                          />
                          <ButtonSmall style={styles.button}
                            title="-1 Hour"
                            onPress = {() => {
                              if (hour == 0) {
                                setHour(23)
                              } else {
                                setHour(hour-1)
                              }
                            }}
                          />
                          </View>
                          <View style={{flexDirection:"row"}}>
                          <ButtonSmall style={styles.button}
                            title="+5 Minute"
                            onPress = {() => {
                              if (minute == 55) {
                                setMinute(0)
                              } else {
                                setMinute(minute+5)
                              }
                            }}
                          />
                          <ButtonSmall style={styles.button}
                            title="-5 Minute"
                            onPress = {() => {
                              if (minute == 0) {
                                setMinute(55)
                              } else {
                                setMinute(minute-5)
                              }
                            }}
                          />
                          </View>
                          <View style={{flexDirection:"row"}}>
                          <ButtonSmall style={styles.button}
                            title="+1 Day"
                            onPress = {() => {
                              if (day == 30) {
                                setDay(30)
                              } else {
                                setDay(day+1)
                              }
                            }}
                          />
                          <ButtonSmall style={styles.button}
                            title="-1 Day"
                            onPress = {() => {
                              if (day == 0) {
                                setDay(0)
                              } else {
                                setDay(day-1)
                              }
                            }}
                          />
                          </View>
                      </View>
                      <Text style={{fontSize: 20, flexDirection: "row", justifyContent: "center", padding:10, color:"black", paddingTop: 20, paddingBottom: 20}}>
                            {hour} : {minute} Days from now: {day}
                          </Text>
                      <TextInput 
                            style={{fontSize:20, height: 50, width: 100, borderColor: "#e2f4ad", borderRadius: 10, borderWidth: 5, backgroundColor: "white",}}
                            placeholder="Title"
                            onChangeText={text => {
                              setTitle(text);
                            }}
                            value = {alarmTitle}/>
                      <TextInput 
                            style={{fontSize:20, height: 50, width: 200, borderColor: "#e2f4ad", borderRadius: 10, borderWidth: 5, backgroundColor: "white",
                          
                          }}
                            placeholder="Description"
                            onChangeText={text => {
                              setDesc(text);
                            }}
                            value = {alarmDesc}/>
                            <View style={{flex: 1, flexDirection: 'row', paddingTop: 20}}>
                            <ButtonSmall style={styles.button}
                            title="Add"
                            onPress = {() => 
                              {
                               const newPomodoros =
                                 pomodoros.concat(
                                   {'hour':hour,
                                    'minute':minute,
                                    'day':day,
                                    'title':alarmTitle,
                                    'desc':alarmDesc,
                                    'completed':new Date()
                                 })
                               setPomodoros(newPomodoros)
                               storeData(newPomodoros)
                               setHour(0)
                               setMinute(0)
                               setDay(0)
                               setTitle("")
                               setDesc("")
                             }}
                             />
                      <ButtonSmall style={styles.button}
                            title="Delete"
                            onPress = {() => 
                              {
                                clearAll()
                                setPomodoros([])
                             }}
                             />
                            </View>
                      
      </View>
        <FlatList
         data={pomodoros.reverse()}
          renderItem={renderPomodoro}
          keyExtractor={item => item.hour}
        />
      </View>
    )
  }

const greeting = () => {console.log("Hello World!")}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: 'aliceblue',
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'red',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
    color: "red",
  },
  button2: {
    margin: 0,
  },
  selected: {
    backgroundColor: 'coral',
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: 'coral',
  },
  selectedLabel: {
    color: 'white',
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
});

export default AlarmTest;
