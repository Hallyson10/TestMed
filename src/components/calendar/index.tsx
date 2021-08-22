import React from 'react';
import { View } from 'react-native';

import {LocaleConfig} from 'react-native-calendars';
import {Calendar} from 'react-native-calendars';

LocaleConfig.locales.fr = {
    monthNames: [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December"
    ],
    monthNamesShort: [
      "Jan.",
      "Feb.",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul.",
      "Aug",
      "Sep.",
      "Oct.",
      "Nov.",
      "Dec."
    ],
    dayNames: [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ],
    dayNamesShort: ["S", "M", "T", "W", "T", "F", "S"]
  };
  
  LocaleConfig.defaultLocale = "fr";

const calendar = () => {
  return (
        <Calendar
         markingType={'period'}
         markedDates={{
            '2021-08-21': {startingDay: true, color: 'rgba(21,212,216,100)', textColor: '#fff'},
            '2021-08-22': {color: 'rgba(21,212,216,1)', textColor: '#fff'},
            '2021-08-23': {color: 'rgba(21,212,216,1)', textColor: '#fff', marked: true, dotColor: '#fff'},
            '2021-08-24': {color: 'rgba(21,212,216,1)', textColor: '#fff'},
            '2021-08-25': {endingDay: true, color: 'rgba(21,212,216,1)', textColor: '#fff'}
          }}
        scrollEnabled={true}
    />
  )
}

export default calendar;

