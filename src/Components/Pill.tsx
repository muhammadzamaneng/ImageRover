import React from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';
import {PillProps} from '../types/piils.type';

const Pill = ({label, setPillLabel}: PillProps) => {
  return (
    <Pressable onPress={() => setPillLabel(label)} style={styles.pill}>
      <Text style={styles.pillText}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pill: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    backgroundColor: '#007BFF',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  pillText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default Pill;
