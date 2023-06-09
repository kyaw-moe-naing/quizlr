import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Colors } from '../utils/colors';
import React from 'react';

export const Action: React.FC<{ icon: React.ReactNode, title: string, onPress?: (e: any) => void; }> = ({ icon, title, onPress }) => {
  return (
    <TouchableOpacity style={styles.action} onPress={onPress}>
      {icon}
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  action: {
    width: 45,
    height: 45,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8
  },
  title: {
    fontSize: 12,
    fontWeight: '400',
    color: Colors.white,
  }
});