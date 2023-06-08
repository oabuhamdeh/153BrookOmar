import React,{useState} from 'react';
import {View, Text, Button} from 'react-native';

const [hour,setHour] = useState(0)
const [minute,setMinute] = useState(0)
const [title,setTitle] = useState("")
const [desc,setDesc] = useState("")
const [rep,setRep] = useState(false)

const DigitView = ({num,color}) => {
    return (
      <View style={{flex: 1, 
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin:20,
                    padding:20,
                    backgroundColor: color}} >
            <Text style = {{fontSize: 40}}>
                {num}
            </Text>
      </View>
    )
  }

const greeting = () => {console.log("Hello World!")}


export default DigitView;
