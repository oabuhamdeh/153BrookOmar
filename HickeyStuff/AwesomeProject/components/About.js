import React,{useState} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

const About = () => {
    return (
        <View>
            <Text style={styles.titleText}>About the App</Text>
            <Text style={styles.paragraphText}> {"\n"} This app is designed for us ADHD folk, who can't get through everyday life without a myriad of alarms
            on our phones.{"\n"}{"\n"}</Text>
            <Text style={styles.titleText}>About the Creators</Text>
            <View>
              <Text style={styles.nameText}> Brooke </Text>
              <Text style={styles.paragraphText}>  Brooke is a 22-year-old computer science major, and is an incoming junior. Her interests include writing,
              reading, philosophy, psychology, world religions, Hebrew, Judaism, and studying Jewish texts/wisdom. She is interested in computer science
              because she loves the problem-solving element, and she hopes to use it to create systems that improve peoples' lives. </Text>
            </View>
            <Text style={styles.nameText}> Omar </Text>
            <Text style={styles.paragraphText}>  Omar is a year-old computer science major. </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    titleText: {
      fontSize: 50,
      fontWeight: 'bold',
      textAlign: 'center',
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
  })

export default About;