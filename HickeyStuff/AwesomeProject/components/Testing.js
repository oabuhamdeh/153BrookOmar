import React from 'react';
import {View, Button, Text, StyleSheet, FlatList, Platform} from 'react-native';
//import AddAlarm from "./AddAlarm";
import DigitView from "./DigitView";
import AddAlarm from "./AddAlarm";
import AlarmTest2 from "./AlarmTest2";
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import {useEffect, useRef } from 'react';
import * as Notifications from 'expo-notifications';


const Testing = () => {
    return (
        <View style={{flexDirection: 'column'}}>
            <Text style={styles.titleText}>Time to Test!</Text>
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