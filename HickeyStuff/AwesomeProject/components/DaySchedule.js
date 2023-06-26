import React,{useState} from 'react';
import {View, Button, Text} from 'react-native';

const App = () => {
    const [numAlarms,setNumAlarms] = useState(0)
    const [isPressed, setIsPressed] = useState(false);
    const [numPressed, setNumPressed] = useState(0);
    return (
      <View>
            <Text style = {{fontSize: 40}}>
                Alarms: {numAlarms} current alarms
            </Text>
            <View style={{flex: 5, flexDirection: 'row'}} >
                Button pressed {numPressed} times
                <Button
                    title="Add Alarm"
                    onPress = {() => setNumAlarms(numAlarms+1)}
                />
                <Button
                    title="Delete Alarm"
                    onPress = {() => setNumAlarms(numAlarms-1)}
                />
                <Button
                    onPress={() => {
                        setIsPressed(!isPressed);
                        setNumPressed(numPressed+1);
                        }}
                    title={isPressed ? 'I have been pressed an odd number of times!' : 'I have been pressed an even number of times!'}
      />
            </View>
      </View>
    )
  }


export default App;
