import React,{useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

const About = () => {
    return (
        <ScrollView>
            <Text style={styles.titleText}>About the App</Text>
            <Text style={styles.paragraphText}> {"\n"}This app is designed for us ADHD folk, who can't get through everyday life without a myriad of alarms
            on our phones. The idea for this app is that a user can have a full "schedule" of alarms in their phone—so, if they want an alarm to go off once
            every other week, we'd be able to make that happen. You can check which alarms are set to go off that day, and maybe we could even get to a place
            where the app will take note of which things you often set alarms for, and start suggesting certain alarms at certain times for you. We hope that
            this app will help people schedule things into their days and weeks in a way that will allow them to function more successfully in everyday life.
            {"\n"}{"\n"}</Text>
            <Text style={styles.titleText}>About the Creators</Text>
            <View>
              <Text style={styles.nameText}>Brooke</Text>
              <Text style={styles.paragraphText}>Brooke is a 22-year-old computer science major at Brandeis University, and she is an incoming junior. Her
              interests include writing, reading, philosophy, psychology, world religions, Hebrew, Judaism, and studying Jewish texts/wisdom. She is
              interested in computer science because she loves the problem-solving element, and she hopes to use it to create systems that improve peoples'
              lives. </Text>
            </View>
            <Text style={styles.nameText}>Omar</Text>
            <Text style={styles.paragraphText}>  Omar is a computer science major who has yet to add in an adequate description. </Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    titleText: {
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    paragraphText: {
        fontSize: 15,
        fontWeight: 'normal',
        textAlign: 'left',
    },
      nameText: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#008080',
    },
  })

export default About;