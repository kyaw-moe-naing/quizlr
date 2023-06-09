import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../utils/colors';

interface HomeTabButtonProps {
  selected?: boolean;
  title: string;
  onPress?: (e: any) => void;
}

export function HomeTabButton(props: HomeTabButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[styles.container]}
      onPress={props.onPress}
    >
      <Text style={[styles.label, !props.selected && { fontWeight: '400' }]}>
        {props.title}
      </Text>
      {props.selected && <View style={styles.selected} />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 12
  },
  label: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.white,
    marginBottom: 5
  },
  selected: {
    width: 30,
    height: 4,
    backgroundColor: Colors.white
  }
});