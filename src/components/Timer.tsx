import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../utils/colors';
import React from 'react';
import { TimerIcon } from '../../assets/icons/home_icons';

export const Timer = () => {
  const [time, setTime] = React.useState(10);
  const timerRef = React.useRef(time);

  React.useEffect(() => {
    const timerId = setInterval(() => {
      timerRef.current -= 1;
      if (timerRef.current < 0) {
        clearInterval(timerId);
      } else {
        setTime(timerRef.current);
      }
    }, 60000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <View style={styles.time}>
      <TimerIcon />
      <Text style={styles.timeText}>{time}m</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  time: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  timeText: {
    color: Colors.white,
    opacity: 0.6,
    fontSize: 16,
    paddingLeft: 4,
  },
});