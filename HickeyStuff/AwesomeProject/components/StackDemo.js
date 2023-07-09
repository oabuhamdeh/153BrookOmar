import * as React from 'react';
import {Button,Text,View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DaySchedule from './DaySchedule';
import About from "./About";
import Testing4 from "./Testing4";
import ButtonB from "./ButtonB";
import RedesignAlarm from "./RedesignAlarm";
import Calendar from "./Calendar";
// import Alarm from "./Alarm-APP-with-React-Native/App";

const Stack = createNativeStackNavigator();

const HomeScreen = ({navigation}) => {
    return (
     <View style={{ flexDirection:'column', justifyContent:'space-evenly', alignItems: 'center', flex: .6, backgroundColor: 'whitesmoke'}}>
            <ButtonB
                title="Alarms" // add new alarm (in alarms page)
                onPress={() =>
                navigation.navigate('DaySchedule')
                }
            />
            <ButtonB
                title= "About"
                onPress = {()=>
                navigation.navigate('About')
                }
            />
            <ButtonB
                title= "Official alarm setter"
                onPress = {()=>
                navigation.navigate('Testing4')
                }
            />
            <ButtonB
                title="Calendar"
                onPress = {()=>
                navigation.navigate('Calendar')
                }
            />
            {/* <ButtonB
                title="AlarmTest"
                onPress = {()=>
                navigation.navigate('Alarm')
                }
            /> */}
      </View>
    );
  };

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} style ={{flex: .5}}
          options={{title: 'Welcome'}}/>
        <Stack.Screen name="DaySchedule" component={DaySchedule} />
        <Stack.Screen name="About" component ={About} />
        <Stack.Screen name="Testing4" component ={Testing4} />
        <Stack.Screen name="RedesignAlarm" component ={RedesignAlarm} />
        <Stack.Screen name="Calendar" component ={Calendar} />
        {/* <Stack.Screen name="Alarm" component ={Alarm} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;