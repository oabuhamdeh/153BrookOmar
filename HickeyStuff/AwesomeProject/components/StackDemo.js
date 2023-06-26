import * as React from 'react';
import {Button,Text,View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WeekSchedule from './WeekSchedule';
import DaySchedule from './DaySchedule';
import About from "./About";
import Testing from "./Testing";
import ButtonB from "./ButtonB";

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
                title="View week schedule"
                onPress={() =>
                navigation.navigate('WeekSchedule') 
                }
            />
            <ButtonB
                title= "About"
                onPress = {()=>
                navigation.navigate('About')
                }
            />
            <ButtonB
                title= "Test - Don't click me!"
                onPress = {()=>
                navigation.navigate('Testing')
                }
            />
      </View>
    );
  };

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="DaySchedule" component={DaySchedule} />
        <Stack.Screen name="WeekSchedule" component={WeekSchedule} />
        <Stack.Screen name="About" component ={About} />
        <Stack.Screen name="Testing" component ={Testing} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;