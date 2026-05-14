import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Avatar from './Avatar';
import { COLORS, SPACING } from '../constants/theme';

export default function AppHeader({ title = 'Events', showAvatar = true, onMenuPress }) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onMenuPress} style={styles.iconButton}>
        <Ionicons name="search" size={20} color={COLORS.text} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      {showAvatar ? <Avatar size={34} /> : <View style={styles.iconButton} />}
    </View>
  );
}

const styles = StyleSheet.create({
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: SPACING.md },
  title: { fontSize: 18, fontWeight: '800', color: COLORS.text },
  iconButton: { width: 34, height: 34, alignItems: 'center', justifyContent: 'center' },
});
