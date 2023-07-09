import React,{useState} from 'react';
import {View, Button, Text, ScrollView} from 'react-native';

const App = () => {
    const [numAlarms,setNumAlarms] = useState(0)
    const [isPressed, setIsPressed] = useState(false);
    const [numPressed, setNumPressed] = useState(0);
    return (
      <ScrollView>
            <Text style = {{fontSize: 20, fontWeight:'200'}}>
                Alarms: {numAlarms} current alarms
            </Text>
            <View style={{flex: 5, flexDirection: 'column'}} >
                <View style={{flexDirection:'row'}}>
                    <Button
                        title="Add Alarm"
                        onPress = {() => setNumAlarms(numAlarms+1)}
                    />
                    <Button
                        title="Delete Alarm"
                        onPress = {() => setNumAlarms(numAlarms-1)}
                    />
                </View>
                <Text>Button pressed {numPressed} times</Text>
                <Button
                    onPress={() => {
                        setIsPressed(!isPressed);
                        setNumPressed(numPressed+1);
                        }}
                    title={isPressed ? 'I have been pressed an odd number of times!' : 'I have been pressed an even number of times!'}
      />

            </View>
      </ScrollView>
    )
  }


export default App;
