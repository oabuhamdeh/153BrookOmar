import * as React from 'react';
import {Button,Text,View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WeekSchedule from './WeekSchedule';
import DaySchedule from './DaySchedule';
import About from "./About";
import Testing from "./Testing";

const Stack = createNativeStackNavigator();

const HomeScreen = ({navigation}) => {
    return (
     <View style={{ flexDirection:'row', justifyContent:'space-evenly'}}>
            <Button
                title="Alarms" // add new alarm (in alarms page)
                onPress={() =>
                navigation.navigate('DaySchedule')
                }
            />
            <Button
                title="View week schedule"
                onPress={() =>
                navigation.navigate('WeekSchedule') 
                }
            />
            <Button
                title= "About"
                onPress = {()=>
                navigation.navigate('About')
                }
            />
            <Button
                title= "Test - Don't click me!"
                onPress = {()=>
                navigation.navigate('Testing')
                }
            />
      </View>
    );
  };

  const ProfileScreen = ({navigation, route}) => {
    return <Text>This is {route.params.name}'s profile</Text>;
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
