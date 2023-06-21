import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import ButtonSmall from "./ButtonSmall";

const AlarmTest = ({num,color}) => {

  const [hour,setHour] = useState(0)
  const [minute,setMinute] = useState(0)

    return (
      <View style={{flex: 1, 
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin:20,
                    padding:20,
                    backgroundColor: color,
                    flexDirection: "row"}} >
                      <Text style={{fontSize: 70, flexDirection: "row", justifyContent: "center", padding:10, color:"black"}}>
                            Alarm
                          </Text>
                      <View style={{flexDirection:"column"}}>
                        <View style={{flexDirection:"row"}}>
                          <ButtonSmall style={styles.button2}
                            title="+1 Hour"
                            onPress = {() => {setHour(hour+1)}}
                          />
                          <ButtonSmall style={styles.button}
                            title="-1 Hour"
                            onPress = {() => {setHour(hour-1)}}
                          />
                          <Text style={{fontSize: 20, flexDirection: "row", justifyContent: "center", padding:10, color:"white"}}>
                            {hour}
                          </Text>
                          </View>
                          <View style={{flexDirection:"row"}}>
                          <ButtonSmall style={styles.button}
                            title="+5 Minute"
                            onPress = {() => {setMinute(minute+5)}}
                          />
                          <ButtonSmall style={styles.button}
                            title="-5 Minute"
                            onPress = {() => {setMinute(minute-5)}}
                          />
                          <Text style={{fontSize: 20, flexDirection: "row", justifyContent: "center", padding:10, color:"white"}}>
                            {minute}
                          </Text>
                          </View>
                      </View>
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
