import { TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Colors } from '../utils/colors';
import React from 'react';

export const Avatar: React.FC<{ uri: string, onPress?: (e: any) => void; }> = ({ uri, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={{ uri: uri }} style={styles.avatar} />
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
    overflow: 'hidden',
    borderColor: Colors.white,
    borderWidth: 1,
  }
});