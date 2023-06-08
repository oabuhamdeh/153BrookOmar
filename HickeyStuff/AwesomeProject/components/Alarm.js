import React from 'react';
import {View, Text} from 'react-native';

const Alarm = ({hour,minute,title,description,color}) => {
    return (
      <View style={{flex: 1, 
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin:20,
                    padding:20,
                    backgroundColor: color}} >
            <Text style = {{fontSize: 100}}>
                {title}
            </Text>
            <Text style = {{fontSize: 40}}>
                {description}
            </Text>
      </View>
    )
  }

const greeting = () => {console.log("Hello World!")}


export default Alarm;
