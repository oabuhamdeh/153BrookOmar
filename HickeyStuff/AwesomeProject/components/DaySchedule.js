import React,{useState} from 'react';
import {View, Button, Text} from 'react-native';

const App = () => {
    const [change,setChange] = useState(0)
    return (
      <View>
            <Text style = {{fontSize: 40}}>
                Alarms: 0 current alarms
            </Text>
            <Text style = {{fontSize: 20}}>
                {change}
            </Text>
            <View style={{flex: 1, flexDirection: 'row'}} >
                <Button
                    title="Add Alarm"
                    onPress = {() => setChange(change+1)}
                />
                <Button
                    title="Delete Alarm"
                    onPress = {() => setChange(change+5)}
                />
            </View>
      </View>
    )
  }


export default App;
