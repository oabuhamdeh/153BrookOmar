import React, {useState} from 'react';
import {Calendar, LocaleConfig, selectedDotColor, Periodmarking, Agenda} from 'react-native-calendars';

const App = () => {
  const [selected, setSelected] = useState('');

  return (
    <Calendar theme={{
        backgroundColor: '#ffffff',
        calendarBackground: '#ffffff',
        textSectionTitleColor: '#b6c1cd',
        selectedDayBackgroundColor: '#00adf5',
        selectedDayTextColor: '#ffffff',
        todayTextColor: '#00adf5',
        dayTextColor: '#2d4150',
        textDisabledColor: '#d9e1e8',}}
      onDayPress={day => {
        setSelected(day.dateString);
      }}
      markedDates={{
        [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
      }}
    />
  );
};

export default App;